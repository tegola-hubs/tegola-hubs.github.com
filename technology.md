---
layout: default
title: Technology Brief
filename: technology.md
---

<div class="image-float-left"> 
  <img src="/media/technology.png" alt="Mast" />
</div>

Technology Brief
================

This is a gentle introduction to the technology of broadband
distribution.  We have tried to make it as simple as possible, and we
shall use our own project as an example.

In order to get broadband to your house, some kind of connection needs
to be made to the *backhaul*.  The backhaul is the network that
connects the country (in fact the world) together.  Think of it as the
water mains or the electricity grid -- it's where you get your
broadband "supply" from.  In cities, many people connect to the
backhaul at the telephone exchange over their copper telephone wire,
but for reasons we shall describe shortly, this may not be possible in
the country.  It's important to understand that the company that
provides the backhaul is not necessarily the company that connects you
to the backhaul.

To connect to the backhaul, there are two general methods: through
some kind of cable and using wireless.  Let's look at the cable
options first.

* Copper wire. This 150 year old technology has served telephone
  communications very well, but speech transmission requires rather
  low data rates. Telephone wires are not good for the data rates
  required by broadband.  The longer the line, the slower the
  transmission.  If you are above 5 miles it's unlikely that the
  wire will carry any kind of broadband and above 2 miles, the
  transmission speeds are not likely to be good.

  In Arnisdale, the telephone connection comes from Glenelg (where
  there is backhaul) but the cable has been dropped along the
  roadside by British Telecom and is nine miles long.  This is too
  long for broadband. In fact people at the end of the cable even
  have difficulty in getting a dial-up connection.  Copper wire is
  not only bad for broadband, it is unecological.  The cable between
  Arnisdale and the exchange in Glenelg probably contains more than
  three tons of copper!

* Optic fibre. This has excellent transmission properties.  In fact
  this is how the huge amounts of data are carried over long
  distances (e.g., under the Atlantic). Optic fiber is also being
  used for last mile transmission in some urban areas. Many
  businesses use it internally. While the cost of fibre may be
  comparable to copper, the higher deployment costs come in the way
  of its universal adoption. A possibility is to use mixture of
  optic fibre and copper
  ([FTTC](http://wikipedia.org/wiki/Fiber_to_the_x)) that
  obviates the need for re-wiring individual homes while still
  delivering high-speed Internet access.

* Coaxial cable.  We mention it here for completeness. Many cities
  have been wired with coax for cable TV.  It can also be used to
  carry high data rates, but optic fibre is better.  Of course,
  remote communities haven't been wired with coax.

The other form of transmission is wireless. There are two kinds:

* Satellite. Here you have a dish pointing at a satellite which
  connects you with the backhaul back on the ground.  Currently the
  only form satellite broadband that is affordable by most of us is
  one in which the signals coming into your house come via satellite,
  but the outgoing signal goes by telephone cable. This works if you are
  browsing the Web when a few keystrokes go out and lots of data comes
  back, but it won't support internet telephony and it won't support
  businesses that send out as much data as they receive.  Also, the
  affordable packages provide download rates that are little better than
  a good dial-up connection.

  Another possibility is two-way satellite, in which both the inward
  and outward signals go via satellite.  First, these packages are
  much more expensive -- hundreds of pounds a month -- and the data
  rate still isn't that great.

  But there is another problem with any kind of satellite
  transmission. To get to the backhaul, the signal has to travel a
  huge distance -- almost half way to the moon.  Even though the
  rate of data transmission may be adequate, there is a noticeable
  delay in the signal getting to its destination. This makes
  internet telephony difficult, and some programs that require
  direct interaction over the internet become almost unusable.

* Wireless.   We should say terrestrial wireless, to distinguish it
  from satellite, which is also wireless.  In this form, the signal is
  relayed via masts.  Wireless is already used (microwave links) for
  the backhaul.  It is also used (wifi) for local transmission in your
  house.  The commercial-grade kit that is used for backhaul is very
  expensive, so what we are doing is adapting the technology that is
  used in your house to work over long distances.

  A challenge with terrestrial wireless in the Scottish Highlands is
  that the transmission relays, usually small masts, have to have
  line-of-sight; they have to "see" each other.  Now it can be quite
  difficult in mountainous terrain to arrange this. Also the weather
  is not friendly and our masts have some appeal to amourous or
  bellicose stags.  This is where the fun starts

The conclusion of this story is that terrestrial wireless is the only
option open to us, and our research is aimed at making this cheap,
reliable and high speed.  If you want to learn more about how we are
doing this, please turn to our **research page**.
