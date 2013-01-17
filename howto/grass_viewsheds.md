---
layout: default
title: GRASS for Viewsheds
---

Documenting some first steps with [GRASS] to do some geographical
analysis for planning of radio installations. This was after some
frustration at the clunkiness of on-line services like [Hey What's
That]. The only feasible alternative seemed to be to start using a
proper GIS system ourselves and then try to make available the 
specific operations that we use so we don't have to do all the
analysis ourselves.

[GRASS]: http://grass.osgeo.org/
[Hey What's That]: http://www.heywhatsthat.com/

So the first step was to obtain some data to use as a background map
so we can eyeball what we're doing and some topological data. As
academics we have access to both of these from the [Ordnance Survey]
through [EDINA]. What we get from EDINA is the Master Map in
either 1:10k or 1:25k resolution and the PROFILE DTM topological data 
at 1:10k resolution.

[Ordnance Survey]: http://www.ordnancesurvey.co.uk/
[EDINA]: http://edina.ac.uk/

This data comes to us as a lot of small files. In the case of the
background map it is tiny TIFF files together with some information
about how each file maps onto the real-world coordinate system, in a
separate file with a .tfw extension. To be able to display these in a
GIS system, they have to be merged into one big tiff, which ought as
well to use the extensions that allow it to carry some information
about the coordinate system. We use the *gdal_merge.py* program for
this. 

    gdal_merge.py -pct -o edinburgh_raster_10k.gtiff -of Gtiff raster-10k/*.tif

The *-pct* option means to grab the colour map from the first tiff
file otherwise what you'll eventually see is an unreadable dark
greyscale image.

The next step is to import the data into GRASS's internal format. The
first thing to understand is that in this case though the GeoTIFF file
now carries coordinate information, it doesn't carry the information
about which coordinate *system* or projection is being used. Because
this data comes from the Ordnance Survey, we know it is British
National Grid using the OSGB1936 datum a.k.a. EPSG:27700. This becomes
important when combining with maps from other sources and making
measurements such as distance.

In any event, we import the GeoTIFF file and create a new "location"
called, in this case, Edinburgh. The "-o" flag causes GRASS to ignore
the lack of projection information carried in the source file. The
name of the command, *r.in.gdal*, means that it is about raster maps
(*r*) and input (*in*) and uses the [GDAL] library that knows about
working with these sorts of files.

    r.in.gdal -o in=edinburgh_raster_10k.gtiff out=raster_10k location=Edinburgh

[GDAL]: http://trac.osgeo.org/gdal

Now for the topological data. It also comes in many small files that
will have to be merged. Fortunately the NTF driver for the [OGR]
library treats a directory of files as one dataset and will translate
them all in one go.

    ogr2ogr -f "ESRI Shapefile" -t_srs EPSG:27700 \
        edinburgh_profile_dtm profile-dtm

Importing into GRASS is similar, to the above,

    v.in.ogr -o -z dsn=edinburgh_profile_dtm.shp output=profile_dtm

There are some peculiarities of *v.in.ogr*, in particular it does not
allow hyphens in the data source or the output layer names. This is
because OGR supports reading and writing with SQL databases and having
a hyphen (minus sign) in the names of things would risk making illegal
SQL statements. That is why the naming is with underscores. The *-z*
option is to create 3D data, which is what we have here (well 2.5D
actually). This command will take a long time to complete as each file
has on the order of 250k "features" which is how each height data
point is represented.

----

XXX: is the *-z* really necessary or even correct?

----

Reading the Wiki page about [Contour Lines to Digital Elevation
Model]s, I wonder if it would not have been better to obtain the
countour lines rather than the pre-computed DEM from EDINA. Perhaps
not as we would have to compute the DEM ourselves in any case. Where
might contour lines be more useful on their own?

[Contour Lines to Digital Elevation Model]: http://grasswiki.osgeo.org/wiki/Contour_lines_to_DEM
