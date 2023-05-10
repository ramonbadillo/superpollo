"use strict";

function initialize() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
            center: new google.maps.LatLng(32.337216, -102.551882),
            disableDefaultUI: true,
            zoom: 22,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: true
        }
        //Create map
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Seminole
    /*var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.707793, -102.645344),
        map: map,
        title: 'SuperPollo',
        icon: 'images/map-marker.png'
    });*/
    //Andrews
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.337216, -102.551882),
        map: map,
        title: 'SuperPollo',
        icon: 'images/map-marker.png'
    });
    //Downtown
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(31.850472, -102.372112),
        map: map,
        title: 'SuperPollo',
        icon: 'images/map-marker.png'
    });
    //BillyHext
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(31.904758, -102.302947),
        map: map,
        title: 'SuperPollo',
        icon: 'images/map-marker.png'
    });
    //Brownfield
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(33.1893793242142, -102.27369347426999),
        map: map,
        title: 'SuperPollo',
        icon: 'images/map-marker.png'
    });
    //Levelland
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(33.59295922117487, -102.36851225369695),
        map: map,
        title: 'SuperPollo',
        icon: 'images/map-marker.png'
    });

    // //Create ribbon
    // var ribbon = new google.maps.Marker({
    //     position: new google.maps.LatLng(40.755585, -73.981585),
    //     map: map,
    //     icon: 'images/map-ribbon.png'
    // });

    //Map marker info
    var contentString = '<div id="map-info">' +
        '<h2>SuperPollo</h2>' +
        '<p style="text-align:left; margin:0;"><strong>SuperPollo</strong>, has the <strong>best food</strong>in west texas </p>' +
        '</div>';

    //Add info to marker 
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

    //Keep map centered
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);