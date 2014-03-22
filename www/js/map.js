//Globals
var teachingBuildingMarkers = "off";
var food_outletMarkers = "off";
var map;
var markers = [];
var teachingBuildingsMarkers = [];
var food_outletsMarkers = [];

//Define Teaching Buildings
var a = {
                name: 'Anglesea Building',
				abbr: 'a',
                marker: 'img/map_markers/purple_MarkerA.png',
                latlong: new google.maps.LatLng(50.7977267,-1.0965045)
            };
var bk = {
                name: 'Buckingham Building',
				abbr: 'bk',
                marker: 'img/map_markers/purple_MarkerB.png',
                latlong: new google.maps.LatLng(50.7983448,-1.0985333)
            };	
var bb = {
                name: 'Burnaby Building',
				abbr: 'bb',
                marker: 'img/map_markers/purple_MarkerC.png',
                latlong: new google.maps.LatLng(50.7979765,-1.0979955)
            };	
var bt = {
                name: 'Burnaby Terrace',
				abbr: 'bt',
                marker: 'img/map_markers/purple_MarkerD.png',
                latlong: new google.maps.LatLng(50.7972479,-1.0985347)
            };	
var ds = {
                name: 'Dennis Sciama Building',
				abbr: 'ds',
                marker: 'img/map_markers/purple_MarkerE.png',
                latlong: new google.maps.LatLng(50.7977,-1.0981993)
            };	
var el = {
                name: 'Eldon Building',
				abbr: 'el',
                marker: 'img/map_markers/purple_MarkerF.png',
                latlong: new google.maps.LatLng(50.7947319,-1.0909327)
            };		
var ht = {
                name: 'Hampshire Terrace',
				abbr: 'ht',
                marker: 'img/map_markers/purple_MarkerG.png',
                latlong: new google.maps.LatLng(50.7937517,-1.0958283)
            };	
var jwh = {
                name: 'James Watson West',
				abbr: 'jwh',
                marker: 'img/map_markers/purple_MarkerH.png',
                latlong: new google.maps.LatLng(50.7961847,-1.0941594)
            };		
var kh = {
                name: 'King Henry Building',
				abbr: 'kh',
                marker: 'img/map_markers/purple_MarkerI.png',
                latlong: new google.maps.LatLng(50.7972735,-1.0953166)
            };	
var lg = {
                name: 'Lion Gate Building',
				abbr: 'lg',
                marker: 'img/map_markers/purple_MarkerJ.png',
                latlong: new google.maps.LatLng(50.7988653,-1.0984219)
            };	
var ml = {
                name: 'Mildam Building',
				abbr: 'ml',
                marker: 'img/map_markers/purple_MarkerK.png',
                latlong: new google.maps.LatLng(50.7971338,-1.0991607)
            };		
var pk = {
                name: 'Park Building',
				abbr: 'pk',
                marker: 'img/map_markers/purple_MarkerL.png',
                latlong: new google.maps.LatLng(50.7976506,-1.0942234)
            };	
var po = {
                name: 'Portland Building',
				abbr: 'po',
                marker: 'img/map_markers/purple_MarkerM.png',
                latlong: new google.maps.LatLng(50.7985075,-1.0993419)
            };	
var pd = {
                name: 'Purple Door',
				abbr: 'pd',
                marker: 'img/map_markers/purple_MarkerN.png',
                latlong: new google.maps.LatLng(50.7959083,-1.0936767)
            };
var rv = {
                name: 'Ravelin House',
				abbr: 'rv',
                marker: 'img/map_markers/purple_MarkerO.png',
                latlong: new google.maps.LatLng(50.7919193,-1.0966627)
            };	
var rb = {
                name: 'Richmond Building',
				abbr: 'rb',
                marker: 'img/map_markers/purple_MarkerP.png',
                latlong: new google.maps.LatLng(50.7981298,-1.0996233)
            };		
var ro = {
                name: 'Rotunda',
				abbr: 'ro',
                marker: 'img/map_markers/purple_MarkerQ.png',
                latlong: new google.maps.LatLng(50.7921073,-1.0971991)
            };	
var sb = {
                name: 'Spinnaker Building',
				abbr: 'sb',
                marker: 'img/map_markers/purple_MarkerR.png',
                latlong: new google.maps.LatLng(50.7948637,-1.0968408)
            };	
var sa = {
                name: 'St. Andrew\'s Court',
				abbr: 'sa',
                marker: 'img/map_markers/purple_MarkerS.png',
                latlong: new google.maps.LatLng(50.7956584,-1.0949152)
            };	
var sg = {
                name: 'St. George\'s Building',
				abbr: 'sg',
                marker: 'img/map_markers/purple_MarkerT.png',
                latlong: new google.maps.LatLng(50.7927485,-1.0997771)
            };	
var sm = {
                name: 'St. Michael\'s Building',
				abbr: 'sm',
                marker: 'img/map_markers/purple_MarkerU.png',
                latlong: new google.maps.LatLng(50.7963675,-1.0950293)
            };	
var ub = {
                name: 'Union Building',
				abbr: 'ub',
                marker: 'img/map_markers/purple_MarkerV.png',
                latlong: new google.maps.LatLng(50.7946339,-1.0961063)
            };	
var ul = {
                name: 'University Library',
				abbr: 'ul',
                marker: 'img/map_markers/purple_MarkerW.png',
                latlong: new google.maps.LatLng(50.7937997,-1.0981019)
            };	
var wbb = {
                name: 'William Beatty Building',
				abbr: 'wbb',
                marker: 'img/map_markers/purple_MarkerX.png',
                latlong: new google.maps.LatLng(50.7933683,-1.0961858)
            };	
var wb = {
                name: 'Wiltshire Building',
				abbr: 'wb',
                marker: 'img/map_markers/purple_MarkerY.png',
                latlong: new google.maps.LatLng(50.7947883,-1.0951411)
            };	
var temp1to4 = {
                name: 'Temporary Teaching 1-4',
				abbr: 'temp1to4',
                marker: 'img/map_markers/yellow_MarkerA.png',
                latlong: new google.maps.LatLng(50.7981235,-1.0982819)
            };	
var temp5to6 = {
                name: 'Temporary Teaching 5-6',
				abbr: 'temp5to6',
                marker: 'img/map_markers/yellow_MarkerB.png',
                latlong: new google.maps.LatLng(50.7978911,-1.0977066)
            };
// Define Food Outlets
var stgeorge_coffee = {
	name: 'St. George\'s Coffee Shop',
	abbr: 'stgeorge_coffee',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7916076,-1.1009676)
};
var library_coffee = {
	name: 'Library Coffee Shop',
	abbr: 'library_coffee',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7937997,-1.0981019)
};
var waterhole = {
	name: 'The Waterhole',
	abbr: 'waterhole',
	marker: 'img/map_markers/blue_MarkerBar.png',
	latlong: new google.maps.LatLng(50.7943965,-1.0965784)
};
var coco = {
	name: 'Cafe Coco',
	abbr: 'coco',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7945796,-1.0959132)
};
var artscafe = {
	name: 'Eldon Arts Cafe',
	abbr: 'artscafe',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7947319,-1.0909327)
};
var standrew_cafe = {
	name: 'St Andrew\'s Court Cafe',
	abbr: 'standrew_cafe',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7956584,-1.0949152)
};
var thirdspace = {
	name: '3rd Space',
	abbr: 'thirdspace',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7944372,-1.0962673)
};
var park_coffee = {
	name: 'Park Coffee Shop',
	abbr: 'park_coffee',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7976506,-1.0942234)
};
var a901 = {
	name: '901 Internet Cafe',
	abbr: 'a901',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7977267,-1.0965045)
};
var hub = {
	name: 'The Hub',
	abbr: 'hub',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7977,-1.0981993)
};
var portland_coffee = {
	name: 'Portland Coffee Shop',
	abbr: 'portland_coffee',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLng(50.7985075,-1.0993419)
};
// Define Open Access Areas			

//Building Arrays
var buildings = [a, bk, bb, bt, ds, el, ht, jwh, kh, lg, ml, pk, po, pd, rv, rb, ro, sb, sa, sg, sm, ub, ul, wbb, wb, temp1to4, temp5to6];

var teaching_buildings = [a, bk, bb, bt, ds, el, ht, jwh, kh, lg, ml, pk, po, pd, rv, rb, ro, sb, sa, sg, sm, ub, ul, wbb, wb, temp1to4, temp5to6];

var food_outlets = [stgeorge_coffee, library_coffee, waterhole, coco, artscafe, standrew_cafe, thirdspace, park_coffee, a901];

function mapContent()
{
	// Add Teaching Building Names to Page
	for (var i = 0; i < teaching_buildings.length; i++) 
	{
		var abbr = teaching_buildings[i].abbr;
		if (abbr === "temp1to4") {abbr = "temp1-4";} else if (abbr === "temp5to6") {abbr = "temp5-6";}
		abbr = abbr.toUpperCase();
		document.querySelector('#teaching-buildings ul').innerHTML += "<li id='teaching-" + teaching_buildings[i].abbr + "'><span onmouseover='teachingBuildingsMarkers_animate(" + teaching_buildings[i].abbr + ");'>" + teaching_buildings[i].name + " (" + abbr + ")</span></li>";
	}
	
	// Add Food Outlet Names to Page
	for (var i = 0; i < food_outlets.length; i++) 
	{
		var abbr = food_outlets[i].abbr;
		abbr = abbr.toUpperCase();
		document.querySelector('#food_outlets ul').innerHTML += "<li id='food_outlets-" + food_outlets[i].abbr + "'><span onmouseover='food_outletsMarkers_animate(" + food_outlets[i].abbr + ");'>" + food_outlets[i].name + "</span></li>";
	}
	
	
}

// Animate Teaching Buildings Markers
function teachingBuildingsMarkers_animate(i)
{
console.log("animate " + i.abbr);
var markerNo;
for(var i2 = 0, m = null; i2 < teachingBuildingsMarkers.length; ++i2) {
    console.log("try " + i2);
    if(teachingBuildingsMarkers[i2].abbr == i.abbr) {
        m = teachingBuildingsMarkers[i2];
        console.log("marker: " + i2 + " contains " + i.abbr);
		markerNo = teachingBuildingsMarkers[i2];
		markerNo.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){markerNo.setAnimation(google.maps.Animation.null);},1400);
		break;
    }
}
}

// Animate Food Outlets Markers
function food_outletsMarkers_animate(i)
{
console.log("animate " + i.abbr);
var markerNo;
for(var i2 = 0, m = null; i2 < food_outletsMarkers.length; ++i2) {
    console.log("try " + i2);
    if(food_outletsMarkers[i2].abbr == i.abbr) {
        m = food_outletsMarkers[i2];
        console.log("marker: " + i2 + " contains " + i.abbr);
		markerNo = food_outletsMarkers[i2];
		markerNo.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){markerNo.setAnimation(google.maps.Animation.null);},1400);
		break;
    }
}
}

function initialize() {
  var mapOptions = {
    zoom: 16
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
	  
	  setTimeout(function() {

            google.maps.event.trigger(map,'resize');
        }, 500);

  // Try HTML5 geolocation
  if(!navigator.geolocation) //remove the ! to use geolocation
  {
    navigator.geolocation.getCurrentPosition(function(position) {
     var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	 var currentPosMarker = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: pos,
		title: "You are here"
	  });
	 
	 map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } 
  else 
  {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
  mapContent();
  createTeachingBuildingMarkers();
  createfood_outletsMarkers();
}

function handleNoGeolocation(errorFlag) 
{
	var options = {
		map: map,
		position: new google.maps.LatLng(50.795229, -1.093768)
	};
	  
		map.setCenter(options.position);
}


// Add Teaching Building Markers to Map
function createTeachingBuildingMarkers()
{
	for (var i = 0; i < buildings.length; i++) 
		{
			  var marker = new google.maps.Marker({
			  position: buildings[i].latlong,
			  icon: buildings[i].marker,
			  draggable:false,
			  title: buildings[i].name,
			  abbr: buildings[i].abbr
			});
			teachingBuildingsMarkers.push(marker);
		}
}

// Add Food OutletsMarkers to Map
function createfood_outletsMarkers()
{
	for (var i = 0; i < food_outlets.length; i++) 
		{
			  var marker = new google.maps.Marker({
			  position: food_outlets[i].latlong,
			  icon: food_outlets[i].marker,
			  draggable:false,
			  title: food_outlets[i].name,
			  abbr: food_outlets[i].abbr
			});
			food_outletsMarkers.push(marker);
		}
}
// Sets the map on all teaching buildings markers in the array.
function setTeachingBuildingsMap(map) {
  for (var i = 0; i < teachingBuildingsMarkers.length; i++) {
    teachingBuildingsMarkers[i].setMap(map);
  }
}
// Sets the map on all food outlets markers in the array.
function setfood_outletsMap(map) {
  for (var i = 0; i < food_outletsMarkers.length; i++) {
    food_outletsMarkers[i].setMap(map);
  }
}
// Removes the teaching buildings markers from the map
function clearTeachingBuildingsMarkers() {
  for (var i = 0; i < teachingBuildingsMarkers.length; i++) {
    teachingBuildingsMarkers[i].setMap(null);
  }
}
// Removes the food outlets markers from the map
function clearfood_outletsMarkers() {
  for (var i = 0; i < food_outletsMarkers.length; i++) {
    food_outletsMarkers[i].setMap(null);
  }
}
// Shows any Teaching Buildings markers currently in the array.
function showTeachingBuildingsMarkers() {
  setTeachingBuildingsMap(map);
}
// Shows any Food Outlets markers currently in the array.
function showfood_outletsMarkers() {
  setfood_outletsMap(map);
}

// Turn Teaching Buildings Markers On and Off
function teachingBuildingMarkersSwitch()
{
	
	if (teachingBuildingMarkers === "off")
	{
		teachingBuildingMarkers = "on";
		showTeachingBuildingsMarkers();
	}
	else if (teachingBuildingMarkers === "on")
	{
		teachingBuildingMarkers = "off";
		clearTeachingBuildingsMarkers();
	}
}
// Turn Food Outlets Markers On and Off
function food_outletsMarkersSwitch()
{
	
	if (food_outletMarkers === "off")
	{
		food_outletMarkers = "on";
		showfood_outletsMarkers();
	}
	else if (food_outletMarkers === "on")
	{
		food_outletMarkers = "off";
		clearfood_outletsMarkers();
	}
}
google.maps.event.addDomListener(window, 'load', initialize);