function GoogleMap(){
 
this.initialize = function(){
var map = showMap();
}
 
 var showMap = function(){
var mapOptions = {
zoom: 4,
center: new google.maps.LatLng(50.795229, -1.093768),
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
 
return map;
}
}

function onDeviceReady(){
    var map = new GoogleMap();
    map.initialize();
}