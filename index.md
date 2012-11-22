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

HUBS or High-Speed Universal Broadband for Scotland assists the
provision of high speed Internet access to communities in rural areas
in Scotland. HUBS accomplishes this by providing infrastructure
support and technical expertise to local community networks which are
ultimately owned, constructed and maintained by the communities
themselves.  HUBS has assisted and is currently assisting about 10
communities across Scotland. HUBS provides the following

 * Advice on network planning

 * Equipment loan for pilot projects

 * Where possible, personal visits to establish feasibility

 * Technical help on network configuration and management

Please see howto pages for some ideas of what may
involved in developing a community network. To contact us, please send
e-mail to [staff@tegola.org.uk](mailto:staff@tegola.org.uk).

HUBS is funded by the [Carnegie University Trust] and is a joint 
enterprise between the [University of the Highlands and Islands], the
[University of Edinburgh] and the [University of Stirling].  

HUBS grew out of the [Tegola] project, which is a testbed for research
into rural broadband technology based at the University of
Edinburgh.

[Carnegie University Trust]: http://www.carnegie-trust.org/
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
