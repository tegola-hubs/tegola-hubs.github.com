---
layout: default
title: Tegola -- Rural Broadband in Scotland
filename: index.md
---

<style>
  .tegola-title h1 {
     padding-bottom: 0px;
     margin-bottom: 0px;
  }
  .tegola-title h4 {
     padding-top: 0px;
     margin-top: 0px;
     margin-bottom: 10px;
  }
</style>
<div class="tegola-title">
  <h1>Tegola and HUBS</h1>
  <h4>Community Broadband Infrastructure in Scotland</h4>
</div>

<div class="image-float-right"> 
  <img src="/media/mhialairigh-doctored1.png" alt="Coille Mhialairigh Mast" />
</div>

HUBS or High-Speed Universal Broadband for [Scotland] is a joint
enterprise between the [University of the Highlands and Islands], the
[University of Edinburgh] [School of Informatics] and the [University
of Stirling] [Department of Computing Science and Mathematics] to
assist with the provision of high speed Internet access to communities
in rural areas in Scotland that would otherwise be unserviced. HUBS
accomplishes this by providing infrastructure support and technical
expertise to local community networks which are ultimately owned,
constructed and maintained by the communities themselves.

[Tegola] is a research project, started in 2007 in the University of
Edinburgh's [School of Informatics] for research into the delivery of
low-cost, reliable and high speed broadband in rural areas.  The
Tegola testbed covers [Arnisdale] and [Corran] and the North  and West
coasts of [Knoydart] -- possibly the most remote part of the Scottish
mainland. The testbed has supported substantial [research], but it has
also given us a great deal of practical experience in community networks.

Tegola / HUBS has since worked with the [Knoydart Foundation] and
[Hebnet] to establish similar networks in South Knoydart and the
[Small Isles], respectively. Furthermore these three networks, being
physically adjacent are now interconnected and engineered so as to
provide mutual fail-over and redundancy in case of faults or
outages. The experience gained from doing this has enabled members of
the Small Isles communities to assist those in [Glenfinnan] and
[Applecross] and  Tegola / HUBS is also working with communities in
Lanarkshire, Badenoch, Stirlingshire, Loch Carron,  West Lothian and
East Lothian to build their own networks.

In addition to assistance with the construction of these networks, it
is clear that the communities involved are individually too small to
have significant negotiating power to deal on a wholesale or carrier
level with major UK telecommunications operators. This is evident, for
example, in the West [Highland] and Small Isles network in that though
they have significant internal infrastructure and multiple Internet
connections, the networks are not yet multi-homed in the usual sense.
Tegola / HUBS is able to fill this gap by acting for these
communities collectively in their interactions with the Internet
registries and major carriers in order that they are able to build
truly world-class network infrastructure.

Finally, Tegola / HUBS operates an information resource which curates
the knowledge and know-how obtained from these endeavours and makes it
available so that others may learn from and build upon our
experiences.

[Scotland]: http://wikipedia.org/wiki/Scotland
[University of the Highlands and Islands]: http://www.uhi.ac.uk/
[University of Edinburgh]: http://www.ed.ac.uk/
[School of Informatics]: http://www.inf.ed.ac.uk/
[University of Stirling]: http://www.stir.ac.uk/
[Department of Computing Science and Mathematics]: http://www.cs.stir.ac.uk/
[Arnisdale]: http://wikipedia.org/wiki/Arnisdale
[Corran]: http://wikipedia.org/wiki/Corran
[Knoydart]: http://wikipedia.org/wiki/Knoydart
[Isleornsay]: http://wikipedia.org/wiki/Isleornsay
[Armadale]: http://wikipedia.org/wiki/Armadale
[Sabhal Mòr Ostaig]: http://www.smo.uhi.ac.uk/
[UHI]: http://www.uhi.ac.uk/
[janet]: http://www.ja.net/
[Knoydart Foundation]: http://www.knoydart-foundation.com/
[Hebnet]: http://hebnet.co.uk/
[Small Isles]: http://wikipedia.org/wiki/Small_Isles
[Skye]: http://wikipedia.org/wiki/Skye
[Glenfinnan]: http://wikipedia.org/wiki/Glenfinnan
[Applecross]: http://wikipedia.org/wiki/Applecross
[Highland]: http://wikipedia.org/wiki/Scottish_Highlands
[Loch Hourn]: http://wikipedia.org/wiki/Loch_Hourn
[Tegola]: /tegola-history.html
[research]: /tegola-research/index.html
-----

For the original Tegola homepage, go [here].

[here]: tegola.html

-----

Recent News
-----------
{% for post in site.posts limit:3 %}
<div class="blog-post-teaser">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p>{{ post.date | date_to_string }}</p>
  <p>{{ post.content | strip_html | truncatewords: 55 }}</p>
  <p><a href="{{post.url}}">Read more ...</a></p>
</div>
{% endfor %}

[... all news items](blog.html)
