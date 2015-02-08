var lat = 37.377009;
var lng = -121.922701;
    function initialize() {
        var myLatlng = new google.maps.LatLng(lat,lng);
        var mapOptions = {
            zoom: 20,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Caller Location!'
        });
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    }
google.maps.event.addDomListener(window, 'load', initialize());