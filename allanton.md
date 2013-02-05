---
layout: default
filename: allanton.md
title: Allanton Broadband
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
  <h1>HUBS</h1>
  <h4>Community Broadband Infrastructure in Scotland</h4>
</div>


Allanton Community Broadband
============================
This is possibly the smallest project that HUBS has advised.  We
suspect that there may be many communities of this size that are
"below the radar" of community broadband projects and not large enough
to raise funding for external consultants or engineers. 

The story starts in May 2012 when [Alex Neil] MSP for [Airdrie and Shotts] and then Cabinet Secretary for
Infrastructure,  asked us to help with a small farming community in hs
constituency who had poor or non-existent Internet connections.  One of the
embarassing problems is that the government now requires farmers to 
file some of their paperwork on-line.

The community consists of about 12 residences to the South of
[Shotts].  The telephone exchange is 6.7km by road.  There are currently
no plans to upgrade the exchange  to ...?, and even if fibre is brought to the
cabinets, it is unlikely that there is a cabinet nearer than the
nearest town of [Allanton], about 4km from some of the community, and
that length of copper will not deliver fast broadband.

Ideally one would like to lay fibre through the community, but the
cost at this stage would be prohibitive, so we looked at the
possibility of wireless, using viewsheds as described in our [network
planning] section.  The community lies on a west-facing gentle
slope. There are no obvious hills that would support distribution, and
trees are a serious problem.  

A [viewshed from the middle of the area] shows no line of sight to
Allanton or Shotts (though these places could be reached through an
intermediate relay) but shows a possible line of sight to
[Cambusnethan], [Wishaw] and [Hamilton] the last of these is 14km
away, but we are operating over much longer distances in the
highlands.

In June 2012 Peter visited Allanton and met with a group of the
"disconnected" community.  Our experience is that any community
broadband project requires someone to set up and run the organisation
(communicate with the community, keep the books, keep track of
equipment etc.) and someone who will undertake the physical work of
installing the equipment.  Anne Graham agreed to provide the "brains"
and Hew Colquohoun the "brawn".  The main discussion was where to get
our connection to the Internet -- or "backhaul" as it is often
called.  Three possibilities were discussed:

* [Shotts].  This would require an intermediate relay, and although the
  community was well-connected with people in Shotts, it wasn't clear
  what kind of Internet service could be provided there.

* [Wishaw] or [Cambusnethan].  There is clear line of sight to these, but
  the only tall buildings are churches,  and again, no-one knew what
  kind of Internet service could be provided

* [Hamilton]. This is a large town and we had identified (from its 60's
  brutalist architecture) a tall building that very likely belonged to a
  university, which it did -- the [University of the West of Scotland] (UWS).  We
  were pretty sure they would have a good (probably fibre) connection
  and we thought that, following [Tegola] and other [HUBS] projects have
  done, we could come to some agreement and obtain backhaul from them.

We agreed to pursue the second two options.  Initially we pinned most
of our hopes on UWS, but Anne also knew one of the churches in
Cambusnethan.  

In August, Marwan and Will visited UWS to see how well a trail link
would work.  While the staff there were accommodating, there were
clearly problems.  First, there was a plan to improve the appearance of the
building by shortening it.  Second, there were problems with the
building (asbestos?) that made access to the roof impossible, so the
only possibility was to mount one end of the link inside a window.
Although they managed to get a signal to the Allanton community, it
was very weak.  

Fortunately, Anne and Hew had also followed up the possibility of a church
in Cambusnethan and had identified the [Coltness Memorial Church] in
Cambusnethan. Better still, the church was in an area served by Virgin
Cable where speeds of 100Mb/s might be available!

In September, or thereabouts, Will and Peter met up with Anne and Hew
to look at the church. The minister, the Reverend Graham Raeburn, was
extremely helpful, and when we went up the tower, things got even
better. The upper part of the tower had been modified by a mobile
phone company that had subsequently abandoned it.  The floors were
reinforced, the ladders were new and safe, and the louvres had been
replaced by fibreglass copies in order to be transparent to radio
transmission.

Tests between two [nanostations] about 5km apart, one on the church tower and one on the
roof showed a perfectly good signal, though there was rather more
electronic noise than we were used to.  We decided then that the best
plan would be to do the distribution to the consumers directly from
the church rather than from some relay in the middle of the community,
simply because most of the community had line-of-sight directly to the church.

Then things went a little slowly.  The church administration,
understandably, wanted to be sure that we were not going to do
anything that might prejudice their tower being used by another mobile
carrier and that we were not going to do anything that would be
visible. Once the agreement was drawn up it had to be passed on to
higher levels of adminstation for approval.  We had still hoped to be
up and running just after Christmas, but then Virgin couldn't find the
contract and a new one had to be drawn up.

In the meantime, Hew had done great work in pulling ethernet cable
through the Church and preparing a mounting pole for the [sectoral
antenna] directly behind one of the plastic louvres.  He had also
worked out how to crimp RJ45 lugs and had mounted nanostations at two
houses.  

When Peter and Will visited in early February 2013, there was not a
great deal to do: mount the sectoral antenna and show Hew and Anne how
to configure the nanostations.  

There are a few problems, first -- as we mentioned above -- there is a
lot of electronic noise, possibly from the power lines and wind farms
that surround the area. We found that a [directional antenna], which
costs no more than the kind of Nanostations they are using, gives better
performance.  Also, the speeds from Virgin are still rather slow and
there is still some tweaking needed to get the available badwidth to
the community.  But they now have something that is at least
acceptable and it is only going to get better.

<div class="image-float-right"> 
    <img src="/media/willpeterhewrobin.jpg" width="320" alt="Will
    Peter Hew and Robin"/><br/>
    Peter inspects Hew's mounting for conformance to West Highland
    Engineering standards
</div>

The long-term.  We believe that the current system will work well for
at least five years, but what should the commubity aim for.  First,
the land is criss-crossed by a number of dismantled railway lines and
tramways that were built to serve the mines that onceoperated there.
Also, the land is in owned by the community, so laying fibre to connect the ten
or so houses should be relatively easy and cheap.  The fibre could be
connected to an upgraded wireless link to the
Church, but let's hope that Scottish Government provides open access
to a fibre backbone that could serve communities such as this.


[Alex Neil]: http://en.wikipedia.org/wiki/Alex_Neil_(politician)
[Aidrie and Shotts]: http://en.wikipedia.org/wiki/Airdrie_and_Shotts_(Scottish_Parliament_constituency)
[Shotts]: http://en.wikipedia.org/wiki/Shotts
[Allanton]: http://en.wikipedia.org/wiki/Allanton,_North_Lanarkshire
[viewshed from the middle of the area]: /media/anne-viewshed.png
[Cambusnethan]: http://en.wikipedia.org/wiki/Cambusnethan
[Wishaw]: http://en.wikipedia.org/wiki/Wishaw
[Hamilton]: http://en.wikipedia.org/wiki/Hamilton,_South_Lanarkshire
[University of the West of Scotland]: http://www.uws.ac.uk/home/
[Tegola]:  /tegola-history.html
[HUBS]: /index.html
[Coltness Memorial Church]: http://www.coltness-memorial.org.uk/Coltness_Memorial_Church/Home.html
[nanostations]: http://www.ubnt.com/airmax#nanostationm
[sectoral antenna]: http://dl.ubnt.com/AirMax5GSectors.pdf
