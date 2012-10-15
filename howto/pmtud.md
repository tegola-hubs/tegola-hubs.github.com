---
layout: default
title: MTU Discovery and MSS Clamping
filename: howto/pmtud.md
---

MTU Discovery and MSS Clamping
==============================

When data is transmitted over an IP link it is broken into
packets. The standard size packet, for mostly historical reasons, and
because Ethernet is so common, is 1500 bytes long. This value is known
as the *Maximum Transmission Unit* or *MTU* of a particular link.

There are some trade-offs involved here. Generally, when a connection
is good, and no packets are dropped, we want the MTU to be as large as
possible -- because the packets contains some header information, and
with a larger MTU the proportion of useful data to housekeeping header
information is larger. On the other hand, if there is congestion or if
a link is experiencing some loss that requires retransmission of the
packets, a larger MTU means there is more to retransmit.

The TCP protocol, which is what looking at web pages and reading email
and, increasingly streaming video uses has its own interactions with
the MTU. It has a concept of *Maximum Segment Size* or *MSS*. This is
simply the amount of useful data in a packet, or just the MTU less
the IP and TCP headers.

TCP also contains a clever mechanism for figuring out what the correct
MSS value ought to be along the path that a connection traverses. It
begins with a guess: \\(MTU - 20 - 20\\) where the IP header and the
TCP header are both 20 bytes. So typically it will start with the MSS
at 1460. It then tries to send some data. It expects that, if this
value is too large, it will receive a message from the intermediary
router where the packet is too big to fit that will tell it to use
something smaller. It then tries again with that smaller value, and
continues until an appropriate MSS is found. This process is known as
*Path MTU Discovery* or *PMTUD*.

When might the MTU be smaller than 1500 bytes? In two common
circumstances: if there is a *Point to Point Protocol* or *PPP*
circuit or a tunnel involved. PPP used to be used with dial-up lines
and is almost always used these days with DSL lines. Except that with
DSL lines at some point it gets dumped onto an ethernet interface --
either at the client side or at the provider side (or both). So now
there's a situation where an ethernet frame has to carry all the usual
stuff -- IP and TCP headers and data -- as well as some extra header
information for PPP, typically an extra 8 to 12 bytes according to
what padding is required by the PPP protocol. This means that the
effective MTU is 1488 bytes and an appropriate MSS might be 1448.

This would all work nicely and properly if it weren't for the fact
that in the name of "security" some firewalls out on the internet
block the control messages that enable TCP to discover that there
is a smaller MTU somewhere in the mix. This can cause TCP sessions to
start up properly and then mysteriously hang as data gets rejected
along the way and the reason why is filtered out by these brain
damaged firewalls. And there's not much that can be done about it
directly because these firewalls may be somewhere far away out on the
Internet and out of our control.

So what to do? One solution is to set the MTU artificially low on
client computers and routers on your network. But this is a lot of
work and not very automatic. Another solution is to fake it -- to tell
the router that is under your control, the one plugged into the DSL
line, say, to mess with the packets in transit and lower the MSS that
they claim to have. This technique is called *MSS Clamping* and is
what is often done in this situation.

