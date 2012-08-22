---
layout: default
title: The Tegola Project
filename: index.md
---

<div class="image-frame image-float-right"> 
  <div class="image-inner" style="width: 187px;">
     <img src="/media/finlay.jpg" alt="Finlay Mackenzie" />
     <p>Finlay MacKenzie reads his first e-mail</p>
  </div>
</div>

The Tegola Project - Wireless in Rural Areas
============================================

**Tegola** is a project sponsored by the
[Edinburgh University](http://www.ed.ac.uk) and 
[UHI Millenium Institute](http://www.uhi.ac.uk/) to develop new
technologies to bring high-speed, affordable broadband to rural areas.

There are many communities in the Highlands and Islands of Scotland
**that are desperate for Internet access**. This is particularly
important for local business opportunities and children's access to
educational resources, where the nearest shop or school may be several
miles away. These communities are also dependent on mail-order for
delivery of goods and services, but many companies are charging a
premium for telephone orders and some are only taking orders placed on
the internet.

If there is one thing that will revitalise such communities, it is the
availability of broadband.  The villages of **Arnisdale and
Corran**, along with the scattered inhabitants of the **North-West
shores of Knoydart** are an example.  In the past few years, these
communities gave gone through something of a rebirth.  There are now
several children of school age, and a number of small industries:
fish-farming, tourism, prawn fishing, graphic design, consulting and
telecommuting, etc.  The lack of a decent internet was a real
problem. Some people were even driving nine miles to pick up their
e-mail!

The UK lags behind other countries in the delivery of high-speed
broadband according to the
[BBC](http://news.bbc.co.uk/1/hi/technology/2313239.stm) and the
[UKgovernment](http://www.vnunet.com/vnunet/news/2199013/uk-falling-behind-broadband).
The remote communities of the Scottish Highlands and Islands are
**locked into a technology** that, in turn, puts them behind the rest
of the UK, see our [Technology Brief] for more information.
Telephone cable based technologies are useless for places like
Arnisdale and Corran, which until recently had little hope of getting
broadband.

The Tegola project is **aimed at bypassing much of the existing wired
access technology** and providing remote communities with cheap and
high-speed broadband wireless access. We want to bring rural Scotland
into a leading position.  The main problem here is making the system
cheap enough.  At the same time we want to make it fast and reliable;
and this is particularly difficult in hilly terrain and hostile
weather conditions.

<div class="image-float-right"> 
  <img src="/media/mast-example.png" alt="Mast Example" />
</div>

The following sections describe a bit more about the project

* [Introduction] - What this project is about?
* [Technology Brief] - A non-technical explanation of the technology we use
* [Research] - A brief summary of our research
* [Publications] - A list of publications, news and videos about the projects
* [Trivia] - What "tegola" means and other oddities
* [Thanks] - People who have helped us.
* [People] - People involved in the project

[Introduction]: intro.html
[Technology Brief]: technology.html
[Research]: research.html
[Publications]: publications.html
[Trivia]: trivia.html
[Thanks]: thanks.html
[People]: people.html

Recent News
-----------
{% for post in site.posts %}
<div class="blog-post-teaser">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p>{{ post.date | date_to_string }}</p>
  <p>{{ post.content | strip_html | truncatewords: 55 }}</p>
  <p><a href="{{post.url}}">Read more ...</a></p>
</div>
{% endfor %}
