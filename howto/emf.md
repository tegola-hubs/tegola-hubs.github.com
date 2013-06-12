---
layout: howto
title: EMF Safety for Community Networks
filename: howto/fresnel.md
author: William Waites
---
EMF Safety for Community Networks
=================================

Safety concerns come up from time to time when people put up networks
involving radio links. Is microwave radiation harmful? What safety
precautions, if any are necessary? Here we examine a few typical
scenarios.

The International Commission on Non-Ionizing Radiation Protection is the
organisation recognised by the [World Health Organisation] as
responsible for reviewing the scientific literature and setting safe
limits for exposure to electro-magnetic fields. The [ICNIRP
guidelines] are recommended by the [UK Health and
Safety Executive].

The radios typically used for community wireless networks operate in the
5 GHz band. The relevant limits are in tables 4 and 5 of the guidelines:

<div style="width: 100%; margin-bottom: 1em; margin-left: 5em;">
 <table style="border: 1px dotted black">
  <tr><td></td><th>Occupational Exposure</th><th>General Public</th><th>Units</th></tr>
  <tr><td>Basic limit (10 MHz–10 GHz)</td><td>0.4</td><td>0.08</td><td>\(W/kg\)</td></tr>
  <tr><td>Power density limit (10 GHz–300 GHz)</td><td>50</td><td>10</td><td>\(W/m^2\)</td></tr>
 </table>
</div>

The power density limit is not quoted for frequencies less than 10 GHz,
but we will consider them here as though they applied below 5 GHz just
for an extra safety margin.

The limits of allowable radiated power in the 5 GHz band are set by
Ofcom in their Interface Requirements [2006] and
[2007] documents. The maximum allowable effective radiated
power on these bands is 4W.

A creature called *Standard Reference Man* is used to consider the
effects of this radiation. It was defined in 1975 by the International
Commission on Radiological Protection as, “being between 20-30 years of
age, weighing 70 kg, is 170 cm in height, and liv[ing] in a climate with
an average temperature of from 10°C to 20°C”.

The first thing to note is that even if our Standard Reference Man
absorbed the entirety of the radiation emitted at Ofcom’s limit, this
would work out to 0.057 W/kg, well within the guidelines for the general
public. However it should be realised that there are people who do not
weigh as much as Standard Reference Man, a newborn baby absorbing all of
the radiation might be at some 25 times the general public limit.

But it is not reasonable to suppose that somebody is going to absorb all
of the energy from the radio, and in any case the greater concern is the
degree to which the radiation is focused at a particular place.

The power density \\(P\\) at some distance \\(r\\), is the radiated
power, \\(P_0\\) divided by the area that it is spread over. With a
beam width, \\(\theta\\), and assuming a circular cross section of the
radiation pattern, this gives:

<div>
$$
P = \frac{P_0}{A} 
  \approx \frac{P_0}{\pi\, \left[r\sin\left(\frac{\theta}{2}\right)\right]^2}
$$
</div>

Consider a typical piece of equipment used at the customer premises. It
is a radio with an output power of 0.5 W and a 60° wide radiation
pattern corresponding to a gain of about 16 dBi. At full power this
corresponds to an effective radiated power of some 20 W, well in excess
of the legal limit. However, this is peak power. The way that 802.11n
radios modulate the signal means that the actual RMS average power is
significantly lower, by about 10 dB. This means that if we turn this
equipment up all the way, the RMS power is only about 2W.

Here are some values for the above equation worked out with different
transmit powers – a reasonably conservative estimate for the RMS output,
the regulatory limit, and a larger value, exceeding the regulatory limit
by a significant margin:

<div style="width: 100%; margin-bottom: 1em;">
 <table style="width: 100%; border: 1px dotted black">
  <tr><th>\(P_0 \backslash r\)</th>
      <th>1</th>
      <th>2</th>
      <th>5</th>
      <th>10</th>
      <th>20</th>
      <th>50</th>
      <th>100</th></tr>
  <tr><th>2</th>
      <td>0.85</td>
      <td>0.21</td>
      <td>0.034</td>
      <td>0.0085</td>
      <td>0.0021</td>
      <td>0.00034</td>
      <td>0.000085</td></tr>
  <tr><th>4</th>
      <td>1.70</td>
      <td>0.42</td>
      <td>0.068</td>
      <td>0.017</td>
      <td>0.0042</td>
      <td>0.00068</td>
      <td>0.00017</td></tr>
  <tr><th>20</th>
      <td>8.49</td>
      <td>2.12</td>
      <td>0.34</td>
      <td>0.085</td>
      <td>0.021</td>
      <td>0.0034</td>
      <td>0.00085</td></tr>
 </table>
</div>

Mind that all of these numbers assume that the antenna is pointed
directly at the person. The numbers show that standing directly in front
of the antenna at a very small distance isn’t wise, but even at the
regulatory limit, 2m away is within the occupational safety limits an 5m
is within the range for the general public. Even the overestimated peak
power is within the general public safety limits once one is 10m away.

The front to back ratio of these directional antennas is in the
neighbourhood of 24 dB or greater. This means that behind the antenna
the field strength is about 250 times weaker than in front of it.

The safety advice is therefore simply:

**Do not place antennas where it is likely for people to stand directly
in front of them at close range.**

For residential installations, no special precautions apart from that
need to be taken.

Some extra care is required when working with very directional antennas
such as are used for long-distance links. Because the beam is focused so
narrowly, extremely high power densities can be observed right by the
antennas – especially if the output power is increased beyond the legal
limit. When these are installed in places accessible to the general
public, measures should be taken to place the antennas such that people
are prevented from placing themselves directly in the antenna beam.
Placing the antenna up high, above head height and/or pointing out over
a cliff are good ways of doing this.

----
Download: [pdf version of this guide for printing]

[World Health Organisation]: http://www.who.int/peh-emf/standards/en/
[ICNIRP guidelines]: http://www.icnirp.org/documents/emfgdl.pdf
[UK Health and Safety Executive]: http://www.hse.gov.uk/radiation/nonionising/faqs.htm#q4
[2006]: http://stakeholders.ofcom.org.uk/binaries/spectrum/spectrum-policy-area/spectrum-management/research-guidelines-tech-info/interface-requirements/uk2006.pdf
[2007]: http://stakeholders.ofcom.org.uk/binaries/spectrum/spectrum-policy-area/spectrum-management/research-guidelines-tech-info/interface-requirements/uk_interface_2007.pdf
[pdf version of this guide for printing]: emf.pdf
