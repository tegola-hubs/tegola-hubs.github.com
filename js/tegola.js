var debug;

var api_base = "http://gallows.inf.ed.ac.uk/tegola/api";
var hinfo_base = "/ops/hostinfo.html?";
var wiki_base = "http://tegola.org.uk/wiki/host/";

var anycast = [
    "10.10.10.10",
    "10.127.127.10",
    "10.123.123.123"
];

var nolink = [
    "194.35.194.252",
    "194.35.194.250"
];

function parseUriForAddr(s) {
    var parsed = /^.*\?(.*)$/.exec(s);
    if (!parsed) {
        return "";
    } else {
        return parsed[1];
    }
}

function ipaddrs(hinfo) {
    var addrs = [];
    if (hinfo.interfaces) {
	for (var i=0; i<hinfo.interfaces.length; i++) {
	    var iface = hinfo.interfaces[i];
	    if (iface.v4addr) {
		for (var j=0; j<iface.v4addr.length; j++) {
		    var addrpfx = /^([^\/]+)\/(.*)/.exec(iface.v4addr[j]);
		    addrs.push(addrpfx[1]);
		}
	    }
	}
    }
    return addrs;
}


function getAdminAddr(hinfo) {
    var addrs = ipaddrs(hinfo);
    if (!addrs) {
	return
    }

    function inList(a, l) {
	for (var i=0; i<l.length; i++) {
	    if (a == l[i])
		return true;
	}
	return false;
    }

    for (var a=0; a<addrs.length; a++) {
	var addr = addrs[a];
	if (!inList(addr, anycast) && !inList(addr, nolink))
	    return addr;
    }
}

function simpleDL(list, data, key, text) {
    if (data[key]) {
	var dt = $("<dt />").text(text);
	var dd = $("<dd />").text(data[key]);
	list.append(dt).append(dd);
    }
}

function renderError(e, textStatus) {
    this.text("AJAX request failed: " + textStatus);
}

function renderHost(hinfo) {
    debug = hinfo;
    var title = $("<h2 />")
	.text(hinfo["name"] + " (" + hinfo["ident"] + ")");
    this.append(title);
    var lastseen = $("<p />");
    lastseen.append("Last seen ")
    lastseen.append((new Date(hinfo["timestamp"] * 1000)).toGMTString());
    this.append(lastseen);

    var row = $("<div />")
	.addClass("row");
    var sysinfo = renderSysInfo(hinfo)
	.addClass("span6");
    var caps = renderCaps(hinfo)
	.addClass("span6");
    var admin = renderAdminLinks(hinfo)
	.addClass("span6");
    row.append(sysinfo);
    row.append(caps);
    row.append(admin);
    this.append(row);

    var row = $("<div />")
	.addClass("row");
    var ifinfo = renderIfaceInfo(hinfo)
	.addClass("span4");
    var adj = renderAdjacencies(hinfo)
	.addClass("span4");
    row.append(ifinfo);
    row.append(adj);
    this.append(row);
}

function renderCaps(hinfo) {
    var capdiv = $("<div />");
    function mkcap(label, test) {
	if (test) {
	    capdiv.append(
		$("<span />")
		    .addClass("badge")
		    .addClass("badge-info")
		    .attr("style", "margin-right: 5px;")
		    .text(label));
	}
    }

    function haswlan(hinfo) {
	if (!hinfo.interfaces)
	    return false;
	for (var i=0; i<hinfo.interfaces.length; i++) {
	    if (hinfo.interfaces[i].freq)
		return true;
	}
	return false;
    }

    mkcap("Bridge", hinfo.bridges && hinfo.bridges.length>0);
    var addrs = ipaddrs(hinfo);
    mkcap("Router", addrs && addrs.length>1);
    mkcap("Wireless", haswlan(hinfo));
    mkcap("SNMP", hinfo.snmp);
    mkcap("OSPF", hinfo.router && hinfo.router.ospf);

    return capdiv;
}
function renderAdminLinks(hinfo) {
    var linkdiv = $("<div />");
    var wikilink = $("<a />")
	.attr("href", wiki_base + hinfo["ident"])
	.text("For more information see the Wiki page for this host");
    linkdiv.append($("<p />").append(wikilink));

    var adminaddr = getAdminAddr(hinfo);
    if (adminaddr) {
	var webuilink = $("<a />")
	    .attr("href", "http://" + adminaddr + "/")
	    .text("Web Management Interface");
	linkdiv.append($("<p />").append(webuilink));
    }
    return linkdiv;
}
 
function renderSysInfo(hinfo) {
    var sysdiv = $("<div />");

    var sysinfo = $("<dl />")
	.addClass("dl-horizontal");
    
    simpleDL(sysinfo, hinfo, "sysdesc", "Description");
    simpleDL(sysinfo, hinfo, "model", "Model");
    
    var osinfo = $("<p />");
    if (hinfo["opsys"]) osinfo.append(hinfo["opsys"]);
    if (hinfo["osver"]) osinfo.append(" " + hinfo["osver"]);
    if (hinfo["machine"]) osinfo.append(" " + hinfo["machine"]);
    if (hinfo["build"]) osinfo.append($("<br />")).append(hinfo["build"]);
    sysinfo
	.append($("<dt />").text("Operating System"))
	.append($("<dd />").append(osinfo));
    
    var distinfo = "";
    if (hinfo["flavour"]) distinfo += hinfo["flavour"];
    if (hinfo["release"]) distinfo += " " + hinfo["release"];
    if (distinfo.length > 0) {
	sysinfo
	    .append($("<dt />").text("Distribution"))
	    .append($("<dd />").text(distinfo));
    }

    if (hinfo.contact) {
	var addr = $("<address />").text(hinfo.contact);
	sysinfo.append($("<dt />").text("Contact"));
	sysinfo.append($("<dd />").append(addr));
    }
    simpleDL(sysinfo, hinfo, "location", "Location");

    sysdiv.append(sysinfo);
    return sysdiv;
}

function renderIfaceInfo(hinfo) {
    var ifdiv = $("<div />");
    if (hinfo["interfaces"]) {
	ifdiv.append($("<h3 />").text("Interfaces"));
	for (var i=0; i<hinfo["interfaces"].length; i++) {
	    var iface = hinfo["interfaces"][i];
	    var btn = $("<button />")
		.addClass("btn")
		.addClass("ifacebtn")
		.attr("data-toggle", "collapse")
		.attr("data-target", "#iface" + iface["ifindex"]);
	    var dtt = iface["name"];
	    if (iface["mac"])
		dtt += " (" + iface["mac"] + ")";
	    btn.text(dtt);
	    if (iface.freq) {
		var freqspec = $("<div />")
		    .attr("style", "float: right;");
		var wifi = $("<i />")
		    .addClass("icon-signal")
		    .attr("style", "float: right;");
		freqspec.append(wifi);
		freqspec.append("<br />" + iface.freq);
		btn.append(freqspec);
	    }
	    if (iface.v4addr && iface.v4addr.length>0) {
		btn.append($("<br />")).append(iface.v4addr.join(" "));
	    }
	    ifdiv.append(btn);
	    
	    var descdiv = $("<div />")
		.addClass("collapse")
		.attr("id", "iface" + iface["ifindex"]);
	    var ifdesc = $("<dl />");

	    if (iface["v4addr"]) {
		ifdesc.append($("<dt />").text("IPv4 Addresses"));
		ifdesc.append($("<dd />").text(iface["v4addr"].join(" ")));
	    }
	    
	    simpleDL(ifdesc, iface, "hwmode", "Hardware Mode");
	    simpleDL(ifdesc, iface, "ssid", "SSID");
	    simpleDL(ifdesc, iface, "mode", "Mode");
	    simpleDL(ifdesc, iface, "freq", "Frequency");
	    simpleDL(ifdesc, iface, "txpower", "Transmit Power");
	    simpleDL(ifdesc, iface, "bitrate", "Physical Layer Bitrate");
	    if (ifdesc["signal"] && ifdesc["noise"]) {
		ifdesc.append($("<dt />").text("Signal-Noise Ratio"));
		ifdesc.append($("<dd />").text(ifdesc["signal"] + " / " + ifdesc["noise"]));
	    }

	    if (iface["arp"]) {
		var neighbours = $("<ul />");
		for (var a=0; a<iface["arp"].length; a++) {
		    var neighbour = iface["arp"][a];
		    var ntext = neighbour["v4addr"] + " (" + neighbour["mac"] + ")";
		    var nlink = $("<a />")
			.attr("href", hinfo_base + neighbour["mac"])
			.text(ntext);
		    var nline = $("<li />").append(nlink)
		    neighbours.append(nline);
		    $.ajax({
			url: api_base + "/host/" + neighbour["mac"] + "?detail=false",
			context: nline
		    }).done(function(data) {
			this.append(" (" + data["name"] + ")");
		    });
		    
		}
		ifdesc.append($("<dt />").text("Neighbours"));
		ifdesc.append($("<dd />").append(neighbours));
	    }
	    if (ifdesc.children().length > 0) {
		descdiv.append(ifdesc);
		ifdiv.append(descdiv);
	    }
	}
    }
    return ifdiv;
}

function renderTopology(adj) {
    debug = adj;

    var width = this.width ? this.width : 500;
    var height = this.height ? this.height : 400;
    var divid = this.target ? this.target : "#viz";
    var ticks = (this.ticks !== undefined ? this.ticks : 10);
    var charge = this.charge ? this.charge : -240;
    var scale = this.scale ? this.scale : 1;
    var powscale = (scale > 1 ? Math.sqrt(scale) : Math.pow(scale, 2));
    var zoom = this.zoom ? this.zoom : 1;

    var color = d3.scale.category20();

    var ifdist = 2 * powscale;
    var hostdist = 40 * powscale;
    var ifsize = 5 * scale;
    var hostsize = 20 * scale;

    var fisheye = d3.fisheye.circular()
	.radius(120);
    var force = d3.layout.force()
	.charge(charge)
	.linkDistance(function (e) { return e.iface ? ifdist : hostdist })
	.size([width, height]);
    var svg = d3.select(divid)
	.append("svg")
	.attr("width", width)
	.attr("height", height);
    svg.append("rect")
	.attr("class", "background")
	.attr("width", width)
	.attr("height", height);
    
    var nodeidx = {};
    var nodes = [];
    var edges = [];
    
    for (var s in adj) {
	if (!nodeidx[s]) {
	    nodeidx[s] = nodes.length;
	    
	    var sname = adj[s].name;
	    if (!sname) {
		sname = s;
		group = 3;
	    } else {
		if (adj.length > 1) {
		    group = 4;
		} else {
		    group = 3;
		}
	    }
	    nodes.push({ "name": sname, "ident": s, "group": 1 });
	}
	for (var d in adj[s]) {
	    if (d == "name") // ugly...
		continue;
	    if (d == s) // happens depending on the arp table...
		continue;
	    var a = adj[s][d];
	    if (!nodeidx[d]) {
		nodeidx[d] = nodes.length;
		var dname;
		if (a.name) {
		    dname = a.name;
		    group = 1;
		} else {
		    dname = d;
		    group = 3;
		}
		nodes.push({ "name": dname, "ident": d, "group": group });
	    }
	    var sifnode = s + "." + a.src.ifname;
	    if (!nodeidx[sifnode]) {
		nodeidx[sifnode] = nodes.length;
		nodes.push({ "name": a.src.ifname, "iface": true, "group": 2 });
		edges.push({
		    "source": nodeidx[s],
		    "target": nodeidx[sifnode],
		    "iface": true,
		    "value":  1
		});
	    }
	    var difnode = d + "." + a.dst.ifname;
	    if (!nodeidx[difnode]) {
		nodeidx[difnode] = nodes.length;
		nodes.push({ "name": a.dst.ifname, "iface": true, "group": 2 });
		edges.push({
		    "source": nodeidx[d],
		    "target": nodeidx[difnode],
		    "iface": true,
		    "value": 1
		});
	    }
	    edges.push({
		"source": nodeidx[sifnode],
		"target": nodeidx[difnode],
		"value":  1
	    });
	}
    }
    
    force.nodes(nodes).links(edges);
    
    // Initialize the positions deterministically, for better results.
    var n = nodes.length;
    nodes.forEach(function(d, i) { d.x = d.y = width / n * i; });

    if (ticks) {
	// Run the layout a fixed number of times.
	// The ideal number of times scales with graph complexity.
	// Of course, don't run long tooyou'll hang the page!
	force.start();
	for (var i = n*ticks; i > 0; --i) force.tick();
	force.stop();
    
	// Center the nodes in the middle.
	var ox = 0, oy = 0;
	nodes.forEach(function(d) { ox += d.x, oy += d.y; });
	ox = ox / n - width / 2, oy = oy / n - height / 2;
	nodes.forEach(function(d) { d.x -= ox, d.y -= oy; });
    } else {
	force.start();
	force.on("tick", function() {
	    link.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	    node.attr("cx", function(d) { return d.x; })
	        .attr("cy", function(d) { return d.y; });
	});
    }

    var link = svg.selectAll(".link")
        .data(edges)
	.enter().append("line")
        .attr("class", "link")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .style("stroke-width", scale); // function(d) { return Math.sqrt(d.value); });
    
    var node = svg.selectAll(".node")
        .data(nodes)
	.enter().append("circle")
        .attr("class", "node")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", function(n) { return n.iface ? ifsize : hostsize })
        .style("fill", function(d) { return color(d.group); })
//	.text(function (n) { return n.name })
	.on("click", function (d) {
	    document.location = hinfo_base + d.ident;
	})
        .call(force.drag);
    
    node.append("text")
	.attr("text-anchor", "middle")
        .attr("dy", ".3em")
        .text(function(d) { if (d.name) { return d.name; } }); //.substring(0, d.r / 3); } });

    svg.on("mousemove", function() {
	fisheye.focus(d3.mouse(this));
	
	node.each(function(d) { d.fisheye = fisheye(d); })
	    .attr("cx", function(d) { return d.fisheye.x; })
	    .attr("cy", function(d) { return d.fisheye.y; })
	    .attr("r", function(d) { return d.fisheye.z * zoom * (d.iface ? ifsize : hostsize); });
	
	link.attr("x1", function(d) { return d.source.fisheye.x; })
	    .attr("y1", function(d) { return d.source.fisheye.y; })
	    .attr("x2", function(d) { return d.target.fisheye.x; })
	    .attr("y2", function(d) { return d.target.fisheye.y; });
    });
}

function renderAdjacencies(hinfo, width, height) {
    vizdiv = $("<div />")
	.attr("id", "adj-viz");

    $.ajax({
	url: api_base + "/host/" + hinfo["ident"] + "/adj/link",
	context: { "target": "#adj-viz" }
    }).done(renderTopology);

    return vizdiv;
}
function renderFreqList(data) {
    debug = data;
    var freqs = [];
    for (var f in data) {
	freqs.push(f);
    };
    freqs.sort();

    for (var i=0; i<freqs.length; i++) {
	var f = freqs[i];

	var div = $("<div />")
	    .addClass("freqtable");

	var heading = $("<h2 />").text(f);
	div.append(heading);
	var table = $("<table />");
	var tr = $("<tr />")
	    .append($("<th />").text("SSID"))
	    .append($("<th />").text("Mac Address"))
	    .append($("<th />").text("Host"))
	    .append($("<th />").text("Interface"));
	table.append(tr);

	for (var h = 0; h < data[f].length; h++) {
	    hinfo = data[f][h];
	    alink = $("<a />")
		.attr("href", hinfo_base + hinfo["mac"])
		.text(hinfo["mac"]);
	    hlink = $("<a />")
		.attr("href", hinfo_base + hinfo["ident"])
		.text(hinfo["name"]);
	    tr = $("<tr />")
		.append($("<td />").text(hinfo["ssid"]))
		.append($("<td />").append(alink))
		.append($("<td />").append(hlink))
		.append($("<td />").text(hinfo["iface"]));
	    table.append(tr);
	}
	div.append(table);
	this.append(div);
    }
}