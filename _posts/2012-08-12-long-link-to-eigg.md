---
layout: post
title: The Long Link to Eigg
author: William Waites
---

<div class="image-float-right">
     <img src="https://lh6.googleusercontent.com/-qK2Hrcg-EYY/UDp7IHC7HgI/AAAAAAAAA0I/bhTxQlKF7n0/w497-h373/2012-08-12%2B14.35.21.jpg" alt="Sgurr of Eigg" />
</div>

Spent the weekend on the [Isle of Eigg] with Simon Helliwell taking in
the [Small Isles] games on Saturday and then heading most of the way
up to the [Sgurr of Eigg] to a spot with a mast that has a panoramic
view over the [Sound of Sleat] to the Northeast, [Knoydart], [Mallaig]
and [Arisaig] to the East and [Glenuig], [Ardnamurchan] and [Coll] to
the Southeast and South.

We aimed, to make a 44km link to the Coille Mhialairigh to the West of
[Beinn Sgritheall] in order to connect [Hebnet], the network on the
Small Isles to the [Loch Hourn] network. This was to be our longest
link, with most of the others being in the 10-20km range. On either
either end we used being the 5 GHz [Ubiquiti Rocket M] with parabolic
antennæ and the Loch Hourn end was set up on the previous trip to
[Arnisdale].

The weather was beautiful and we were fortunate that, as with the
previous link from the Creagan Dearga in Southwest Knoydart to the
[Sabhal Mòr Ostaig] college, the link came up immediately, at more or
less full signal strength -- in the neighbourhood of -65dBm,
corresponding to a [Signal to Noise Ratio] of about 25:1. So far so
good. After some tidying, we headed back down the hill to take a
closer look at what was needed for Eigg to make use of this new link.

The network on Eigg is flat. That is, it doesn't employ routing, all
of the radios are set up as one big [bridge]. Though there are 
disadvantages to such a setup, it does have a couple of advantages. In
this case it meant that we could use the new link at Simon's house
without changing any of the other end-sites simply by changing the
default gateway on his local router. When we did so, we immediately
found that something was wrong.

The physical layer data rate at which the link synchronised appeared,
according to the diagnostics on the radio on the Sgurr, to be some
180Mbps in the Eigg -- Loch Hourn direction and 6Mbps in the
reverse. Even at that, dropped packets made the link almost
unuseable. Checking, we found that the distance setting on the Sgurr
radio wouldn't go beyond about 25km. This setting really governs the
802.11 acknowledgement frame timeout -- there's a paper [here][ack]
that discusses this in some depth, but the brief version is
that the farther apart the radios are, the longer they must
wait for acknowledgement of their transmissions, due simply to the
fact that electromagnetic radion travels at a certain speed (the speed
of light, actually). The Loch Hourn end, running [OpenWRT], happily
accepted a distance setting of 50km (the usual practice is to
overestimate the distance by about 10% for best results).

Some pulling out of hair, and a lot of trial and error later, we found
that this was related to the channel bandwidth. With [802.11n] there
is a choice of channel bandwidth. Channels can be either 5, 10, 20, 30
or 40MHz wide. In general, and assuming good conditions, the wider the
channel, the faster the link since more information can be sent per
unit time. The usual tradeoff is that in areas where the radio
spectrum is congested, it might not be possible to find a contiguous
block of 40MHz that is free from interference. This is often the case
in cities, but the West Highlands and Islands is a pretty RF-quiet
area.

However, there is another circumstance in which it is not possible to
use wide channels. Because 802.11 works by transmitting a frame and
then waiting for an acknowledgement before transmitting the next one
(and possibly re-transmitting if the acknowledgement is not received
in time), if you increase the speed at which frames are sent, you also
increase the speed at which acknowledgements are sent. But this speed
is also limited by the physics. To see this is simple, assuming no
time spent processing between packets, a packet may be sent at most
once every *t* seconds:

<span>
\[
t = \frac{2d}{c}
\]
</span>

where \\(d\\) is the distance between the radios, and \\(c\\) is the
speed of light. The maximum rate, in packets per second, is then the
reciprocal,

<span>
\[
r = \frac{1}{t} = \frac{c}{2d}
\]
</span>

In our case, setting \\(d\\) at 44km, \\(r\\) works out to about
3400pps.  If we take the average packet to be the best case, 1500
bytes or 12000 bits, and call this \\(s\\), we have,

<span>
\[
b = rs = 3400 \times 12000 = 40.8 Mbps	
\]
</span>

which, ignoring other overhead like [forward error correction] and
such, is the maximum possible transmission speed. But these speeds are
possible with a 20MHz channel. Using a 40MHz channel is simply a waste
of RF spectrum. This is the reason for the seemingly arbitrary limit
in the Ubiquiti firmware.

So, we set the channel bandwidth to 20MHz at both ends and, presto,
the link came up and began to function perfectly.

By way of testing, we watched the webcam at the Coille Mhialairigh
mast that [Peter Buneman] had pointed at Eigg. After a short time, we
lost connectivity. The link remained up, but we couldn't see beyond
the radio on the other side. After a minute or so, it came back. We
repeated this a couple of times, and the same thing happened. Very
strange.

Back in [Edinburgh], we conducted some more specific tests. It proved
to be possible to crash the switch by simply running the [iperf] tool
between the radios. This test didn't involve the switch directly at
all. It turns out that the answer has to do with the Coille
Mhialairigh mast being self powered, or rather powered by solar panels
and batteries about 50m down the hill. The Ubiquiti radios are
designed to be fairly tolerant of different input voltages from their
power supplies. They ship with a 24V [Power over Ethernet] but will
happily accept anything from about 10V. The little [Netgear
GS108T-200] on the other hand wants something pretty close to 12V. The
extra draw caused by continuous transmission must be enough to cause
the supply to the switch to fall outwith its tolerances, causing it to
reboot.

This is to be fixed by, in the immediate term, removing any extra
cabling to improve the efficiency of power delivery to the mast at
Coille Mhialarigh, and in the medium term arranging mains power for
the mast. This shouldn't be too hard as there are power lines only a
couple of hundred meters away.

[Isle of Eigg]: http://www.isleofeigg.org/
[Small Isles]: http://wikipedia.org/wiki/Small_Isles
[Sgurr of Eigg]: http://wikipedia.org/wiki/An_Sg%C3%B9rr_(Eigg)
[Sound of Sleat]: http://wikipedia.org/wiki/Sound_of_Sleat
[Knoydart]: http://wikipedia.org/wiki/Knoydart
[Mallaig]: http://wikipedia.org/wiki/Mallaig
[Arisaig]: http://wikipedia.org/wiki/Arisaig
[Glenuig]: http://wikipedia.org/wiki/Glenuig
[Ardnamurchan]: http://wikipedia.org/wiki/Ardnamurchan
[Coll]: http://wikipedia.org/wiki/Coll
[Beinn Sgritheall]: http://wikipedia.org/Beinn_Sgritheall
[Hebnet]: http://www.hebnet.co.uk/
[Loch Hourn]: http://wikipedia.org/wiki/Loch_Hourn
[Ubiquiti Rocket M]: http://www.ubnt.com/airmax#rocketm
[Arnisdale]: http://arnisdale.org/
[Sabhal Mòr Ostaig]: http://www.smo.uhi.ac.uk/
[Signal to Noise Ratio]: http://en.wikipedia.org/wiki/Signal-to-noise_ratio
[bridge]: /library/patterns.html#bridging
[ack]: http://static.usenix.org/event/nsdi07/tech/full_papers/patra/patra_html/index.html
[OpenWRT]: http://www.openwrt.org/
[802.11n]: http://wikipedia.org/wiki/802.11n
[forward error correction]: http://en.wikipedia.org/wiki/Forward_error_correction
[Peter Buneman]: http://homepages.inf.ed.ac.uk/opb
[Edinburgh]: http://www.inf.ed.ac.uk/
[iperf]: http://iperf.fr/
[Power over Ethernet]: http://wikipedia.org/wiki/Power_over_Ethernet
[Netgear GS108T-200]: http://www.netgear.co.uk/business/products/switches/smart-switches/smart-switches/GS108T-200.aspx
