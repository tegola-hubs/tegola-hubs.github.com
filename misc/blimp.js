function radians(deg) {
    return deg * Math.PI / 180;
}
function degrees(rad) {
    return rad * 180 / Math.PI;
}

function Blimp() {
    var g = 9.81;
    var C = 0.5;
    var rho_N = 1.251;
    var rho_He = 0.1786;

    this.scaleR = function(x) {
	var bound = Math.max(this.a, this.b, this.c);
	var maxR = 150;
	return maxR * x / bound;
    }
    this.update = function() {
	this.a = parseFloat(this.input["a"].node().value);
	this.b = parseFloat(this.input["b"].node().value);
	this.c = parseFloat(this.input["c"].node().value);
	this.v = parseFloat(this.input["v"].node().value) / 3.6; // km/h -> m/s

	this.ab
	    .attr("rx", this.scaleR(Math.sin(radians(25)) * this.a))
	    .attr("ry", this.scaleR(Math.cos(radians(25)) * this.b));
	this.cb
	    .attr("rx", this.scaleR(Math.sin(radians(90-25)) * this.c))
	    .attr("ry", this.scaleR(Math.cos(radians(25)) * this.b));
	this.ca
	    .attr("rx", this.scaleR(Math.sin(radians(90-25)) * this.c))
	    .attr("ry", this.scaleR(Math.cos(radians(90-25)) * this.a));

	this.volume = Math.PI * this.a * this.b * this.c * 4 / 3;
	this.weightBlimp = this.volume * g * rho_He;
	this.weightAir = this.volume * g * rho_N;

	this.areaAB = Math.PI * this.a * this.b;
	this.areaCB = Math.PI * this.c * this.b;
	this.areaCA = Math.PI * this.c * this.a;

	this.area = Math.min(this.areaAB, this.areaCB, this.areaCA);
	console.log("AB " + this.areaAB);
	console.log("CB " + this.areaCB);
	console.log("CA " + this.areaCA);
	console.log("A  " + this.area);

	this.drag = C * rho_N * Math.min(this.areaAB, this.areaCB, this.areaCA) * Math.pow(this.v,2) / 2;

	this.angle = Math.atan(this.drag / (this.weightAir - this.weightBlimp))

	this.string = Math.sqrt(Math.pow(this.drag, 2) + Math.pow(this.weightAir - this.weightBlimp, 2));

	var rotation = "-" + (90 - degrees(this.angle));
	this.tether.attr("transform", "translate(400, 200) rotate(" + rotation + ")");
	this.float.attr("transform", "translate(400, 200) rotate(" + rotation + ") translate(150, 0)");
	this.report();
    }

    this.width = 600;
    this.height = 350;

    this.render = function(div) {
	this.vis = div.append("svg:svg")
	    .attr("width", this.width)
	    .attr("height", this.height);

	this.ab = this.vis.append("svg:ellipse")
	    .attr("class", "wire ab")
	    .attr("transform", "translate(200, 200) rotate(25)");
	this.cb = this.vis.append("svg:ellipse")
	    .attr("class", "wire cb")
	    .attr("transform", "translate(200, 200) rotate(25)");
	this.ca = this.vis.append("svg:ellipse")
	    .attr("class", "wire ca")
	    .attr("transform", "translate(200, 200) rotate(25)");

	this.tether = this.vis.append("svg:line")
	    .attr("class", "wire")
	    .attr("x2", "150");
	this.float = this.vis.append("svg:circle")
	    .attr("class", "wire")
	    .attr("r", "10");
    }

    this.controls = function(div) {
	var c = div.append("div")
	    .attr("id", "controls");

	this.input = {};

	var blimp = this;

	this.input["a"] = c.append("div").text("$a$")
	    .append("input")
	    .attr("type", "number")
	    .attr("value", 10.0)
	    .on("input", function () { blimp.update(); });
	
	this.input["b"] = c.append("div").text("$b$")
	    .append("input")
	    .attr("type", "number")
	    .attr("value", 10.0)
	    .on("input", function () { blimp.update(); });

	this.input["c"] = c.append("div").text("$c$")
	    .append("input")
	    .attr("type", "number")
	    .attr("value", 40.0)
	    .on("input", function () { blimp.update(); });
	
	this.input["v"] = c.append("div").text("$v$")
	    .append("input")
	    .attr("type", "number")
	    .attr("value", 70)
	    .on("input", function () { blimp.update(); });
    }

    this.setReport = function(div) {
	    this.resultDiv = div;
    }

    this.report = function() {
	if (this.results) {
	    this.results.remove();
	}
	this.results = this.resultDiv.append("div")
	    .attr("id", "results");

	var t = this.results.append("table")
	var tr;

	tr = t.append("tr");
	tr.append("td").text("Volume");
	tr.append("td").text("$V = \\frac{4}{3} \\pi a b c$");
	tr.append("td").text("$= " + this.volume.toFixed(4) + " m^3$");

	tr = t.append("tr");
	tr.append("td").text("Density of Helium");
	tr.append("td").text("$\\rho _{He}$");
	tr.append("td").text("$= " + rho_He.toFixed(4) + " kg/m^3$");

	tr = t.append("tr");
	tr.append("td").text("Density of Air");
	tr.append("td").text("$\\rho _{N}$");
	tr.append("td").text("$= " + rho_N.toFixed(4) + " kg/m^3$");

	tr = t.append("tr");
	tr.append("td").text("Weight of Helium");
	tr.append("td").text("$W_{He} = \\rho_{He}Vg$");
	tr.append("td").text("$= " + this.weightBlimp.toFixed(4) + "N$");

	tr = t.append("tr");
	tr.append("td").text("Weight of Air");
	tr.append("td").text("$W_{N} = \\rho_{N}Vg$");
	tr.append("td").text("$= " + this.weightAir.toFixed(4) + "N$");

	tr = t.append("tr");
	tr.append("td").text("Buoyancy");
	tr.append("td").text("$F_B = W_{N} - W_{He}$");
	tr.append("td").text("$= " + (this.weightAir - this.weightBlimp).toFixed(4) + "N$");

	tr = t.append("tr");
	tr.append("td").text("Wind speed");
	tr.append("td").text("$v$");
	tr.append("td").text("$= " + this.v.toFixed(0) + "m/s$");

	tr = t.append("tr");
	tr.append("td").text("Drag Coefficient");
	tr.append("td").text("$C$");
	tr.append("td").text("$= " + C.toFixed(4) + "$");

	tr = t.append("tr");
	tr.append("td").text("Area (min)");
	tr.append("td").text("$A$");
	tr.append("td").text("$= " + this.area.toFixed(4) + " m^2$");

	tr = t.append("tr");
	tr.append("td").text("Drag");
	tr.append("td").text("$F_D = \\frac{1}{2} C \\rho_N A v^2$");
	tr.append("td").text("$= " + this.drag.toFixed(4) + "N$");

	tr = t.append("tr");
	tr.append("td").text("Deflection");
	tr.append("td").text("$\\theta = atan(\\frac{F_D}{F_B})$");
	tr.append("td").text("$= " + (this.angle * 180 / Math.PI).toFixed(2) + "^{\\circ}$");

	tr = t.append("tr");
	tr.append("td").text("Force on tether");
	tr.append("td").text("$F_{T} = \\sqrt{F_B^2 + F_D^2}$")
	tr.append("td").text("$= " + this.string.toFixed(4) + "N$");

	if (MathJax) {
	    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	}
    }
}

var blimp = new Blimp();
blimp.render(d3.select("#blimp"));
blimp.setReport(d3.select("#report"));
blimp.controls(d3.select("#controls"));
blimp.update();
