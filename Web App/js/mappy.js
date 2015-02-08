var map;
var lat = Math.floor((Math.random() * 90) + -90);
var lng = Math.floor((Math.random() * 90) + -90);

function initialize() {
    var mapOptions = {
        lat = Math.floor((Math.random() * 90) + -90);
        lng = Math.floor((Math.random() * 90) + -90);
        zoom: 8,
            center: new google.maps.LatLng(lat, lng)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/map.js';
    document.body.appendChild(script);
}

/*function refresh() {
    window.onload = loadScript;
}
refresh();*/
windows.onload = loadScript;

while (true) {
    setTimeout(refresh(), 500);
    //google.maps.event.addDomListener(window, 'load', initialize);
}