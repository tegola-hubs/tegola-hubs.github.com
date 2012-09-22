---
layout: default
title: Network planning
filename: howto/network-planning.md
---

Network Planning
================

There are really two parts to network planning.  One is the physical
connectivity: how do you connect everyone together.  The other
is the issue of equipment: what equipment do you buy, how do you
configure it, and crucially how do connect your network to the larger
internet.  Here, we assume that you have found somewhere that you can
connect to the internet -- your backhaul --  and you now want to build
the network that connects the community to the backhaul.

Networks typically consist of two kinds of links with the rather
obvious names of point to point and point to multipoint.
Point-to-point links typically consist of two focussed antennae --
maybe parabolic dishes and are used for links that carry a lot of
traffic over long distances.  Point to multipoint links are used for
distribution to a community and usually consist of a sectoral antenna
(a small version of the things you see on mobile phone masts).

One of the great and relatively recent developments in wireless
technoloy is one usually gets the antenna, the wireless and a
processor as a single unit, so to build a relay, one simply connects
such units together with ethernet cables that carry both signal and
power.  

<div class="image-float-right">
    <img src="/media/sgurr2.jpg" width="320" alt="Sgurr relay"/><br/>
    A relay with three point to point links and three sectoral antennae
</div>


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
to connect the [Sabhal Mòr Ostaig] on Skye to the small community of
[Arnisdale], a distance of over 20km.

<div class="image-float-center">
    <img src="/media/SMO-Arnisdale.jpg" width="600" alt="Line from SMO
    to Arnisdale"/><br/>
</div>


[introduction]:intro.html
[Sabhal Mòr Ostaig]:http://www.smo.uhi.ac.uk
[Arnisdale]:http://www.undiscoveredscotland.co.uk/arnisdale/arnisdale/index.html
