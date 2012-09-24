---
layout: post
title: Every Network is Different
author: William Waites
---

Yesterday evening there was an outage on the Tegola / Knoydart / Small
Isles [network]. It was entirely preventable and due to human
error. What follows is an explanation of what happened and what was
done to prevent it happening again.

We have long been in the habit of assigning [loopback addresses]
to the routers in the network. These addresses are used as router
identifiers and provide a way to refer to and reach a router that
is independent of any of its physical interfaces.

A few weeks back we sent a [soekris router] to [Eigg] for
[installation on the Sgurr]. It had been assigned the loopback 
address of `10.127.255.16`. It also had essentially been dormant
for the past while since the link to the [Coille Mhialairigh] mast
had been disabled due to [power problems].

In the meanwhile, much work had been done on the [Loch Hourn]
network, constructing an entirely new production network in
parallel with the old experimental one. A clerical error 
meant that the same address, `10.127.255.16`, had been assigned
to the edge router for [Arnisdale].

Everything was fine until Sunday afternoon, when Davie from the
[Knoydart Foundation] went up the hill to Creagan Dearga and
connected the radio facing Eigg -- Eigg is meant to have two
links, one to Knoydart and one to Loch Hourn. What happens when
you have two routers in an [OSPF] network with the same router
id is not pretty. Everything went haywire in a semi-localised
way, where Arnisdale was intermittently reachable, flapping
up and down.

It was some trouble to track down what the problem was because
we didn't know that the new link had been turned on just then
(though it had been planned for some time). It was also hampered by
the failure mode. The [quagga] routing daemon on the Arnisdale
router simply started crashing without doing anything helpful
like putting diagnostic information in the logs. This was not
exceptionally surprising given that we have experienced stability
problems with quagga, particularly the OSPF daemon, before. And
obviously because the problem appeared to be happening in Arnisdale,
we spent quite a lot of time looking for the problem there -- not
realising that the source of the problem was actually 40km and four
hops away on the backbone.

OSPF belongs to a family of routing protocols called [Interior Gateway
Protocol]s (IGPs). They are intended for use within a single
administrative domain -- where all devices are managed by a single
organisation or team of people. The facilities for filtering or 
applying policy are minimal, the basic assumption being that things
will be done correctly and consistently throughout. Errors are
freely propagated through the network with sometimes mysterious
consequences as happened here.

<div class="image-float-right">
  <img src="/diagrams/west-coast-bgp.png" alt="West coast BGP" />
</div>

There is another family of routing protocols called [Exterior Gateway
Protocol]s (EGPs), the only non-obsolete member of which is the
[Border Gateway Protocol] (BGP). The posture of BGP is much more
defensive. It assumes that anything external to an [Autonomous System] 
is run by somebody else, and any mistakes that they may make should
not necessarily affect the internal functioning of your network.

In this case, there is close cooperation amongst the networks and 
they could be considered to be part of the same administrative 
domain. Still, it isn't a bad idea to partition them and use BGP
peering sessions at the borders to exchange routing information.
There are important differences because of which this makes 
sense:

<dl class="dl-horizontal">
  <dt>Tegola (old)</dt>
  <dd>OSPF</dd>
  <dt>Tegola (new)</dt>
  <dd>OSPF</dd>
  <dt>Knoydart</dt>
  <dd>Static routes</dd>
  <dt>Eigg</dt>
  <dd>Flat network (bridged)</dd>
</dl>

Particularly the old experimental Tegola network ought to be strongly
separated from the rest which carries production traffic. The Knoydart
and Eigg networks are different enough in that they don't really use
an IGP, except inasmuch as static routes or a single flat network can
be considered so. And really it is up to them how they build and run
their networks and because the Tegola networks are running OSPF
doesn't mean that they should.

So the network is now broken into four pieces, using autonomous
systems drawn from the space of private AS numbers (64512 through
65534) and each peers with at least one adjacent network. It is now
coherent to draw diagrams using fluffy clouds -- since what matters,
and what can be managed, are the *relationships* between the networks,
without regard to their internal workings.

This is all done with the [BIRD] routing daemon -- though could as
easily be done with [Quagga]. The relevant fragment of configuration
file from a new tegola router, is reproduced below, complete with
comments.

    /**** Section: Utility functions ****/
    /*
     * Identify if the given network should never ever
     * be seen in the routing protocols...
     */
    function is_bogon(prefix network)
    {
            if (network ~ [127.0.0.0/8, 192.0.2.0/24])
                    then return true;
            return false;
    }

    /*
     * Local networks originated by this ASN
     */
    function is_local(prefix network)
    {
            /* the main netblock (supernet) for this network */
            if (network = 10.11.0.0/16)
                    then return true;
            /* a kludge because UHI also uses this range for
               their servers and some people need to see their
               web servers for distance learning */
            if (network = 10.130.1.0/24)
                    then return true;
            return false;
    }

    /**** Section: Route filters ****/
    /*
     * To BGP Peers
     */
    filter export_BGP {
            /* allow the announcement of a default route */
            if (net = 0.0.0.0/0) then accept;
            /* do not under any circumstances announce things
               that are obviously bogus */
            if is_bogon(net) then reject;
            /* announce local networks */
            if is_local(net) then accept;
            /* announce networks that we have learned from other
               BGP peers */
            if source = RTS_BGP then accept;
            /* do not announce anything else */
            reject;
    }

    /*
     * From BGP peers
     */
    filter import_BGP {
            /* Do not accept obviously bad networks from peers */
            if is_bogon(net) then reject;
            /* Do not allow peers to announce our networks at us */
            if is_local(net) then reject;
            /* Otherwise allow */
            accept;
    }

    protocol static STATIC {
            /* default route */
            route 0.0.0.0/0 via 194.35.194.1;
            /* kludge for UHI web servers */
            route 10.130.1.0/24 via 194.35.194.1;
            /* our own supernet (more specific routes learned by
               OSPF will overried this */
            route 10.11.0.0/16 reject;
    }
    
    /* peering session with the old tegola router */
    protocol bgp T1 {
            local as 65533;
            neighbor 194.35.194.250 as 65534;
            export filter export_BGP;
            import filter import_BGP;
            next hop self;
    }

    /* peering session with knoydart */
    protocol bgp KNOYDART {
            local as 65533;
            neighbor 10.11.0.2 as 65532;
            export filter export_BGP;
            import filter import_BGP;
            next hop self;
    }

    /* peering session (internal) with coille mhialairigh */
    protocol bgp MHIALAIRIGH {
            local as 65533;
            neighbor 10.11.0.50 as 65533;
            export filter export_BGP;
            import filter import_BGP;
    }


[network]: /networks.html
[loopback addresses]: /howto/loopback.html
[soekris router]: /software/bsdrp/
[Eigg]: http://wikipedia.org/wiki/Eigg
[installation on the Sgurr]: /2012/08/12/long-link-to-eigg.html
[Coille Mhialairigh]: http://wikipedia.org/wiki/Beinn_Sgritheall
[power problems]: /2012/09/07/the-arduino-voltmeter.html
[Loch Hourn]: http://wikipedia.org/wiki/Loch_Hourn
[Arnisdale]: http://arnisdale.org/
[Knoydart Foundation]: http://www.knoydart-foundation.org/
[OSPF]: http://wikipedia.org/wiki/OSPF
[quagga]: http://www.nongnu.org/quagga/
[Interior Gateway Protocol]: http://wikipedia.org/wiki/Interior_Gateway_Protocol
[Exterior Gateway Protocol]: http://wikipedia.org/wiki/Exterior_Gateway_Protocol
[Border Gateway Protocol]: http://wikipedia.org/wiki/Border_Gateway_Protocol
[Autonomous System]: http://wikipedia.org/wiki/Autonomous_System
[BIRD]: http://bird.network.cz/
