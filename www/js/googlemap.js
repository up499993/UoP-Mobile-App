var map;

function initialize() {
  var mapOptions = {
    zoom: 16
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

    marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: pos
  });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
 

  var options = {
    map: map,
    position: new google.maps.LatLng(50.795229, -1.093768),
    content: content
  };

  
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);