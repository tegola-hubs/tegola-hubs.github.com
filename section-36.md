---
layout: default
title: Section 36
filename: section-36.md
---
The European Commission has cleared the disbursement of public funds
to telecommunications carriers (read BT) in order to construct network
infrastructure in remote areas where it would otherwise not be
economically feasible. The full decision is available on their web
site ([PDF](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/142487/European_Commission_Decision_on_National_Broadband_Scheme_for_the_UK.pdf)).

There is an interesting condition in the decision:

> (36) Successful suppliers of local and community broadband
> projects will be required to provide information on the new
> subsidised infrastructure to BDUK. This information will
> include appropriate information on the new infrastructure (at
> a high level of detail), the wholesale products on offer and
> the pricing of those products. Links to this information
> will be published and maintained on the BDUK central
> webpage. The central webpage will also contain data on the
> selected bidder, aid amount received, aid intensity and
> technology used for each project implemented under the BDUK
> scheme.

This places an obligation on those receiving state aid to provide
details of what they build with it. Details sufficient to be useful
for engineering and network design. This bears directly on how the
infrastructure can be used by others.

What is "appropriate information at a high level of detail"? It would
include things such as:

* exact locations of points of access to the backbone

* interface requirements
  * how is a circuit delivered?
  * where may a circuit be delivered?

* what products are available at what price?
  * layer 1 services such as dark fibre
  * layer 2 services such as ethernet
  * layer 3 services such as IP transit
  * any distance limitations on these services
  these... 

* capacity available between adjacent points

Some of the answers are already known, after a fashion. BT Openreach
and Wholesale have products such as Ethernet Access Direct, Generic
Ethernet Access and Etherflow. These services are not generally
available or are only available at prohibitive cost in many of the
affected areas, a situation which this round of funding is meant to
fix.

There has been a discussion about points of presence in various
places. It is unknown what form these PoPs take. Are they synonymous
with telephone exchanges? Does interconnection happen directly at them
or at meet-me places nearby? Some products from Openreach have
distance limits, 25km for EAD for example. Is a PoP really a circle
with a 25km radius? Even if this limit is not removed or changed, does
it still apply in the case of water being in the way, as is so often
the case on the West coast of Scotland.

Finding these answers is not just an academic exercise. The big
procurements that this applies to are only to cover some 80% or so of
the country. The best chance for the last 20% is for communities on
the periphery to build their own local infrastructure and connect into
the backbone at these places. To do this it is necessary to know, in
detail, what facilities exist and where (and are planned to exist and
when).

