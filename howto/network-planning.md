---
layout: default
title: Network planning
filename: howto/network-planning.md
---

Network Planning
================

There are really two parts to network planning.  One is the physical
connectivity: how do you connect everyone together?  The other
is the issue of equipment: what equipment do you buy, how do you
configure it, and crucially how do connect your network to the larger
internet?  Here, we assume that you have found somewhere that you can
connect to the internet -- your backhaul --  and you now want to build
the network that connects the community to the backhaul.

Networks typically consist of two kinds of links with the rather
obvious names of point-to-point and point to multipoint.
Point-to-point links typically consist of two focussed antennae --
maybe parabolic dishes and are used for links that carry a lot of
traffic over long distances.  Point-to-multipoint links are used for
distribution to a community and usually consist of a sectoral antenna
(a small version of the things you see on mobile phone masts) together
with a number of receivers in the community.

<div class="image-float-right">
    <img src="/media/sgurr2.jpg" width="320" alt="Sgurr relay"/><br/>
    A relay with three point to point links and three sectoral antennae
</div>

One of the relatively recent developments in wireless
technoloy is one usually gets the antenna, the wireless and a
processor as a single unit, so to build a relay, one simply connects
such units together with ethernet cables that carry both signal and
power.  


Let's assume that you have found a place **B**  that you can get a
good connection to the internet and a small community **C** to
which you want to deliver broadband.  Let us also assume, unlike the
happy situation in the [introduction], that there is
no line of sight between **B** and **C**, so you want to find a place
for a relay **R** which can "see" both **B** and **C**.  The plan
would be to build a point-to-point link from **B** to **R** and mount
a sectoral antenna at **R** to provide a point to multipoint link with
each member of the community at **C**.

Of course, you could walk around in the hills looking for a site for
**R**, but this can be hugely time-consuming, and over distances of 10
miles, it often hard to make out what you are looking at -- even in
good weather.

One of the most useful tools for locating relays is a *viewshed*
program.  What this does is colour a map with all the places that are
visible from a given point.  So the idea is that we would paint all
the areas visible from **B** with one colour and paint all the areas
visible from **C** with another colour.  Then any place that is
coloured with both colours is a possible position for a relay.  Here
is a simple example.  When we started the [Tegola] project we wanted
to connect  [Sabhal Mòr Ostaig] on Skye to the small community of
[Arnisdale], a distance of over 20km.

<div class="image-float-center">
    <img src="/media/SMO-Arnisdale.jpg" width="600" alt="Line from SMO
    to Arnisdale"/><br/>Figure 1
</div>

You can see from Figure 1 that there are 300m high hills in the direct line of
sight, and putting relays on the tops of these hills is not a good
idea.  They are inaccessible and a long way from any power source.
Instead, we wanted to find a point nearer to Arnisdale to site a relay.

There is a nice program at [HeyWhatsThat] that produces viewsheds that
you can view in [Google Earth].  Figure 2 shows part of the viewshed
from Sabhal Mòr Ostaig as an area shaded in red.  You can see that Arnisdale, in the top-right
corner is not visible, but the mountainside nearby is.

<div class="image-float-center">
    <img src="/media/smo-viewshed.jpg" width="600" alt="SMO viewshed"/><br/>Figure 2
</div>

We can also do a viewshed from Arnisdale and combine it with that from
Sabhal Mòr Ostaig.  In Figure 3, we have zoomed into Arnisdale, and have
coloured the viewshed from the centre of Arnisdale in blue.  The
overlapping areas appear in purple.  These are the
possible sites for a relay; and **R** marks the spot at which we
actually sited the relay.

<div class="image-float-center">
    <img src="/media/arnisdale-combined-viewshed.jpg" width="600" alt="SMO
    viewshed"/><br/>Figure 3
</div>

At this point I should confess that this was *not* how we actually
found the site.  We found it by walking around the mountainside on a
clear day looking for a suitable place, because at that time we didn't
know of any suitable viewshed programs.  In fact, the viewshed shows
some sites that might have been better. The moral is that it is
well worth playing with viewsheds before slogging your way up mountains!

The choice of site is governed by a number of factors. Shorter links
are better.  Ease of access is an obvious consideration as is getting
a power supply.  As we describe in our [section on power cable], even
over distances of a mile, it may be better to run a power cable than
to use solar and wind energy.  

There is another important consideration: to get the best performance
from wireless equipment you need more than just line of sight there is
a "zone" around the line that should, if possible, be free of
obstructions.  This  described in our [section on Fresnel zones].  
This is why our choice of site is not right at the edge of a purple
area in Figure 3.  Having established a possible position for a relay,
do a viewshed from that relay, and also use [Google Earth] to check
that the lines of sight are sufficiently clear of the ground.

[HeyWhatsThat] is a great tool, but I had to monkey with the output to
get a viewshed in some colour other than red.  It would be really
useful if the people who wrote the program would provide a choice of
colours and also, perhaps, allow one to do multiple viewsheds.


<div class="image-float-center">
    <img src="/media/Cview.jpg" width="700" alt="View of Community"/>
    <br/>View from the relay to the community
</div>

<div class="image-float-center">
    <img src="/media/Bview.jpg" width="700" alt="View of College"/>
    <br/>On a clear day you can just see the "backhaul" 20km away
</div>


[introduction]:index.html
[Sabhal Mòr Ostaig]:http://www.smo.uhi.ac.uk
[Arnisdale]:http://www.undiscoveredscotland.co.uk/arnisdale/arnisdale/index.html
[HeyWhatsThat]:http://www.heywhatsthat.com/
[Google Earth]:http://www.google.com/earth
[section on power cable]: cabling
[section on Fresnel zones]: fresnel.html
