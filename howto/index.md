---
layout: default
title: Introduction to the howto pages
filename: howto/index.md
---

Introduction to the HOWTO Pages
===============================

These pages are intended to help people construct their own wireless
distribution networks.  If your broadband connection to the telephone
exchange goes over more than 1km of copper, then you are probably
better off with a wireless link.  If it's more than 5km, the chances
are that broadband will be miserably slow or not work at all; in which
case wireless is definitely better.  Of course, it would be 
better still if someone would replace the copper with fibre, but that is
expensive and fraught with bureaucratic obstacles. In the next few
years, wireless networks are going to be the only viable option for
many rural communities.  Moreover they are cheap to build; and the
technology is rapidly improving and delivering faster speeds.

The first thing to say is that how you deploy wireless depends on all
sorts of factors, there is no standard solution; but for people who
are new to wireless networks we thought to start with the simplest
possible scenario -- just to illustrate how simple it is.  

You live in an idyllic cottage at the head of Glenbogle.  Perfect peace;
a beautiful garden; spectacular views; but no broadband.  The 
telephone line is very old and comes all the way up the glen from Inverbogle
by a rather circuitous route.  Inverbogle is a prosperous town, and
the exchange has been upgraded to ADSL2+. There's even talk of
deploying fibre through the town. Your friend Fiona, who has a house
in Inverbogle reports that she is reliably getting 17Mb/s on a connection
that her service provider -- as is their habit -- advertised at
20Mb/s.  At any rate, it's more than enough for Fiona, and since her
children have all left home, she is quite happy to share her
connection with you.

On a clear day, you get out your telescope and find that you can see
-- all the way down Glenbogle to Fiona's house -- about 5 miles away,
What do you do?  You buy two of [these small box-like antennae] or
maybe two of these [small dishes] if you want to use the extra speed
when Fiona gets a super-fast connection. There are other competitive
products on the market too.  You mount them on
your and Fiona's roof tops pointing at each other.  You connect the
one on Fiona's roof with a thin  cable to Fiona's ADSL
modem. You connect the one on your roof directly to your computer (or
maybe to a wireless router in your house).  You configure the two
boxes (it's very easy) through a simple Web interface, and that's it!

<div class="image-float-right">
    <img src="/media/nanostation.png" width="320" alt="Fiona's House"/><br/>
</div>


The total cost if you do this yourself is probably about £200, a bit
more if you employ a sparky to make the cables and climb around
on your roof. Given that you are now sharing the cost  of Fiona's
broadband connection, and paying her £100 a year - half the cost of 
her connection, the equipment has paid for itself in two years; and
Fiona is also saving money.

There are certainly people for whom this is the answer.  However, for
most of us it's more complicated.  The major issues are:

* You cannot see Fiona's house, and it's 20 miles away so you need to
  build one or more intermediate relays.

* You are not alone in Glebogle, but live in a small village, and
while Fiona is happy to put a small transmitter on her roof, she's
not sharing her internet connection with 50 people.

Note that we have not listed "you don't have a friend such as Fiona"
as an obstacle.  In our experience, there is always a "Fiona", though sometimes
it is a helpful institution or company rather than an individual, the
only question is whether they have good enough internet access to help
you out.

The following pages take you through the details of building a more
sophisticated wireless network.

* [Network planning]
* [Fresnel zones]
* [Relay construction]
* Power supplies
* Network configuration

----

Further Reading
---------------

* [Link Patterns]

[Relay construction]:relay-construction.html
[these small box-like antennae]: http://www.ubnt.com/nanostation
[small dishes]: http://www.ubnt.com/airmax#nanobridgem
[Link Patterns]: patterns.html
[Network planning]: network-planning.html
[Fresnel zones]: fresnel.html
