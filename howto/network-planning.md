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
    <img src="/media/sgurr2.jpg" width="640" alt="Sgurr relay"/><br/>
    A relay with three point to point links and three sectoral antennae
</div>




