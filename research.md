---
layout: default
title: Introduction
---

<div class="image-float-right"> 
  <img src="/media/research.png" alt="Mast" />
</div>

Research
========

As we have already indicated, our research is about making broadband
in remote areas affordable and fast.  There are a number of problems
we need to solve, not all of them are technical, but being computer
scientists we are mostly interested in the technical issues. If you
are interested in any of these topics, please get in touch with us.

* **Embedded Applications** One of the important things to know about
  our masts and the relays on people's roof tops is that they each
  contain quite a powerful computer that we can program.

  * Usually we can do this programming remotely, but occasionally we
    mess up and have to make a trip to the mast in question.  It's no
    fun climbing up a mountain in miserable weather, so we want to
    develop software that helps us configure the masts, installs new
    software and tries to prevent us from messing up.

  * We can use these individual computers to make intelligent
    decisions about what to do with the data they are forwarding.  For
    example, if you are using voice over IP -- also called internet
    telephony -- even short interruptions are unacceptable, but if you
    are downloading a large picture, you would probably be more
    concerned about the overall speed of download, even if there are
    short interruptions.  Smart software could understand that the two
    kinds of data should be treated differently.

  * Smart software at the masts could figure out automatically how to
    reconfigure the network in case of a failure. It could also figure
    out how to reduce the power needed for the computers and wireless
    cards.  For self-powered masts this is very important.

* **Mast location** Finding locations for masts is a very difficult
  task. The mast we have between Sabhal Mòr Ostaig and Arnisdale is at
  the lowest point (around 310m) that has line-of-sight to both
  places. It is quite hard to find such a position.  Also, look at the
  [map](http://www.tegola.org.uk/maps/) and see if you can establish a
  better ring that will serve the communities involved. And it's not
  just about finding connections with line-of-sight; there are other
  factors:

  * Ease of access. It's a slog climbing up 310m and something that is
    dangerous in bad weather. 
  * Proximity of a power supply.  Self-powered masts are more
    expensive, both to build and to maintain.
  * Access rights.  We have to put these masts on someone's land. 

  In addition, we need more than just line-of-sight.  In order to get
  a strong signal the line-of-sight has to be well clear of
  obstructions.

  There are many computational problems here involving algorithms,
  optimization, computational geometry, user interfaces and encoding
  of geo-spatial data. interfaces

* **Self-powered masts** A mast needs about the same power (around
  20W) as a high-efficiency light-bulb; and it needs it all the time.
  It would require a rather large solar panel to produce enough energy
  in a Scottish winter, so we need to use a combination of solar and
  wind, and we need to have adequate battery storage.  But what is the
  right combination?  To answer this question we need to understand
  weather patterns, equipment cost and risk analysis.

* **Transmission over water** Water can act as a mirror to wireless
  transmission between two masts.  It can reflect a signal that
  interferes with the direct signal what this means is that broadband
  can be affected by the tide.  One way to get round this is to move
  masts to higher positions, but this is not much use to people on
  low-lying islands.  We are investigating less costly methods of
  dealing with this problem.

In addition to the electronic and computational problems, there are
social and economic issues.  For example, given that there is some
subsidy for broadband in remote communities (as there is for some
urban communities) what is the most effective way of providing the
subsidy? Also, we imagine that the patterns of usage of internet will
be different in remote communities; there may be an increased demand
for internet telephones and internet radios. This is something that we
need to measure.
