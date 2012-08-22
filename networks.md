---
layout: default
title: Networks
filename: networks.md
---

<div id="foomap" style="width:512px; height:400px;" class="pull-right">>
</div>

Tegola -- Loch Hourn
====================

The first testbed network was built starting in 2008 by the
communities on [Loch Hourn] -- [Arnisdale], [Corran], Inverguserain --
with the help of the [WiMo] group in the [School of Informatics] at
the [University of Edinburgh] and infrastructure support from the
[Sabhal Mòr Ostaig] college of the [University of the Highlands and
Islands].

The initial network consisted in nodes at five sites arranged in a
ring: the SMO college, [Beinn Sgritheall] by Arnisdale, Corran,
[Isleornsay], Inverguserain in Northwest Knoydart and back to the
college. At SMO there were actually two separate nodes connected by
ethernet, one facing roughly North to reach Beinn Sgritheall, the
other facing roughly East to reach Inverguserain. These backbone links
use [802.11a] wireless ethernet in the 5 GHz band.

Connected to each of these backbone sites are one or more [802.11g]
access points in the 2.4 GHz band, and end-user client sites connect
to these.


[Loch Hourn]: http://en.wikipedia.org/wiki/Loch_Hourn
[Arnisdale]: http://en.wikipedia.org/wiki/Arnisdale
[Corran]: http://en.wikipedia.org/wiki/Corran,_Loch_Hourn
[WiMo]: http://www.wimo.inf.ed.ac.uk
[School of Informatics]: http://www.inf.ed.ac.uk/
[University of Edinburgh]: http://www.ed.ac.uk/
[University of the Highlands and Islands]: http://www.uhi.ac.uk/
[Sabhal Mòr Ostaig]: http://www.smo.uhi.ac.uk/
[Beinn Sgritheall]: http://en.wikipedia.org/wiki/Beinn_Sgritheall
[Isleornsay]: http://en.wikipedia.org/wiki/Isleornsay
[802.11a]: http://en.wikipedia.org/802.11a
[802.11g]: http://en.wikipedia.org/802.11g

Hebnet - Small Isles
====================

Knoydart
========

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript" src="/js/tegola/google_maps.js">
</script>
<script type="text/javascript">
  $(document).ready(function () {
      var map = make_map("foomap");
      add_kml(map, "https://github.com/tegola-hubs/maps/raw/master/tegola-hebnet.kmz");
  });
</script>
