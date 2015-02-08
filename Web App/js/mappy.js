var lat =-25.363882;
var lng = 131.044922;
function initialize() {
    //alert(findLocation(0));
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 9,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!'
    });
    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
}

google.maps.event.addDomListener(window, 'load', initialize);