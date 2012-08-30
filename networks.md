---
layout: default
title: Networks
filename: networks.md
---

<div id="map" class="map-default map-right">
</div>

Tegola Networks
===============

* [Loch Hourn](#loch_hourn)
* [Hebnet -- Small Isles](#hebnet__small_isles)
* [Knoydart](#knoydart)
* [Allanton](#allanton)

-----

Loch Hourn
----------

The first Tegola testbed network was built starting in 2008 by the
communities on [Loch Hourn] -- [Arnisdale], [Corran], Inverguserain --
with the help of the [WiMo] group in the [School of Informatics] at
the [University of Edinburgh] and infrastructure support from the
[Sabhal Mòr Ostaig] college of the [University of the Highlands and
Islands].

The initial network consisted in nodes at five sites arranged in a
ring: the Sabhal Mòr Ostaig college, [Beinn Sgritheall] by Arnisdale,
Corran, [Isleornsay], Inverguserain in Northwest Knoydart and back to
the college. At SMO there were actually two separate nodes connected
by ethernet, one facing roughly North to reach Beinn Sgritheall, the
other facing roughly East to reach Inverguserain. These backbone links
use [802.11a] wireless ethernet in the 5 GHz [ISM] band.

Connected to each of these backbone sites are one or more [802.11g]
access points in the 2.4 GHz [ISM] band, and end-user client sites
connect to these. The access points and client devices for the most
part were made by [Ubiquiti Networks].

The original network was built using relatively bespoke hardware based
on the [Gateworks Cambria] platform running the [OpenWRT] distribution
of [GNU/Linux] software. Though it worked very well, it was somewhat
difficult to maintain and deploying new nodes required a level of
expertise that isn't present in most rural communities. 

Meanwhile, the nearby communities on the [Small Isles] and South
[Knoydart] -- of which more below -- began learning from these
experiences and building their own communications infrastructure on a
similar model with the support and assistance of the original Tegola
team. The main difference there being that the equipment was less
bespoke and more "off the shelf". This was possible because by that
time the equipment available from [Ubiquiti Networks] had improved to
the point where it was feasible to use it for backbone nodes rather
than simply edge distribution and client access.

As the communication facilities that this network affords became more
and more important to the communities it was serving, the [research]
activities on the network, whilst very productive, would occasionaly
break things, causing outages and disruptions. Though the communities
very kindly tolerated this, it began to become somewhat of a strain.

And so in the summer of 2012, with the additional support of the
[Carnegie Trust] and the [Department of Mathematics and Computing
Science] at the [University of Stirling], we embarked on a project to
do two things:

* Build a production network, to operate in parallel with the research
  network around Loch Hourn. This production network is built mostly
  using the "off-the-shelf" kit from Ubiqity, which is both faster
  owing to the advent of [802.11n] and more supportable in the long
  term. 

* Interconnect the with the neghbouring communities to provide both a
  faster path for local traffic and to support mutual fail-over for
  added resiliency in case of failures of up-stream Internet access.

[Loch Hourn]: http://wikipedia.org/wiki/Loch_Hourn
[Arnisdale]: http://wikipedia.org/wiki/Arnisdale
[Corran]: http://wikipedia.org/wiki/Corran,_Loch_Hourn
[WiMo]: http://www.wimo.inf.ed.ac.uk
[School of Informatics]: http://www.inf.ed.ac.uk/
[University of Edinburgh]: http://www.ed.ac.uk/
[University of the Highlands and Islands]: http://www.uhi.ac.uk/
[Sabhal Mòr Ostaig]: http://www.smo.uhi.ac.uk/
[Beinn Sgritheall]: http://wikipedia.org/wiki/Beinn_Sgritheall
[Isleornsay]: http://wikipedia.org/wiki/Isleornsay
[802.11a]: http://wikipedia.org/802.11a
[802.11g]: http://wikipedia.org/802.11g
[ISM]: http://wikipedia.org/ISM_band
[Gateworks Cambria]: http://www.gateworks/products/cambria.php
[OpenWRT]: http://www.openwrt.org/
[GNU/Linux]: http://www.gnu.org/gnu/linux-and-gnu.html
[research]: research.html
[Small Isles]: http://wikipedia.org/wiki/Small_Isles
[Knoydart]: http://wikipedia.org/wiki/Knoydart
[Ubiquiti Networks]: http://www.ubnt.com/
[University of Stirling]: http://www.stir.ac.uk
[Department of Mathematics and Computing Science]: http://www.cs.stir.ac.uk/
[802.11n]: http://wikipedia.org/802.11n
[Carnegie Trust]: http://www.carnegie-trust.org/

Hebnet -- Small Isles
---------------------

Knoydart
--------

Allanton
--------

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript" src="/js/tegola/google_maps.js">
</script>
<script type="text/javascript">
  $(document).ready(function () {
      var map = make_map("map");
      add_kml(map, "https://github.com/tegola-hubs/maps/raw/master/tegola-hebnet.kmz");
  });
</script>
