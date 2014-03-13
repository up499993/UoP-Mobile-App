/* Bus Stop Locations

Cambridge Road (Nuffield) Stop1
Long:-1.096767
Lat:50.794665

Winston Churchill Ave (Law Courts) Stop2
Long:-1.092529
Lat:50.795587

Fratton Station Stop3
Long:-1.075988
Lat:50.796070

Goldsmith Ave (Lidl) Stop4
Long:-1.069781
Lat:50.794974

Goldsmith Ave (Milton Park) Stop5
Long: -1.065881
Lat:50.794535

Langstone Campus (Arr) Stop6
Long:-1.041862
Lat:50.796143

Langstone Campus (Dep) Stop7
Long:-1.041947
Lat:50.796061

Locks Way Road (Milton) Stop8
Long:-1.0485144
Lat:50.7954484

Goldsmith Ave (Lidl) Stop9
Long:-1.069658
Lat:50.794952

Fratton Station Stop10
Long:-1.073969
Lat:50.796326

Winston Churchill Ave (Ibis Hotel) Stop11
Long:-1.0874335
Lat:50.7945881

Cambridge Road (Student Center) Stop12
Long:-1.0961453
Lat:50.7937268
*/

//Setup Variables
var currLat;
var currLong;
var currPos;
var stop1 = new google.maps.LatLng(50.794665, -1.096767);
var stop2 = new google.maps.LatLng(50.795587, -1.092529);
var stop3 = new google.maps.LatLng(50.796070, -1.075988);
var stop4 = new google.maps.LatLng(50.794974, -1.069781);
var stop5 = new google.maps.LatLng(50.794535, -1.065881);
var stop6 = new google.maps.LatLng(50.796143, -1.041862);
var stop7 = new google.maps.LatLng(50.796061, -1.041947);
var stop8 = new google.maps.LatLng(50.7954484, -1.0485144);
var stop9 = new google.maps.LatLng(50.794952, -1.069658);
var stop10 = new google.maps.LatLng(50.796326, -1.073969);
var stop11 = new google.maps.LatLng(50.7945881, -1.0874335);
var stop12 = new google.maps.LatLng(50.7937268, -1.0961453);
var maxDist;
var minDist;
var nearestStop;

// Get Current Location using Geolocation
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{alert("Geolocation is not supported by this browser.");}
  }

// Store Current Position  
function showPosition(position)
  {
  currLat = position.coords.latitude;
  currLong = position.coords.longitude;
  currPos = [position.coords.latitude,position.coords.longitude];
  currPos_G = new google.maps.LatLng(currLat, currLong);
  
  // Call Distance To Stops Function
  distanceToStops();
  }
 Array.min = function( array ){
    return Math.min.apply( Math, array );
};
 Array.max = function( array ){
    return Math.max.apply( Math, array );
};
function distanceToStops()
  {
  // Find Distance to Each Stop from Current Position
  distCurrTo1 = [1,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop1)];
  distCurrTo2 = [2,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop2)];
  distCurrTo3 = [3,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop3)];
  distCurrTo4 = [4,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop4)];
  distCurrTo5 = [5,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop5)];
  distCurrTo6 = [6,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop6)];
  distCurrTo7 = [7,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop7)];
  distCurrTo8 = [8,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop8)];
  distCurrTo9 = [9,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop9)];
  distCurrTo10 = [10,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop10)];
  distCurrTo11 = [11,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop11)];
  distCurrTo12 = [12,google.maps.geometry.spherical.computeDistanceBetween(currPos_G, stop12)];
  
  // Put Distance to each stop into an array and find shortest distance.
  distToStops = [distCurrTo1[1],distCurrTo2[1],distCurrTo3[1],distCurrTo4[1],distCurrTo5[1],distCurrTo6[1],distCurrTo7[1],distCurrTo8[1],distCurrTo9[1],distCurrTo10[1],distCurrTo11[1],distCurrTo12[1]];
  maxDist = Array.max(distToStops);
  minDist = Array.min(distToStops);
  
  // Name Nearest Stop
  if (minDist == distCurrTo1[1])
  {
	nearestStop = "Cambridge Road (Nuffield)";
  }
  
  if (minDist == distCurrTo2[1])
  {
	nearestStop = "Winston Churchill Ave (Law Courts)";
  }
  
  if (minDist == distCurrTo3[1])
  {
	nearestStop = "Fratton Station";
  }
  
  if (minDist == distCurrTo4[1])
  {
	nearestStop = "Goldsmith Ave (Lidl)";
  }
  
  if (minDist == distCurrTo5[1])
  {
	nearestStop = "Goldsmith Ave (Milton Park)";
  }
  
  if (minDist == distCurrTo6[1])
  {
	nearestStop = "Langstone Campus (Arr)";
  }
  
  if (minDist == distCurrTo7[1])
  {
	nearestStop = "Langstone Campus (Dep)";
  }
  
  if (minDist == distCurrTo8[1])
  {
	nearestStop = "Locks Way Road (Milton)";
  }
  
  if (minDist == distCurrTo9[1])
  {
	nearestStop = "Goldsmith Ave (Lidl)";
  }
  
  if (minDist == distCurrTo10[1])
  {
	nearestStop = "Fratton Station";
  }
  
  if (minDist == distCurrTo11[1])
  {
	nearestStop = "Winston Churchill Ave (Ibis Hotel)";
  }
  
  if (minDist == distCurrTo12[1])
  {
	nearestStop = "Cambridge Road (Student Center)";
  }
  
  // Display Nearest Stop On Page
  document.querySelector('#nearestStop').innerHTML = nearestStop;
  /*
  console.log(distCurrTo1);
  console.log(distCurrTo2);
  console.log(distCurrTo3);
  console.log(distCurrTo4);
  console.log(distCurrTo5);
  console.log(distCurrTo6);
  console.log(distCurrTo7);
  console.log(distCurrTo8);
  console.log(distCurrTo9);
  console.log(distCurrTo10);
  console.log(distCurrTo11);
  console.log(distCurrTo12);
  console.log("Curr Pos:" + currPos_G);
  console.log("Max Dist: " + maxDist);
  console.log("Min Dist: " + minDist);
  console.log("Nearest Stop: " + nearestStop);
  */
  }
 