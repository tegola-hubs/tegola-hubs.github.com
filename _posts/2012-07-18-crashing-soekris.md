---
layout: post
title: Soekris Crash Duplicated in the Lab
---

Continuing the [saga] of the crashing [Soekris Net5501] running
[OpenWRT]... In the lab I now have a setup like the picture below. My
laptop is connected to the OpenWRT router taken from the college on
Skye, and on the far side of it is identical Soekris hardware running
[FreeBSD].

The two soekris routers are connected with three of their ports in
parallel, i.e. eth0 connected to vr0, eth1 connected to vr1, eth2
connected to vr2 (FreeBSD names its interfaces according to the kind
of driver/chip they use).

The laptop generates traffic travelling via the OpenWRT router to the
FreeBSD router. It does this using the iperf tool run like so:

    iperf -c 10.0.0.2 -u -b 20000000 -t 3600
    iperf -c 10.0.1.2 -u -b 20000000 -t 3600
    iperf -c 10.0.2.2 -u -b 20000000 -t 3600

<div class="image-float-right">
  <img src="https://lh5.googleusercontent.com/-qgB68YYN9BY/UAboVtGgggI/AAAAAAAAAf8/keRU6phqEZg/w497-h373/soekris-crash.png" alt="Lab Setup" />
</div>

this will fill up each of the three links between the routers with
approximately 20Mbps worth of UDP traffic each (for an hour).

In fact with only two of these running the OpenWRT host will reliably
crash in a matter of minutes. Nothing whatsoever on the console, no
stack traces or memory dumps, nothing. With only one running the
OpenWRT router seems stable enough, it didn't crash after a day or so
with far more traffic being pumped through it.

The same setup with both routers running [FreeBSD] seems to be solid,
so far so good.

[saga]: /2012/07/17/good-bad-ugly.html
[Soekris Net5501]: http://soekris.com/products/net5501.html
[FreeBSD]: http://www.freebsd.org/
[OpenWRT]: http://www.openwrt.org/