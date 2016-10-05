(function($){
    var map;
    var geocoder;
    var address = "422 East St N, Sarnia, ON";
    
    $(function(){
        if ($("body").hasClass("page-node-24"))
        {
            $("#widgets-left").append("<div id='contact-map'></div>");
            mapInit();
        }
    });

    function mapInit()
    {
        geocoder = new google.maps.Geocoder();
        var mapOptions = {
            zoom: 16,
            scrollwheel: false,
            disableDefaultUI: true,
            styles: [
                {
                    "stylers": [
                        { "saturation": -100 }
                    ]
                }
            ]
        }
        map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);

        showMap(address);
        showMarker();
    }

    function showMarker()
    {
        getAddressLatLng(address, showMarkerLatLng);
    }
    function showMarkerLatLng(latlng, address)
    {
        var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            icon: {
                url: "/sites/all/themes/desenalaw/images/icon-mapmarker-2x.png",
                size: new google.maps.Size(67, 67),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(34, 66)
            },
            optimized: false
        });

        var infowindow = new google.maps.InfoWindow({
            content: "<p class='map-info'>422 East Sreet North,<br/> Sarnia, Ontario<br/>N7T 6Y4</p>",
            maxWidth: 200
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            $(".gmap [style*='skewX']").css("background","#106232");
            $(".gmap").find('div[style*="rgb(255, 255, 255)"]').filter(function () { return this.innerHTML == "" }).css("background","#106232")
        });
    }
    function showMap(address)
    {
        getAddressLatLng(address, showMapLatLng);
    }
    function showMapLatLng(latlng)
    {
        map.setCenter(latlng);
    }

    function getAddressLatLng(address, callback)
    {
        geocoder.geocode( {'address':address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK)
            {
                callback(results[0].geometry.location, address);
            }
        });
    }
})(jQuery);