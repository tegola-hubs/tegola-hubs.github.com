primary = [
	{ "band": (4800, 200), "desc": "Gov't Radiolocation" },
	{ "band": (5000, 250), "desc": "Aeronautical Radionavigation" },
	{ "band": (5250, 100), "desc": "Gov't Radiolocation" },
	{ "band": (5350, 110), "desc": "Aeronautical Radionavigation" },
	{ "band": (5460,  10), "desc": "Gov't Aeronautical Radar" },
        { "band": (5470, 180), "desc": "Maritime Radionavigation" },
        { "band": (5650, 200), "desc": "Gov't Radiolocation" },
        { "band": (5925, 175), "desc": "Fixed Satellite E->s" },
]
secondary = [
	{ "band": (4800, 200), "desc": "Radio Astronomy" },
	{ "band": (5150, 200), "desc": "Radio LAN Band A" },
	{ "band": (5350, 110), "desc": "Gov't Aeronautical Radar"},
        { "band": (5460,  10), "desc": "Maritime Radionavigation"},
	{ "band": (5470, 255), "desc": "Radio LAN Band B" },
	{ "band": (5725,  70), "desc": "Radio LAN Band C" },
	{ "band": (5795,  20), "desc": "Road Transport Telematics"},
        { "band": (5815,  35), "desc": "Radio LAN Band C" },
]
tertiary = [
	{ "band": (5150, 100), "desc": "Mobile Satellite E->s" },
	{ "band": (5650,  30), "desc": "Amateur Radio" },
        { "band": (5755,  10), "desc": "Amateur Radio" },
        { "band": (5820,  30), "desc": "Amateur Radio" },
]
quaternary = [
	{ "band": (5470, 345), "desc": "Mobile Special Events" },
]

pentiary = [
        { "band": (5725, 150), "desc": "ISM Band (25mW)" }
]
 
from matplotlib import cm

cmap = cm.rainbow

_cindex = list(set(x["desc"] for x in primary + secondary + tertiary + quaternary + pentiary))
_cindex.sort()
def cindex(d):
     return float(_cindex.index(d)) / len(_cindex)

pbar = [x["band"] for x in primary]
pcol = [cmap(cindex(x["desc"])) for x in primary]

sbar = [x["band"] for x in secondary]
scol = [cmap(cindex(x["desc"])) for x in secondary]

tbar = [x["band"] for x in tertiary]
tcol = [cmap(cindex(x["desc"])) for x in tertiary]
qbar = [x["band"] for x in quaternary]
qcol = [cmap(cindex(x["desc"])) for x in quaternary]
fbar = [x["band"] for x in pentiary]
fcol = [cmap(cindex(x["desc"])) for x in pentiary]

import matplotlib.pyplot as plt

fig = plt.figure()
ax = fig.add_subplot(111)
ax.broken_barh(pbar, (12, 2), facecolors=pcol)
ax.broken_barh(sbar, (11, 1), facecolors=scol)
ax.broken_barh(tbar, (10, 1), facecolors=tcol)
ax.broken_barh(qbar, (9, 1), facecolors=qcol)
ax.broken_barh(fbar, (8, 1), facecolors=fcol)
ax.set_ylim(0,15)
ax.set_xlim(4700, 6200)
ax.set_yticks((12, 14))
ax.set_yticklabels(("secondary", "primary"))
ax.set_xticks((5150, 5350, 5470, 5725, 5875))
ax.set_xlabel("Frequency (MHz)")
ax.grid(True)

row = 0
col = 0
for desc in _cindex:
    y = 7 - row
    x = 4800 + col * 750
    col += 1
    if col == 2:
        col = 0
        row += 1
    ax.text(x, y, desc, backgroundcolor=cmap(cindex(desc)))

plt.show()
