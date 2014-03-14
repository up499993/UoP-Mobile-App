//Define Global Variables
var myLat;
var myLong;
var myPos;
var furthestOA;
var closestOA;
var nearestOA;

function freePC() {
$.ajax({
    url: 'http://proj.scottwalton.co.uk/json_proxy/oa.php',
    dataType: 'json',
    success: function( oa ) {
	var Library = {
                name: 'Library',
                status: oa.Library.status,
                pcs: {
                    available: oa.Library.available,
					inuse: oa.Library.inuse,
                    total: oa.Library.total
                },
                latlong: new google.maps.LatLng(50.7937, -1.0978)
            };
			
	var Park = {
                name: 'Park',
                status: oa.Park.status,
                pcs: {
                    available: oa.Park.available,
					inuse: oa.Park.inuse,
                    total: oa.Park.total
                },
                latlong: new google.maps.LatLng(50.7975, -1.0940)
            };
			
	var Burnaby = {
                name: 'Burnaby',
                status: oa.Burnaby.status,
                pcs: {
                    available: oa.Burnaby.available,
					inuse: oa.Burnaby.inuse,
                    total: oa.Burnaby.total
                },
                latlong: new google.maps.LatLng(50.7980, -1.0980)
            };
			
	var Anglesea = {
                name: 'Anglesea',
                status: oa.Anglesea.status,
                pcs: {
                    available: oa.Anglesea.available,
					inuse: oa.Anglesea.inuse,
                    total: oa.Anglesea.total
                },
                latlong: new google.maps.LatLng(50.7978, -1.0965)
            };
						
    // Get Current Location using Geolocation
	function myLocation()
	  {
	  if (navigator.geolocation)
		{
		navigator.geolocation.getCurrentPosition(showMyPosition);
		}
	  else{alert("Geolocation is not supported by this browser.");}
	  }
	
	// Store Current Position  
	function showMyPosition(myPosition)
	{
	  myLat = myPosition.coords.latitude;
	  myLong = myPosition.coords.longitude;
	  myPos = [myPosition.coords.latitude,myPosition.coords.longitude];
	  myPos_G = new google.maps.LatLng(myLat, myLong);
	  	  
	  // Call Distance To OA Function
	  function distanceToOA()
	  {
	  // Find Distance to Each Stop from Current Position
	  Library.dist = google.maps.geometry.spherical.computeDistanceBetween(myPos_G, Library.latlong);
	  Park.dist = google.maps.geometry.spherical.computeDistanceBetween(myPos_G, Park.latlong);
	  Burnaby.dist = google.maps.geometry.spherical.computeDistanceBetween(myPos_G, Burnaby.latlong);
	  Anglesea.dist = google.maps.geometry.spherical.computeDistanceBetween(myPos_G, Anglesea.latlong);
	   console.log(Library);
	   console.log(Park);
	   console.log(Burnaby);
	   console.log(Anglesea);
	 
	  // Put Distance to each stop into an array and find shortest distance.
	  distToOA = [Library, Park, Burnaby, Anglesea];
	  distToOA.sort(function(a, b)
	{
		return a.dist - b.dist;
	});
	  
	  //furthestOA = Array.max(distToOA);
	closestOA = distToOA.sort(function(a, b)
	{
		return a.dist - b.dist;
	})[0][1];

	//testing
	distToOA.sort(function(a, b){return a.dist - b.dist;})[0].pcs.available = 0;
	distToOA.sort(function(a, b){return a.dist - b.dist;})[1].pcs.available = 0;
	distToOA.sort(function(a, b){return a.dist - b.dist;})[2].pcs.available = 0;
	distToOA.sort(function(a, b){return a.dist - b.dist;})[3].pcs.available = 1;
	
	console.log(distToOA.sort(function(a, b){return a.dist - b.dist;})[0].name + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[0].pcs.available + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[1].name + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[1].pcs.available + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[2].name + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[2].pcs.available + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[3].name + " " + distToOA.sort(function(a, b){return a.dist - b.dist;})[3].pcs.available);
	
	//end
	if (distToOA.sort(function(a, b){return a.dist - b.dist;})[0].pcs.available < 1) 
	{
		if (distToOA.sort(function(a, b){return a.dist - b.dist;})[1].pcs.available < 1) 
		{
			if (distToOA.sort(function(a, b){return a.dist - b.dist;})[2].pcs.available < 1) 
			{
				if (distToOA.sort(function(a, b){return a.dist - b.dist;})[3].pcs.available < 1) 
				{
					console.log("No Free PCs");
				}
				else
				{
					console.log(distToOA.sort(function(a, b){return a.dist - b.dist;})[3].name);
				}
			}
			else
			{
				console.log(distToOA.sort(function(a, b){return a.dist - b.dist;})[2].name);
			}
		}
		else
		{
			console.log(distToOA.sort(function(a, b){return a.dist - b.dist;})[1].name);
		}
	}
	else
	{
		console.log(distToOA.sort(function(a, b){return a.dist - b.dist;})[0].name);
	}
		
		
	  // Display Nearest OA On Page
	  //document.querySelector('#nearestOA').innerHTML = nearestOA;
	  
	  
	  
	  } 
	  
	  
	 distanceToOA(); 
	}
	myLocation();
	},
	//If JSON Feed doesn't load run this instead to use dummy data
    error: function( oa ) {
    var jsonOA = generateDummyData();
	var oa = JSON.parse(jsonOA);
	console.log(oa.Library);
	console.log(oa.Park);
	console.log(oa.Burnaby);
	console.log(oa.Anglesea);

    }
  });
  
 }
 
// Generate Dummy JSON for testing
function generateDummyData(){
// Define Objects

var Library = new Object(); 
Library.Status = "2";       
Library.Available = "108";
Library.Inuse = "171";
Library.Total = "280";

var Park = new Object(); 
Park.Status = "2";       
Park.Available = "32";
Park.Inuse = "38";
Park.Total = "70";

var Burnaby = new Object(); 
Burnaby.Status = "2";       
Burnaby.Available = "17";
Burnaby.Inuse = "31";
Burnaby.Total = "48";

var Anglesea = new Object(); 
Anglesea.Status = "2";       
Anglesea.Available = "8";
Anglesea.Inuse = "4";
Anglesea.Total = "12";



// Merge Objects
var OA = new Object();
OA.Library = Library;
OA.Park = Park;
OA.Burnaby = Burnaby;
OA.Anglesea = Anglesea;

// Convert to JSON
var jsonLibrary = JSON.stringify(Library);
var jsonPark = JSON.stringify(Park);
var jsonBurnaby = JSON.stringify(Burnaby);
var jsonAnglesea = JSON.stringify(Anglesea);
var jsonOA = JSON.stringify(OA);

//Output
return jsonOA;
console.log(jsonOA);
}

// sample JSON from IT Help {"Library":{"status":2,"available":109,"inuse":171,"total":280},"Park":{"status":2,"available":32,"inuse":38,"total":70},"Burnaby":{"status":2,"available":17,"inuse":31,"total":48},"Anglesea":{"status":2,"available":8,"inuse":4,"total":12}}