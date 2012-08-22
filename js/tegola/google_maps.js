function make_map(div, lat, lon, zoom) {
    if (!lat) lat = 57.1;
    if (!lon) lon = -5.8;
    if (!zoom) zoom = 9;
    var latlng = new google.maps.LatLng(lat, lon);
    var opts = {
	zoom: zoom,
	center: latlng,
	mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById(div), opts);
    return map;
}

function add_kml(map, url) {
    return new google.maps.KmlLayer(url, { map: map });
}