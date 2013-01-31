---
layout: default
title: GRASS for Viewsheds
---

The [r.viewshed] program is part of GRASS. It is used to calculate
what can be seen from a particular point. It does this by sweeping
around the central point, at each step going out radially and doing
its calculation.

The first problem with [r.viewshed] is just a bug. It figures out how
much memory it will need based on the computational region, not a
reasonable estimate based on the radius.

The second is that, very often, we aren't interested in the 360 degree
viewshed, we are only interested in a particular direction. And the
operation is quite computationally expensive so typically we would
expect a gain of about 10x in wall-clock time.

As well, if the algorithm is to be parallelieed to take advantage of
multi-core processors and such (and there's not reason it couldn't be
-- the problem is embarassingly parallel), it makes sense to do this
by having each processor compute a sector.

So, change [r.viewshed] to (optionally) take an argument with a
direction (e.g. another point) and an angle, and only compute the
viewshed within that sector.

[r.viewshed]: http://grass.osgeo.org/grass70/manuals/r.viewshed.html
