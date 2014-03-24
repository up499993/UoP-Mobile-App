//Globals
var teachingBuildingMarkers = "off";
var food_outletMarkers = "off";
var open_accessMarkers = "off";
var serv_facil_Markers = "off";
var prof_serv_Markers = "off";
var halls_Markers = "off";
var map;
var markers = [];
var teachingBuildingsMarkers = [];
var food_outletsMarkers = [];
var open_accMarkers = [];
var serv_facilMarkers = [];
var prof_servMarkers = [];
var hallsMarkers = [];

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
var liboa = {
    name: 'Library',
    abbr: 'liboa',
    marker: 'img/map_markers/paleblue_MarkerComputer.png',
    latlong: new google.maps.LatLng(50.7937, -1.0978)
};			
var parkoa = {
    name: 'Park',
    abbr: 'parkoa',
    marker: 'img/map_markers/paleblue_MarkerComputer.png',
    latlong: new google.maps.LatLng(50.7975, -1.0940)
};			
var burnabyoa = {
	name: 'Burnaby',
	abbr: 'burnabyoa',
    marker: 'img/map_markers/paleblue_MarkerComputer.png',
	latlong: new google.maps.LatLng(50.7980, -1.0980)
};
var angleseaoa = {
	name: 'Anglesea',
	abbr: 'angleseaoa',
    marker: 'img/map_markers/paleblue_MarkerComputer.png',
	latlong: new google.maps.LatLng(50.7978, -1.0965)
};
var langsit = {
	name: 'Langstone IT Centre',
	abbr: 'langsit',
	marker: 'img/map_markers/paleblue_MarkerComputer.png',
	latlong: new google.maps.LatLng(50.7972545,-1.0416836)
};
//Define Facilities and Student Services Buildings
var nuffield = {
	name: 'Nuffield Centre',
	abbr: 'nuffield',
	marker: 'img/map_markers/red_MarkerA.png',
	latlong: new google.maps.LatLng(50.7951855,-1.0962857)
};
var pdoor = {
	name: 'Purple Door',
	abbr: 'pdoor',
	marker: 'img/map_markers/red_MarkerB.png',
	latlong: new google.maps.LatLng(50.7959083,-1.0936767)
};
var ssc = {
	name: 'Spinnaker Sports Centre',
	abbr: 'ssc',
	marker: 'img/map_markers/red_MarkerC.png',
	latlong: new google.maps.LatLng(50.7948494,-1.0970718)
};
var spsc = {
	name: 'St. Paul\'s Sports Centre',
	abbr: 'spsc',
	marker: 'img/map_markers/red_MarkerD.png',
	latlong: new google.maps.LatLng(50.7933228,-1.0946993)
};
var lss = {
	name: 'Langstone Sports Site',
	abbr: 'lss',
	marker: 'img/map_markers/red_MarkerE.png',
	latlong: new google.maps.LatLng(50.796008,-1.043766)
};
var ulib = {
	name: 'University Library',
	abbr: 'ulib',
	marker: 'img/map_markers/red_MarkerF.png',
	latlong: new google.maps.LatLng(50.7937997,-1.0981019)
};
var ub3s = {
	name: 'Student Union and 3rd Space',
	abbr: 'ub3s',
	marker: 'img/map_markers/red_MarkerG.png',
	latlong: new google.maps.LatLng(50.7943965,-1.0965784)
};
//Define Professional Services Buildings
var	merc = {
	name: 'Mercantile House',
	abbr: 'merc',
	marker: 'img/map_markers/green_MarkerA.png',
	latlong: new google.maps.LatLng(50.7948014,-1.0956397)
};
var sac = {
	name: 'St. Andrew\'s Court',
	abbr: 'sac',
	marker: 'img/map_markers/green_MarkerB.png',
	latlong: new google.maps.LatLng(50.7956584,-1.0949152)
};
var uh = {
	name: 'University House',
	abbr: 'uh',
	marker: 'img/map_markers/green_MarkerC.png',
	latlong: new google.maps.LatLng(50.7951259,-1.0935123)
};
//Define halls
var bateson = {
	name: 'Bateson Hall',
	abbr: 'bateson',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7963452,-1.0905892)
};
var burrell = {
	name: 'Burrell House',
	abbr: 'burrell',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7889274,-1.0951226)
};
var hlaw = {
	name: 'Harry Law Hall',
	abbr: 'hlaw',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7962372,-1.0909973)
};
var jw = {
	name: 'James Watson Hall',
	abbr: 'jw',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7961846,-1.0941593)
};
var langvil = {
	name: 'Langstone Student Village',
	abbr: 'langvil',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7972545,-1.0416836)
};
var mrule = {
	name: 'Margaret Rule Hall',
	abbr: 'mrule',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7972914,-1.0903048)
};
var rees = {
	name: 'Rees Hall',
	abbr: 'rees',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7882021,-1.0960819)
};
var trafalgar = {
	name: 'Trafalgar Hall',
	abbr: 'trafalgar',
	marker: 'img/map_markers/pink_MarkerHalls.png',
	latlong: new google.maps.LatLng(50.7951636,-1.0919059)
};

//Building Arrays
var buildings = [a, bk, bb, bt, ds, el, ht, jwh, kh, lg, ml, pk, po, pd, rv, rb, ro, sb, sa, sg, sm, ub, ul, wbb, wb, temp1to4, temp5to6];
var teaching_buildings = [a, bk, bb, bt, ds, el, ht, jwh, kh, lg, ml, pk, po, pd, rv, rb, ro, sb, sa, sg, sm, ub, ul, wbb, wb, temp1to4, temp5to6];
var food_outlets = [stgeorge_coffee, library_coffee, waterhole, coco, artscafe, standrew_cafe, thirdspace, park_coffee, a901];
var open_acc = [liboa, parkoa, burnabyoa, angleseaoa, langsit];
var serv_facil = [nuffield, pdoor, ssc, spsc, lss, ulib, ub3s];
var prof_serv = [merc, sac, uh];
var halls = [bateson, burrell, hlaw, jw, langvil, mrule, rees, trafalgar];

function mapContent()
{
	//Clear divs
	document.querySelector('#teaching-buildings ul').innerHTML = "";
	document.querySelector('#food_outlets ul').innerHTML = "";
	document.querySelector('#open_acc ul').innerHTML = "";
	document.querySelector('#serv_facil ul').innerHTML = "";
	document.querySelector('#prof_serv ul').innerHTML = "";
	document.querySelector('#halls ul').innerHTML = "";
	
	// Add Teaching Building Names to Page
	for (var i = 0; i < teaching_buildings.length; i++) 
	{
		
		var abbr = teaching_buildings[i].abbr;
		if (abbr === "temp1to4") {abbr = "temp1-4";} else if (abbr === "temp5to6") {abbr = "temp5-6";}
		abbr = abbr.toUpperCase();
		document.querySelector('#teaching-buildings ul').innerHTML += "<li id='teaching-" + teaching_buildings[i].abbr + "'><span onmouseover='teachingBuildingsMarkers_animate(" + teaching_buildings[i].abbr + ");'>" + teaching_buildings[i].name + " (" + abbr + ") - Map Location: " + teaching_buildings[i].marker.substr(teaching_buildings[i].marker.lastIndexOf("Marker")+6,1) + "</span></li>";
	}
	
	// Add Food Outlet Names to Page
	for (var i = 0; i < food_outlets.length; i++) 
	{
		
		document.querySelector('#food_outlets ul').innerHTML += "<li id='food_outlets-" + food_outlets[i].abbr + "'><span onmouseover='food_outletsMarkers_animate(" + food_outlets[i].abbr + ");'>" + food_outlets[i].name + "</span></li>";
	}
	
	// Add Open Access Names to Page
	for (var i = 0; i < open_acc.length; i++) 
	{
		
		document.querySelector('#open_acc ul').innerHTML += "<li id='open_acc-" + open_acc[i].abbr + "'><span onmouseover='open_accMarkers_animate(" + open_acc[i].abbr + ");'>" + open_acc[i].name + "</span></li>";
	}
	
	// Add Services and Facilities Names to Page
	for (var i = 0; i < serv_facil.length; i++) 
	{
		
		document.querySelector('#serv_facil ul').innerHTML += "<li id='serv_facil-" + serv_facil[i].abbr + "'><span onmouseover='serv_facilMarkers_animate(" + serv_facil[i].abbr + ");'>" + serv_facil[i].name + " - Map Location: " + serv_facil[i].marker.substr(serv_facil[i].marker.lastIndexOf("Marker")+6,1) + "</span></li>";
	}
	
	// Add Professional Services Names to Page
	for (var i = 0; i < prof_serv.length; i++) 
	{
		
		document.querySelector('#prof_serv ul').innerHTML += "<li id='prof_serv-" + prof_serv[i].abbr + "'><span onmouseover='prof_servMarkers_animate(" + prof_serv[i].abbr + ");'>" + prof_serv[i].name + " - Map Location: " + prof_serv[i].marker.substr(prof_serv[i].marker.lastIndexOf("Marker")+6,1) + "</span></li>";
	}
	
	// Add Halls Names to Page
	for (var i = 0; i < halls.length; i++) 
	{
		
		document.querySelector('#halls ul').innerHTML += "<li id='halls-" + halls[i].abbr + "'><span onmouseover='hallsMarkers_animate(" + halls[i].abbr + ");'>" + halls[i].name + " - Map Location: " + halls[i].marker.substr(halls[i].marker.lastIndexOf("Marker")+6,1) + "</span></li>";
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

// Animate Open Access Markers
function open_accMarkers_animate(i)
{
console.log("animate " + i.abbr);
var markerNo;
for(var i2 = 0, m = null; i2 < open_accMarkers.length; ++i2) {
    console.log("try " + i2);
    if(open_accMarkers[i2].abbr == i.abbr) {
        m = open_accMarkers[i2];
        console.log("marker: " + i2 + " contains " + i.abbr);
		markerNo = open_accMarkers[i2];
		markerNo.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){markerNo.setAnimation(google.maps.Animation.null);},1400);
		break;
    }
}
}

// Animate Service and Facilities Markers
function serv_facilMarkers_animate(i)
{
console.log("animate " + i.abbr);
var markerNo;
for(var i2 = 0, m = null; i2 < serv_facilMarkers.length; ++i2) {
    console.log("try " + i2);
    if(serv_facilMarkers[i2].abbr == i.abbr) {
        m = serv_facilMarkers[i2];
        console.log("marker: " + i2 + " contains " + i.abbr);
		markerNo = serv_facilMarkers[i2];
		markerNo.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){markerNo.setAnimation(google.maps.Animation.null);},1400);
		break;
    }
}
}

// Animate Professional Service Markers
function prof_servMarkers_animate(i)
{
console.log("animate " + i.abbr);
var markerNo;
for(var i2 = 0, m = null; i2 < prof_servMarkers.length; ++i2) {
    console.log("try " + i2);
    if(prof_servMarkers[i2].abbr == i.abbr) {
        m = prof_servMarkers[i2];
        console.log("marker: " + i2 + " contains " + i.abbr);
		markerNo = prof_servMarkers[i2];
		markerNo.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){markerNo.setAnimation(google.maps.Animation.null);},1400);
		break;
    }
}
}

// Animate Halls Markers
function hallsMarkers_animate(i)
{
console.log("animate " + i.abbr);
var markerNo;
for(var i2 = 0, m = null; i2 < hallsMarkers.length; ++i2) {
    console.log("try " + i2);
    if(hallsMarkers[i2].abbr == i.abbr) {
        m = hallsMarkers[i2];
        console.log("marker: " + i2 + " contains " + i.abbr);
		markerNo = hallsMarkers[i2];
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
  createopen_accMarkers();
  createserv_facilMarkers();
  createprof_servMarkers();
  createhallsMarkers();
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

// Add Food Outlets Markers to Map
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

// Add Open Access Markers to Map
function createopen_accMarkers()
{
	for (var i = 0; i < open_acc.length; i++) 
		{
			  var marker = new google.maps.Marker({
			  position: open_acc[i].latlong,
			  icon: open_acc[i].marker,
			  draggable:false,
			  title: open_acc[i].name,
			  abbr: open_acc[i].abbr
			});
			open_accMarkers.push(marker);
		}
}

// Add Service and Facility Markers to Map
function createserv_facilMarkers()
{
	for (var i = 0; i < serv_facil.length; i++) 
		{
			  var marker = new google.maps.Marker({
			  position: serv_facil[i].latlong,
			  icon: serv_facil[i].marker,
			  draggable:false,
			  title: serv_facil[i].name,
			  abbr: serv_facil[i].abbr
			});
			serv_facilMarkers.push(marker);
		}
}

// Add Professional Service Markers to Map
function createprof_servMarkers()
{
	for (var i = 0; i < prof_serv.length; i++) 
		{
			  var marker = new google.maps.Marker({
			  position: prof_serv[i].latlong,
			  icon: prof_serv[i].marker,
			  draggable:false,
			  title: prof_serv[i].name,
			  abbr: prof_serv[i].abbr
			});
			prof_servMarkers.push(marker);
		}
}

// Add Halls Markers to Map
function createhallsMarkers()
{
	for (var i = 0; i < halls.length; i++) 
		{
			  var marker = new google.maps.Marker({
			  position: halls[i].latlong,
			  icon: halls[i].marker,
			  draggable:false,
			  title: halls[i].name,
			  abbr: halls[i].abbr
			});
			hallsMarkers.push(marker);
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

// Sets the map on all open access markers in the array.
function setopen_accMap(map) {
  for (var i = 0; i < open_accMarkers.length; i++) {
    open_accMarkers[i].setMap(map);
  }
}

// Sets the map on all service and facility markers in the array.
function setserv_facilMap(map) {
  for (var i = 0; i < serv_facilMarkers.length; i++) {
    serv_facilMarkers[i].setMap(map);
  }
}

// Sets the map on all professional service markers in the array.
function setprof_servMap(map) {
  for (var i = 0; i < prof_servMarkers.length; i++) {
    prof_servMarkers[i].setMap(map);
  }
}

// Sets the map on all halls markers in the array.
function sethallsMap(map) {
  for (var i = 0; i < hallsMarkers.length; i++) {
    hallsMarkers[i].setMap(map);
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

// Removes the open access markers from the map
function clearopen_accMarkers() {
  for (var i = 0; i < open_accMarkers.length; i++) {
    open_accMarkers[i].setMap(null);
  }
}

// Removes the service and facility markers from the map
function clearserv_facilMarkers() {
  for (var i = 0; i < serv_facilMarkers.length; i++) {
    serv_facilMarkers[i].setMap(null);
  }
}

// Removes the professional services markers from the map
function clearprof_servMarkers() {
  for (var i = 0; i < prof_servMarkers.length; i++) {
    prof_servMarkers[i].setMap(null);
  }
}

// Removes the halls markers from the map
function clearhallsMarkers() {
  for (var i = 0; i < hallsMarkers.length; i++) {
    hallsMarkers[i].setMap(null);
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

// Shows any Open Access markers currently in the array.
function showopen_accMarkers() {
  setopen_accMap(map);
}

// Shows any Service and Facilities markers currently in the array.
function showserv_facilMarkers() {
  setserv_facilMap(map);
}

// Shows any professional services markers currently in the array.
function showprof_servMarkers() {
  setprof_servMap(map);
}

// Shows any halls markers currently in the array.
function showhallsMarkers() {
  sethallsMap(map);
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

// Turn Open Access Markers On and Off
function open_accMarkersSwitch()
{
	
	if (open_accessMarkers === "off")
	{
		open_accessMarkers = "on";
		showopen_accMarkers();
	}
	else if (open_accessMarkers === "on")
	{
		open_accessMarkers = "off";
		clearopen_accMarkers();
	}
}

// Turn Service and Facilities Markers On and Off
function serv_facilMarkersSwitch()
{
	
	if (serv_facil_Markers === "off")
	{
		serv_facil_Markers = "on";
		showserv_facilMarkers();
	}
	else if (serv_facil_Markers === "on")
	{
		serv_facil_Markers = "off";
		clearserv_facilMarkers();
	}
}

// Turn Professional Service Markers On and Off
function prof_servMarkersSwitch()
{
	
	if (prof_serv_Markers === "off")
	{
		prof_serv_Markers = "on";
		showprof_servMarkers();
	}
	else if (prof_serv_Markers === "on")
	{
		prof_serv_Markers = "off";
		clearprof_servMarkers();
	}
}

// Turn Halls Markers On and Off
function hallsMarkersSwitch()
{
	
	if (halls_Markers === "off")
	{
		halls_Markers = "on";
		showhallsMarkers();
	}
	else if (halls_Markers === "on")
	{
		halls_Markers = "off";
		clearhallsMarkers();
	}
}

google.maps.event.addDomListener(window, 'load', initialize);