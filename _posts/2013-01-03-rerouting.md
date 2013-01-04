---
layout: post
author: William Waites
title: Rerouting Madness
---
The [weather] was against us over the holidays. Power outages at
[Sabhal Mór Ostaig] partitioned the network. The wind blew the mast in
the Coille Mhialairigh out of alignment with Eigg and the college and
disloged a power connector up on the Sgurr. An upstream router in the
[UHI] network failed, and our old core router from the original Tegola
network is still missing in action.

To a great extent, we were able to maintain connectivity through this
storm, though it required some manual intervention and trickery.  This
article is kind of a post mortem examination of what went wrong, and
why and how it was fixed together with some thoughts on how some of
the transitions might be made to happen more smoothly the next time.

The first indication for me that something was wrong came, naturally,
from the monitoring system -- which is just the [Nagios] software
running on a computer at the [School of Informatics] over a
VPN. Mailboxes were filled to overflowing with alerts loudly
proclaiming that "everything" was "down". Oh dear. Looking into this
it quickly became apparent that the far end of the VPN connection was
unreachable -- the far end being a Linux PC that is also the original
core router for the old experimental network.

Speaking with [Peter], who was on site, we found that the VPN gateway
was also unreachable from within the network, and that while our new
core router at SMO was functioning, connectivity to the outside world
had failed a couple of hops beyond it within the UHI network. This is
a bad failure mode because the router can't detect it directly, it
just has a default route pointing out through its neighbour, and as
its neighbour was up it just kept sending traffic into the void a 
little way further out. UHI/SMO are not equipped to use a routing
protocol like BGP out there at the college that would have detected
this condition.

Because our router couldn't detect the failure, traffic couldn't
automatically fail over to our alternative upstream connection, the
bundle of DSL lines that Hebnet has in Mallaig. Ok, simple enough,
remove the default route on the core router, and now traffic starts
flowing out through Mallaig. But there's a problem: the DSL lines
there are still set up for use on Knoydart, with a policy-based
routing arrangement instead of load balancing. This will take a little
explaining.

Historically the DSL lines were ordered from BT retail because at the
time, it seemed to be the obvious thing to do. BT cannot support any
kind of bonding or aggregating or inverse-multiplexing of lines. As
clients we can't really do anything about that directly. To load
balance the choice of which line a given packet is going to go down
has to be made *before* it enters the line. BT controls the equipment
on that end and they won't do this. So the ancient workaround was to
have the router in Mallaig assign certain client networks to certain
lines and to do address translation so BT couldn't see this
happening.

There are several problems with this approach, but the one biting us
in this case was configuration skew -- this router needs to know in
detail which subnets are present in the network and which line they
should be assigned to. But everybody started using the fast connection
at the college long ago and the network evolved significantly since
then and now the configuration on the Mallaig router was hopelessly
out of date.

The first thing was to restore some level of connectivity for
everybody. This meant ripping out the policy-based routing cruft and
making everyone share a single line. There is no way a single line
could handle the volume of traffic normally experienced by the
network, but degraded service is better than no service. The next step
was then to restore some level of aggregation over the multiple lines.

In the meanwhile, in order to relieve congestion on the Hebnet
(Knodyart) line that was now being shared over all the Small Isles and
up to Knoydart and Loch Hourn, Eigg and Rum manually switched over to
their own backup DSL lines. 

Well, not quite the next step. There are still some stragglers that
continue to use the old experimental network. But the router that
connects that network to the new one and to Hebnet had
died. Fortunately there are still a couple of places where the old and
new Tegola networks touch. These links, at Beinn Sgritheall and Corran
are normally just used for out of band access for experiments, but in
this case, turning on OSPF to leak routes between them resulted in
merging the two autonomous systems.

Back to load-balancing. The first tactic was to try to be clever and
do things the Right Way. [Andrews & Arnold] is a friendly and clueful
ISP whose staff is often reachable on holidays and at strange hours of
the night, and is a reseller of Openreach DSL. I remembered from some
early experiences with Bell Canada resellers that the PPP session is
directed to one reseller or another based on the "domain" part of the
PPP username, that is the part after the ampersand. Maybe if we could
direct the PPP sessions on those DSL lines to A&A they would be able
to take care of the far end part of the load-balancing. Unfortunately
it turns out that the way the Openreach network is constructed, this
will only work for the newer 21CN network and not the first generation
20CN ADSL. And the Mallaig exchange, like most of them outside the big
cities in Scotland, has not been upgraded. So much for that idea.

Well, the alternative is tunnels. One tunnel on each line to some
place out on the Internet (hopefully nearby) under our control so we
can decide how traffic gets distributed. Fortunately we have a FreeBSD
router at Informatics, on good bandwidth that could be pressed into
service for this. After a little while wrestling with a couple of
errors in the Cisco router in Mallaig's config, all the tunnels were
up and all the DSL lines were being used.

But after a little while, some of the users were complaining about
intermittent problems, some sites not loading or loading very slowly,
without any strong pattern. As well, there were complaints that people
couldn't send email. This last was easy to diagnose. The router at
Informatics is behind the departmental firewall that restricts which
hosts can be connected to for sending mail. Usually this makes some
sense, the restriction is intended to prevent computers infected by
virii from sending spam. But in this case it was preventing legitimate
communication -- this is often the case with security measures, that
when someone tries to do something perfectly reasonable that happens
to be at odds with the assumptions of whomever came up with the
policy, things break. In any event the fix was to redirect all mail
through the university's mail servers, which is probably also against
policy, but at least it works.

Heisenbugs are a little harder to diagnose. We managed, by using the
[firebug] plugin for [firefox] to find a URL that would consistently
hang when a request was made. Fetching it on the command line, and
running [tcpdump] revealed persistent attempts by the web server to
send some data followed by responses from the router that said the
packets were too big and to send smaller ones or allow them to be
fragmented. This is a mechanism called [Path MTU Discovery] which is
supposed to make it possible for any two computers on the Internet to
find out the size of the largest packet that can travel between them
without being broken into smaller pieces. The "packet too big"
messages are ICMP messages, as are the packets used by [ping], for
example. ICMP messages are often blocked by misguided network
administrators that believe there is some security reason to do
so. What it really does is prevent computers from finding out that
they have tried to send a packet that is too big and that they should
send smaller ones. SSL sessions are particularly badly affected by
this because they begin with an exchange of large packets for the
cryptographic handshake. There's an article on the Tegola web site
that explains [PMTUD and MSS Clamping] in some detail.

This happens with tunnels because a few bytes (20) need to be used for
the encapsulation. The tunnels need a normal outer IP header with
addresses visible on the Internet at large, and then an inner IP
header containing the addresses used for the tunnel itself. This
lowers the [Maximum Transmission Unit] from what is usually 1500
(standard for ethernet) to 1480. But this wasn't sufficient. The
"packet too big" messages indicated that the tunnel MTU was in fact
1280 even though it had been set to 1480. Well, I still don't know
where those extra 200 bytes disappeared to, but clamping the segment
size in the TCP handshake to something that fits into 1280 bytes
worked, and as this was a temporary situation in any case, there
things stood, finally working properly and consistently.

Now that this is in place, failing over in the future ought to be much
smoother. There are some improvements to be made. When the contracts
run out on those BT lines they should be moved to a provider that can
support load-balancing so we don't have to do sub-optimal things with
tunnels to make it work. Where we do use tunnels, they ought to land
on a router outwith departmental firewalls and restrictions intended
for desktop computers. Wherever possible, upstreams should use a
routing protocol to indicate the presence or absence of connectivity
to us so that failures can be detected.

------ 

Today the problem with the UHI upstream router was fixed, and it
was a simple matter to replace the default route and have everybody
back on good bandwidth again, everything back to normal.

[weather]: http://news.stv.tv/scotland/207871-scotland-braced-for-flooding-after-severe-gales-and-heavy-rain/
[Sabhal Mór Ostag]: http://www.smo.uhi.ac.uk/
[UHI]: http://www.uhi.ac.uk/
[Nagios]: http://www.nagios.org/
[School of Informatics]: http://www.inf.ed.ac.uk/
[Peter]: http://homepages.inf.ed.ac.uk/opb
[Andrews & Arnold]: http://aa.net.uk/
[firebug]: http://getfirebug.com/
[firefox]: http://mozilla.com/firefox/
[tcpdump]: http://www.tcpdump.org/
[Path MTU Discovery]: http://en.wikipedia.org/wiki/Path_MTU_Discovery
[ping]: http://en.wikipedia.org/wiki/Ping_%28networking_utility%29
[Maximum Transmission Unit]: http://en.wikipedia.org/wiki/Maximum_transmission_unit
[PMTUD and MSS Clamping]: /howto/pmtud.html
