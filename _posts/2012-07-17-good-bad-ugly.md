---
layout: post
title: The Good, The Bad and the Ugly
author: William Waites
---

<div class="image-frame image-float-right"> 
  <div class="image-inner" style="width: 496px;">
    <img src="https://lh6.googleusercontent.com/-FA3FR5cStt8/UAVlScCvr9I/AAAAAAAAAfI/DJBuIlVT-_I/w497-h373/2012-07-12%2B12.52.09.jpg" alt="Davie Newton at the Creagan Dearga Mast" />
    <p>Davie Newton of the Knoydart Foundation at the Creagan Dearga
       Mast</p> 
  </div>
</div>

I've just returned from a week on the West coast of Scotland working
at joining up two community wireless networks, Tegola and the one
built by the [Knoydart Foundation]. The plan was to put in fast
links from both to the [Sabhal Mòr Ostaig] college on Skye where we
have access to a decent (DS3, I believe) Internet connection. Tegola
is already connected to the college via a slower link whilst Knoydart
uses a bunch of DSL lines at Mallaig.

The Good
--------

The fast links, 5GHz wireless ethernet using [Rocket M] radios from
[Ubiquiti] went in flawlessly. In Knoydart, Davie Newton and I
climbed up to a knoll on top of the Creagan Dearga (little red crags),
put the dish up and aligned it by eye, plugged it in and immediately
saw a signal strength of about -60dBm against a noise floor of
-91dBm. The wireless card reported a bit rate consistently between 270
and 300Mbps, pretty much the maximum you can get with 802.11n.

Similarly, the link from about a third of the way up Beinn Sgritheall
to the college went in flawlessly. This time, instead of running the
radio as a bridge with the stock Ubiquiti firmware and plugging it
into a router, we ran [OpenWRT] on it so that it could be a proper
router in its own right. This confirmed at the very least that the
drivers for the radio chip on them work sufficiently well with a free
software operating system (though I believe them to still contain some
binary blobs). We also put up a webcam overlooking the village of
Arnisdale and Loch Hourn, visible within the network and possibly to
be made public at some point in the future.

The Bad
-------

At the college, we run a router built on a [Soekris Net5501]. This
is basically a PC in a small case with four built-in ethernet
interfaces and one PCI slot for expansion. It also runs OpenWRT and
had been running stably for some time. I brought an identical one with
me to install on the hilltop at the Creagan Dearga in Knoydart
primarily to provide some fail-over capability – use the fast
connection at the college, but in case of a problem there, fall back
to the DSL lines in Mallaig.

Anyhow, we came down the hill, went to the [pub] to admire our
handiwork over a pint and try out what should be better Internet
access than I get at my house in central Edinburgh. So far so
good. Anectodal reports came in of residents seeing 30Mbps in both
directions and we kept an eye on the throughput graphs to confirm that
this was so. The next morning I got on the boat to head to Arnisdale
to put up the Tegola link.

That afternoon, mysteriously, the router at the college
crashed. Hard. Completely locked up. Unreachable over the network,
nothing on the serial ports, no error indicator lights blinking,
nothing. I checked to see if Knoydart had failed over to the DSL lines
and sure enough they had. At least that bit was working. The router at
the college was power-cycled by the college's friendly and helpful
network admin, Martainn Domhnallach and everything was back to
normal. This was Friday afternoon.

Sunday morning it happened again. Then, a couple of hours later the
router in Knoydart also seized. Davie ran up the hill to power-cycle
it (thankfully he didn't have to go all of the way to the top as power
can be cut nearish the bottom) but by the time he got back to Inverie
it had wedged again.

This was unexpected. I have used Soekris hardware before with good
results. Particularly in New Orleans with some kit from the
[Champagne-Urbana community wireless network] and in Toronto I had
some involvement with a metro-area ISP built mostly with
them. But. The CU-Wireless kit was running NetBSD. And the stuff in
Toronto was running FreeBSD. The combination of OpenWRT which is a
kind of Linux and the Soekris boards is new to me.

The Ugly
--------

So now there were two things to do. Get the network back up and
running for the people on Knoydart, and figure out what is wrong with
these Soekris routers. In that order.

The first was relatively easily accomplished by unplugging everything
from the router in Knoydart and plugging it all into a hub, and
putting what should have been the router's local IP address at the far
end of one of the backbone bridges. And patching it all together with
a mishmash of static routes. Similarly at the college but because that
is an upstream Internet gateway, using a very brittle configuration
with an underpowered Linksys router. Not pretty, and full of little
hacks and kludges that I can't wait to see the back of. But it works
as a stopgap. Chewing gum and twine.

Searching around, I came across this [thread on the soekris-tech
mailing list]. The problem sounds identical. In it, the chief engineer
of Soekris, Soren Kristensen, and one Attila argue about whether it
is a hardware or a software problem. Attila argues a design fault
involving power distribution around the board, and Soren argues a race
condition in the Linux driver for the Via Rhine III ethernet chip that
is usually masked by fast processors but shows up with the Soekris
under load because the processor is relatively slow.

Soren's argument rings true partly because I and people who I know
have had good results using the Soekris hardware with BSD variants
which, obviously, do not use Linux drivers (please let us not get into
public discussions about the relative code quality of BSD UNIX versus
Linux, there are enough of those, I'm happy to elaborate privately)
and partly because these things are not new. If the boards were indeed
faulty I'm sure this would be uncovered in the first few pages of
Google results for Soekris.

And there is a smoking gun that some [fixes have been put into very
recent Linux kernels] but apparently this problem is still there.

So the plan now is to,

1. Duplicate the problem in the lab rather than on the hilltop
   which, for all the stunningly beautiful views can get quite windy
   and cold.
2. Try a bigger power supply on the off chance that this improves things.
3. Try a recent development snapshot of OpenWRT to see if newer
   versions of the driver have been fixed.
4. Try running FreeBSD on them and benefit from a codebase that
   doesn't have this bug.
5. When something seems to work, stress test it excessively in the lab
   before bringing it up North...

To follow with a report on these findings in the next few days...

73

[Knoydart Foundation]: http://www.knoydart-foundation.com/our-work/projects/community-broadband-access/
[Sabhal Mòr Ostaig]: http://www.smo.uhi.ac.uk/
[Rocket M]: http://www.ubnt.com/airmax#rocketm
[Ubiquiti]: http://www.ubnt.com/
[OpenWRT]: http://www.openwrt.org/
[Soekris Net5501]: http://soekris.com/products/net5501.html
[pub]: http://theoldforge.co.uk/
[Champagne-Urbana community wireless network]: http://cuwireless.net/
[thread on the soekris-tech mailing list]: http://www.mail-archive.com/soekris-tech@lists.soekris.com/msg06503.html
[fixes have been put into very recent Linux kernels]: http://www.mail-archive.com/soekris-tech@lists.soekris.com/msg06544.html
