---
layout: default
title: Introduction
filename: intro.md
---

<div class="image-float-left"> 
  <img src="/media/intro.png" alt="Mast" />
</div>

Tegola ("rooftile" in Italian) is about bringing broadband to rural
communities.  The villages of Arnisdale and Corran, and the northwest
shores of Knoydart are typical of many communities that are out of
reach of commercial broadband.  The main problem is cost.  Technology
that works when thousands of people live within a short distance of
each other is hopelessly expensive when you have a population of 100
people living in as many square miles.

For reasons described in the [Technology Brief](technology.html) the
only viable option is wireless, so we need to use cheap wireless
technology -- the same technology that is used to for cordless
telephones and wifi communications in your house.  The hardware for
this is mass-produced and therefore very cheap.

Although this hardware is designed to work indoors over short
distances, with the use of directional antennae we can make it work
over distances of several miles, and it can deliver very good
performance.  Our total investment in hardware so far is less than
£10,000.

In our initial configuration we have built a
[ring of masts](http://www.tegola.org.uk/maps/) to connect us the
[backhaul](technology.html) at
[Mòr Ostaig](http://www.smo.uhi.ac.uk/).
There are two reasons for building a ring: first, from any mast there
are two routes to the backhaul, and we can exploit this for extra
speed; second, if one of the masts fails all the other masts will
still have a connection.  Each mast serves a cluster of houses. We
have mounted small relays on some houses.  These receive a signal from
the mast and transmit it to that house and nearby houses.  In fact, if
you open up a laptop in some parts of Arnisdale, you will get a free
wireless connection.

Our current configuration is already delivering reasonably good
performance, which is promising --- we are already achieving speeds in
excess of 10 Mbps, a speed you would be lucky to get in a city. But of
course we are limited by the bandwidth available to connect to the
wired backhaul. In the long-run the provision of adequate backhaul
capacity to serve the whole of the Highlands and Islands may be a
major problem. Additionally, the end user access speeds are dependent
on a number of factors including, the number of active users, the
available radio spectrum and its efficient usage and radio propagation
characteristics. Efficient spectrum usage is in turn dependent on how
effectively the issues such as mast placement, configuration of radios
and antennas on the masts, and channel access protocol design are
addressed. So even efficiently distributing the available wired
backhaul capacity among end users requires an in-depth understanding
and experimental study of a range of technical issues.
