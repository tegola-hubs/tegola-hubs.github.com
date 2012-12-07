---
layout: default
title: Connecting to telephone lines
filename: howto/adsl.md
---
Connecting to telephone lines
=============================
<div class="image-float-center">
    <img src="/media/adslbox.gif" width="400" alt="Telephone diagram"/><br/>
</div>
 

In this section we want to deal with a situation that is,
unfortunately, far too common: how to connect a community network to a
set of telephone lines.  We assume you are building a network that has
for a community that poor or non-existent broadband to  somewhere, let's call it A, in which
people are getting "passable" speeds.  Perhaps they have connections
that are advertised at 8Mb/s advertised but deliver 6-7Mb/s in
practice.    You want to connect your network to one or more telephone
lines at A.  How do you do this, and how can you benefit from connecting
to several lines?  One's intuition is that the more telephone lines
you use, the better your community broadband will be, but the story is
a bit subtle.

Incidentally, we say this is unfortunate because, if an 8Mb/s service
is offered, it is very likely that there is fibre to the exchange in A,
so you could, in principle, get much higher bandwidth.  Although
the technology of connecting you directly to the fibre is simple, the
telephone company that owns the fibre operates in such a way that
installing such a connection not perceived as profitable and will
probably want to charge you "funny money" for it.

So, suppose we  want to connect the ethernet cable that comes from an
antenna -- or even a fibre to the community -- to, say, four telephone
lines.  You need to install some kind of router or switch.  What does
this do and from where do you get it?

UK residents shoud know that although the physical copper that
connects A to the exchange probably belongs to BT (more accurately BT
Openreach) you don't have to buy your service from BT.  Other
companies may offer a service that is better suited to your
needs. 

Static assignment, load balancing and bonding
---------------------------------------------
There are three options open to you: static assingment, load balancing
and bonding.  In static assignment you split your community into
subgroups and assign  each group to one.  So, if you have  a
community of 40 residences and 4 incoming lines, you put 10 residences
on the first line, 10 on the second and so on.  This requires you to
program a switch that knows what customer connects to what line.  It's
not diffcult to do  this, but you need to get the appropriate switch
with ports for, say, 4 telephone lines.  It's not quite clear why one
would want to do static assignment.  Perhaps some customers want less
contention (fewer other people on the same line) and are prepared to
pay for it.

\[Should we say more about contention ratios?\]

The two other options are load balancing and bonding.   In load
balancing, an individual will never see a higher speed than that
provided by a single telephone line.  In bonding the speed goes up.
To understand the difference one needs to know a very little bit about
how data gets sent across the internet.

When you download a picture or a Web page, the data for that page is
broken up into small packets --  *internet packets* -- that are the
basic units of transmission.  Each packet carries the address of its
destination, and this is used to route the packet through the
internet.  The whole  download is called a *session*. At the
destination there is software that assembles the packets for a session
in the right order and sends a requests for packets that have gone
missing.

\[Is the following close enough to correct?\]

In {\em load balancing}, each session is assigned to a line, but the router
may decide to switch a later session from the same user to another
line.  This means that the router will try to avoid contention on any
one line, and no individual will be cut off if one of the lines
fails. However the speed at which any session takes place is still
limited by a single line so individuals doing speed tests will never
see speeds higher than that of the indvidual telephone lines.

Now your network will probably be capable of transmitting packets at a
much higher rate than the individual telephone lines can absorb them,
so in {\em bonding}, the router will take one internet packet and send
it down one line and the next down another line so that the two
packets travel, more or less,  side-by-side.  This effectively creates a "fatter" pipe
through which internet packets flow, and the transmission rate
increases.

Bonding is in some sense the nicest and simplest of the solutions, but
it requires the company that provides you with the router to have a
similar router somewhere else that reassembles the packets in the
order in which they are sent. It is simple because all you need to do
is to plug your antenna cable (or fibre) straight into the company
supplied router.  Also do not expect speeds simply to multiply up with
the number of telephone lines:
there are overheads in bonding and there may be contention at other places in
the network.  Realistically we have heard of 4 bonded 8Mb/s lines delivering
20-24Mb/s

\[Need to add lists of suppliers and equipment\]
