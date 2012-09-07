---
layout: default
title: 24GHz Wireless
---

24GHz Wireless
==============

Very fast wireless that claims real throughput of more than 1Gbps. For
example, the [airFibre] from [Ubiquiti]. [Ofcom] has this to say 
about the part of the 24GHz radio spectrum used by this equipment in
the [UK Bandplan]:

1. Non-government low power devices in the radiolocation services
   are limited to:

   a. Portable and fixed applications between 24.15-24.25 GHz; and

   b. Mobile applications between 24.25-24.35 GHz on a NIB to the
      radionavigation service 

   Power flux-density at 10 metres from the system antenna in the
   direction of maximum radiation is not to exceed \\(1.5 mW/m^2\\)
   without approval 

2. 24\.05-24.25 GHz is used by the Amateur service. The part of the
   allocation between 24.05 and 24.150 GHz may only be used with
   written consent of the Secretary of State.

   Home Office/Office of The Scottish Executive for the Emergency
   Services between 24.05-24.15 GHz

   ISM apparatus may use the band 24.0-24.25 GHz.

Furthermore the [UK Spectrum Strategy 2000 (appendix B)] allows this
frequency range to be used for "Technology Development" for low-power
fixed and portable devices. In this context, "low-power" means less
than \\(1.5 mW/m^2\\).

Generally it is allowed to use this equipment in the UK, it is just
necessary to check the output power. The [airFibre] [datasheet] gives
values in \\(dBm\\) and the government, gives the permitted radiation
energy per unit area at 10 meters from the system. So we need to do a
bit of arithmetic. The datasheet says that the beam-width is less than
3.5°. Let's make a simplifying assumption that it is exactly that
width and further that the cross-section of the main lobe of radiation
is circular. Generally the radius of the cross-section will be,

<span>
\[
r = \ell sin(\theta) = 10m \times sin(1.25°) = 0.22m
\]
</span>

The area of this circle is, \\(\pi r^2\\ = 0.15m^2\\).

So now, how much power goes through one square meter when transmitting
at 33 dBm?

<span>
\[
p = \frac{10^{\frac{\beta}{10}}}{a}  = \frac{10 ^ {33dBm/10}}{0.15m^2} = 
\frac{1995mW}{0.15m^2} = 13.3 W / m^2
\]
</span>

This would seem to be well in excess of what is allowed by the
rules...

Is this number, \\(13 W / m^2\\), reasonable?

[airFibre]: http://www.ubnt.com/airfiber
[Ubiquiti]: http://www.ubnt.com/
[datasheet]: http://www.ubnt.com/downloads/datasheets/airfiber/airFiber_DS.pdf
[Ofcom]: http://www.ofcom.org.uk/
[UK Bandplan]: http://www.ofcom.org.uk/static/archive/ra/publication/ra_info/ra365.htm
[UK Spectrum Strategy 2000 (appendix B)]: http://www.ofcom.org.uk/static/archive/ra/topirum-strat/future/strat00/appendixb.pdf
