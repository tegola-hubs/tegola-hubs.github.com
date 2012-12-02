---
layout: default
title: Radio spectrum and licensing
filename: howto/spectrum.md
---

Radio spectrum and licensing
============================

Radio transmissions are, in general, regulated by national
organisations, [Ofcom] in the UK, the [CRTC] in Canada, the [FCC] in
the United States, and so forth. The rules vary to an extent and are
coordinated in Europe with [CEPT] and internationally with the [ITU].
In Europe, for the most part, CEPT recommendations on the use of
different frequencies are transformed into directives by the European
Commission and then implemented in national law by the member states.
In general, and where it can be helped, CEPT won't produce
recommendations that are at odds with ITU policies and close attention
is paid to existing usage when new rules are being developed, as they
were in the late 1990s and early 2000s for the 5GHz band, which is of
particular interest for community wireless networks.

The whole process is quite complicated, and if you look at the Ofcom
rules, they are pretty simple and easy to read, but they defer to the
European rules and a host of standards from the [ETSI] and elsewhere,
and pretty soon it is easy to get lost in thousands of pages of
documents. This is an attempt to explain the relevant parts of the
rules in a simple way and lay out what you need to know to build
wireless networks out of readily available commodity hardware, with
pointers to the official documents where the actual rules are laid out
in excruciating detail.

<div class="image-float-right"> 
  <img src="spectrum.png" alt="5GHz Neighbourhood" />
</div>

**The basic rule is, respect your neighbours which means, in particular,
do not cause interference.** This principle underlies most of the EC
Directive [1999/5/EC] which is concerned with making sure equipment
certified for use in the EU does not cause harmful interference. To
accomplish this, Ofcom uses the powers from the [Wireless Telegraphy
Act 1949] to sell licenses for the use of various bands. Some bands,
like 5GHz, are shared between different services. Where a band is
shared it typically has a primary and some secondary services. The
secondary services must not interfere with the primary ones.

The image at right shows what the 5GHz spectrum looks like. It's
actually pretty busy with all kinds of radar services and such. The
802.11a or 802.11n parts of the band are described as "Radio
LAN". Radar transmits in short bursts and wanders all over the
band. Because of this, it is feasible to use the band when there is no
nearby radar actively transmitting. To facilitate this, there are some
extra requirements that have to be met in order for the general public
to use the band.

The first requirement is another of the general rules of radio
operations. It's pretty simple: **only use the minimum power needed to
establish and maintain communications**. The particular arrangement
for these bands is formalised and elaborated in the ETSI [EN 302 502]
standard where a Transmit Power Control (**TPC**) mechanism is
described. In short, the equipment must automatically lower its
transmit power to the minimum that is needed. If an 802.11a radio does
not support this feature it should not be used in the UK (unless it is
already very low power). If your radio has an option to enable or
disable TPC, it must be enabled.

The next requirement is also a codification of another rule of radio
ops: **listen before you transmit**. It arrangement is called Dynamic
Frequency Selection (**DFS**). This means the radios listen for other
transmissions and if necessary switch to a different channel to avoid
causing interference. As with TPC, DFS must be supported by the
equipment and must be enabled.

The Radio LAN sub-band is further divided into three parts, A, B and
C. Different conditions apply to each of these. The A band is for
indoor use only to avoid interference with the mobile satellite uplink
service. It is also limited to a low power, 200mW, but does not
require a license. The A band should not be used for outdoor backbone
links.

The B band is more useful for community networks. There is a higher
power limit of 1W. Some [early documents] suggest that it is only to be
used for mobile or nomadic, however the current rules covering its
use, [IR 2006] makes no mention of nomadic operations and only says it
may be used indoors or outdoors (IR 2006 also covers the A band).

The C band requires a license. This license permits installations at
specific places and is not very expensive or difficult to obtain. The
output power is still greater at up to 4W and there are also some
restrictions on how point-to-multipoint or sectorised distribution
antennas must be installed -- roughly they must be pointed downwards
at an angle of greater than 15 degrees with respect to the tangent
plane to the earth. The conditions on use of the C band are laid out
in [IR 2007]

The power limits are treated in a specific way, in terms of
[equivalent isotropically radiated power] (EIRP). This mouthful means
that the transmitter and the antenna are treated together as one unit
and the power is calculated as follows. The limit (say 4W for the C
band) is for a theoretical antenna that radiates uniformly in all
directions. If you replace that antenna by one, say, that has a gain
of 3dBi (double) in one direction, and radiates nothing in the opposite
direction, you are allowed to transmit half the power. This means you
can't put an 18dBi dish (64x) on a 4W transmitter in order to achieve
the equivalent of a 250W transmitter in the direction you are
interested in. That's not allowed.

[Ofcom]: http://www.ofcom.org.uk/
[CRTC]: http://crtc.gc.ca/
[FCC]: http://www.fcc.gov/
[CEPT]: http://www.cept.org/
[ETSI]: http://www.etsi.org/
[ITU]: http://www.itu.int/
[Wireless Telegraphy Act 1949]: http://www.legislation.gov.uk/ukpga/Geo6/12-13-14/54/contents
[1999/5/EC]: http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:1999:091:0010:0010:EN:PDF
[EN 302 502]: http://www.etsi.org/deliver/etsi_en/302500_302599/302502/01.01.01_60/en_302502v010101p.pdf
[early documents]: http://www.ofcom.org.uk/static/archive/ra/topics/mobiledata/5ghz-licensing.htm
[IR 2006]: http://stakeholders.ofcom.org.uk/binaries/spectrum/spectrum-policy-area/spectrum-management/research-guidelines-tech-info/interface-requirements/uk2006.pdf
[IR 2007]: http://stakeholders.ofcom.org.uk/binaries/spectrum/spectrum-policy-area/spectrum-management/research-guidelines-tech-info/interface-requirements/uk_interface_2007.pdf
[equivalent isotropically radiated power]: http://en.wikipedia.org/wiki/Equivalent_isotropically_radiated_power

