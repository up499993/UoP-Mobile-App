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

//Setup Global Variables
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
var stopNo;

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
	stopNo = 1;
  }
  
  if (minDist == distCurrTo2[1])
  {
	nearestStop = "Winston Churchill Ave (Law Courts)";
	stopNo = 2;
  }
  
  if (minDist == distCurrTo3[1])
  {
	nearestStop = "Fratton Station";
	stopNo = 3;
  }
  
  if (minDist == distCurrTo4[1])
  {
	nearestStop = "Goldsmith Ave (Lidl)";
	stopNo = 4;
  }
  
  if (minDist == distCurrTo5[1])
  {
	nearestStop = "Goldsmith Ave (Milton Park)";
	stopNo = 5;
  }
  
  if (minDist == distCurrTo6[1])
  {
	nearestStop = "Langstone Campus (Arr)";
	stopNo = 6;
  }
  
  if (minDist == distCurrTo7[1])
  {
	nearestStop = "Langstone Campus (Dep)";
	stopNo = 7;
  }
  
  if (minDist == distCurrTo8[1])
  {
	nearestStop = "Locks Way Road (Milton)";
	stopNo = 8;
  }
  
  if (minDist == distCurrTo9[1])
  {
	nearestStop = "Goldsmith Ave (Lidl)";
	stopNo = 9;
  }
  
  if (minDist == distCurrTo10[1])
  {
	nearestStop = "Fratton Station";
	stopNo = 10;
  }
  
  if (minDist == distCurrTo11[1])
  {
	nearestStop = "Winston Churchill Ave (Ibis Hotel)";
	stopNo = 11;
  }
  
  if (minDist == distCurrTo12[1])
  {
	nearestStop = "Cambridge Road (Student Center)";
	stopNo = 12;
  }
  
  // Display Nearest Stop On Page
  document.querySelector('#nearestStop').innerHTML = nearestStop;
  
  
  nextBus();
  }
  
  

function nextBus() {
//Bus Times
var stop1Times = ['08:00:00','08:20:00','08:40:00','09:00:00','09:20:00','09:40:00','10:00:00','10:20:00','10:40:00','11:00:00','11:20:00','11:40:00','12:00:00','12:20:00','12:40:00','13:00:00','13:20:00','13:40:00','14:20:00','14:40:00','15:00:00','15:20:00','15:40:00','16:00:00','16:20:00','16:40:00','17:00:00','17:20:00','17:40:00','18:00:00','18:20:00','18:40:00','19:00:00','19:20:00','21:00:00','21:40:00','22:20:00', '23:00:00','00:13:00'];
var stop2Times = ['08:05:00','08:25:00','08:45:00','09:05:00','09:25:00','09:45:00','10:05:00','10:25:00','10:45:00','11:05:00','11:25:00','11:45:00','12:05:00','12:25:00','12:45:00','13:05:00','13:25:00','13:45:00','14:25:00','14:45:00','15:05:00','15:25:00','15:45:00','16:05:00','16:25:00','16:45:00','17:05:00','17:25:00','17:45:00','18:05:00','18:25:00','18:45:00','19:05:00','19:25:00','21:05:00','21:45:00','22:25:00', '23:05:00','00:13:00'];
var stop3Times = ['08:08:00','08:28:00','08:48:00','09:08:00','09:28:00','09:48:00','10:08:00','10:28:00','10:48:00','11:08:00','11:28:00','11:48:00','12:08:00','12:28:00','12:48:00','13:08:00','13:28:00','13:48:00','14:28:00','14:48:00','15:08:00','15:28:00','15:48:00','16:08:00','16:28:00','16:48:00','17:08:00','17:28:00','17:48:00','18:08:00','18:28:00','18:48:00','19:08:00','19:28:00','21:08:00','21:48:00','22:28:00', '23:08:00','00:15:00'];
var stop4Times = ['08:13:00','08:33:00','08:53:00','09:13:00','09:33:00','09:53:00','10:13:00','10:33:00','10:53:00','11:13:00','11:33:00','11:53:00','12:13:00','12:33:00','12:53:00','13:13:00','13:33:00','13:53:00','14:33:00','14:53:00','15:13:00','15:33:00','15:53:00','16:13:00','16:33:00','16:53:00','17:13:00','17:33:00','17:53:00','18:13:00','18:33:00','18:53:00','19:13:00','19:33:00','21:13:00','21:53:00','22:33:00', '23:13:00','00:17:00'];
var stop5Times = ['08:14:00','08:34:00','08:54:00','09:14:00','09:34:00','09:54:00','10:14:00','10:34:00','10:54:00','11:14:00','11:34:00','11:54:00','12:14:00','12:34:00','12:54:00','13:14:00','13:34:00','13:54:00','14:34:00','14:54:00','15:14:00','15:34:00','15:54:00','16:14:00','16:34:00','16:54:00','17:14:00','17:34:00','17:54:00','18:14:00','18:34:00','18:54:00','19:14:00','19:34:00','21:14:00','21:54:00','22:34:00', '23:14:00','00:20:00'];
var stop6Times = ['08:17:00','08:37:00','08:57:00','09:17:00','09:37:00','09:57:00','10:17:00','10:37:00','10:57:00','11:17:00','11:37:00','11:57:00','12:17:00','12:37:00','12:57:00','13:17:00','13:37:00','13:57:00','14:37:00','14:57:00','15:17:00','15:37:00','15:57:00','16:17:00','16:37:00','16:57:00','17:17:00','17:37:00','17:57:00','18:17:00','18:37:00','18:57:00','19:17:00','19:37:00','21:17:00','21:57:00','22:37:00', '23:17:00','00:25:00'];

var stop7Times = ['07:40:00','08:00:00','08:20:00','08:40:00','09:00:00','09:20:00','09:40:00','10:00:00','10:20:00','10:40:00','11:00:00','11:20:00','11:40:00','12:00:00','12:20:00','12:40:00','13:00:00','13:20:00','14:00:00','14:20:00','14:40:00','15:00:00','15:20:00','15:40:00','16:00:00','16:20:00','16:40:00','17:00:00','17:20:00','17:40:00','18:00:00','18:20:00','18:40:00','19:00:00','20:40:00','21:20:00', '22:00:00','22:40:00'];
var stop8Times = ['07:43:00','08:03:00','08:23:00','08:43:00','09:03:00','09:23:00','09:43:00','10:03:00','10:23:00','10:43:00','11:03:00','11:23:00','11:43:00','12:03:00','12:23:00','12:43:00','13:03:00','13:23:00','14:03:00','14:23:00','14:43:00','15:03:00','15:23:00','15:43:00','16:03:00','16:23:00','16:43:00','17:03:00','17:23:00','17:43:00','18:03:00','18:23:00','18:43:00','19:03:00','20:43:00','21:23:00', '22:03:00','22:43:00'];
var stop9Times = ['07:47:00','08:07:00','08:27:00','08:47:00','09:07:00','09:27:00','09:47:00','10:07:00','10:27:00','10:47:00','11:07:00','11:27:00','11:47:00','12:07:00','12:27:00','12:47:00','13:07:00','13:27:00','14:07:00','14:27:00','14:47:00','15:07:00','15:27:00','15:47:00','16:07:00','16:27:00','16:47:00','17:07:00','17:27:00','17:47:00','18:07:00','18:27:00','18:47:00','19:07:00','20:47:00','21:27:00', '22:07:00','22:47:00'];
var stop10Times = ['07:49:00','08:09:00','08:29:00','08:49:00','09:09:00','09:29:00','09:49:00','10:09:00','10:29:00','10:49:00','11:09:00','11:29:00','11:49:00','12:09:00','12:29:00','12:49:00','13:09:00','13:29:00','14:09:00','14:29:00','14:49:00','15:09:00','15:29:00','15:49:00','16:09:00','16:29:00','16:49:00','17:09:00','17:29:00','17:49:00','18:09:00','18:29:00','18:49:00','19:09:00','20:49:00','21:29:00', '22:09:00','22:49:00'];
var stop11Times = ['07:53:00','08:13:00','08:33:00','08:53:00','09:13:00','09:33:00','09:53:00','10:13:00','10:33:00','10:53:00','11:13:00','11:33:00','11:53:00','12:13:00','12:33:00','12:53:00','13:13:00','13:33:00','14:13:00','14:33:00','14:53:00','15:13:00','15:33:00','15:53:00','16:13:00','16:33:00','16:53:00','17:13:00','17:33:00','17:53:00','18:13:00','18:33:00','18:53:00','19:13:00','20:53:00','21:33:00', '22:13:00','22:53:00'];
var stop12Times = ['07:55:00','08:15:00','08:35:00','08:55:00','09:15:00','09:35:00','09:55:00','10:15:00','10:35:00','10:55:00','11:15:00','11:35:00','11:55:00','12:15:00','12:35:00','12:55:00','13:15:00','13:35:00','14:15:00','14:35:00','14:55:00','15:15:00','15:35:00','15:55:00','16:15:00','16:35:00','16:55:00','17:15:00','17:35:00','17:55:00','18:15:00','18:35:00','18:55:00','19:15:00','20:55:00','21:35:00', '22:15:00','22:55:00'];

var stop1WTimes = ['10:20:00','10:00:00','11:40:00','12:20:00','13:40:00','14:20:00','14:00:00','15:40:00','16:40:00','17:20:00','17:00:00'];
var stop2WTimes = ['10:25:00','10:05:00','11:45:00','12:25:00','13:45:00','14:25:00','14:05:00','15:45:00','16:45:00','17:25:00','17:05:00'];
var stop3WTimes = ['10:28:00','10:08:00','11:48:00','12:28:00','13:48:00','14:28:00','14:08:00','15:48:00','16:48:00','17:28:00','17:08:00'];
var stop4WTimes = ['10:30:00','10:10:00','11:50:00','12:30:00','13:50:00','14:30:00','14:10:00','15:50:00','16:50:00','17:30:00','17:10:00'];
var stop5WTimes = ['10:33:00','10:13:00','11:53:00','12:33:00','13:53:00','14:33:00','14:13:00','15:53:00','16:53:00','17:33:00','17:13:00'];
var stop6WTimes = ['12:36:00','15:36:00','18:16:00'];
var stop7WTimes = ['10:00:00','10:40:00','11:20:00','12:00:00','13:20:00','14:00:00','14:40:00','15:20:00','16:20:00','17:00:00','17:40:00'];
var stop8WTimes = ['10:04:00','10:44:00','11:24:00','12:04:00','13:24:00','14:04:00','14:44:00','15:24:00','16:24:00','17:04:00','17:44:00'];
var stop9WTimes = ['10:08:00','10:48:00','11:28:00','12:08:00','13:28:00','14:08:00','14:48:00','15:28:00','16:28:00','17:08:00','17:48:00'];
var stop10WTimes = ['10:13:00','10:53:00','11:33:00','12:13:00','13:33:00','14:13:00','14:53:00','15:33:00','16:33:00','17:13:00','17:53:00'];
var stop11WTimes = ['10:13:00','10:53:00','11:33:00','12:13:00','13:33:00','14:13:00','14:53:00','15:33:00','16:33:00','17:13:00','17:53:00'];
var stop12WTimes = ['10:16:00','10:56:00','11:36:00','12:16:00','13:36:00','14:16:00','14:56:00','15:36:00','16:36:00','17:16:00','17:56:00'];
//Get Current Time
  var d = new Date(); // for now
  var currTime= d.getHours() + ":" + d.getMinutes() + ":00";
//Check if Weekend
  var curDay = d.getDay();
  var weekend;
  if (curDay == 6 || curDay ==7)
  {
	weekend = "Yes";
  }
  else
  {
	weekend = "No";
  }

 //Convert a time to Seconds
  function toSeconds(time_str) {
    // Extract hours, minutes and seconds
    var parts = time_str.split(':');
    // compute  and return total seconds
    return parts[0] * 3600 + // an hour has 3600 seconds
    parts[1] * 60 + // a minute has 60 seconds
    +
    parts[2]; // seconds
}
  
//Get Closest Bus Time  
var busTimes;
	

	if (stopNo == 1)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop1WTimes.length;i++)
			{ 
				busTime = stop1WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop1WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop1WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop1WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") 
		{
			for (var i=0;i<stop1Times.length;i++)
			{ 
				busTime = stop1Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop1Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop1Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 2)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop2WTimes.length;i++)
			{ 
				busTime = stop2WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop2WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop2WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop2WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop2Times.length;i++)
			{ 
				busTime = stop2Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop2Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop2Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 3)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop3WTimes.length;i++)
			{ 
				busTime = stop3WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop3WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop3WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop3WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop3Times.length;i++)
			{ 
				busTime = stop3Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop3Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop3Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 4)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop4WTimes.length;i++)
			{ 
				busTime = stop4WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop4WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop4WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop4WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop4Times.length;i++)
			{ 
				busTime = stop4Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop4Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop4Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 5)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop5WTimes.length;i++)
			{ 
				busTime = stop5WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop5WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop5WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop5WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop5Times.length;i++)
			{ 
				busTime = stop5Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop5Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop5Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 6)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop6WTimes.length;i++)
			{ 
				busTime = stop6WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop6WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop6WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop6WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop6Times.length;i++)
			{ 
				busTime = stop6Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop6Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop6Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 7)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop7WTimes.length;i++)
			{ 
				busTime = stop7WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop7WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop7WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop7WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop7Times.length;i++)
			{ 
				busTime = stop7Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop7Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop7Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 8)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop8WTimes.length;i++)
			{ 
				busTime = stop8WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop8WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop8WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop8WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop8Times.length;i++)
			{ 
				busTime = stop8Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop8Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop8Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 9)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop9WTimes.length;i++)
			{ 
				busTime = stop9WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop9WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop9WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop9WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop9Times.length;i++)
			{ 
				busTime = stop9Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop9Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop9Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 10)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop10WTimes.length;i++)
			{ 
				busTime = stop10WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop10WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop10WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop10WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop10Times.length;i++)
			{ 
				busTime = stop10Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop10Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop10Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 11)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop11WTimes.length;i++)
			{ 
				busTime = stop11WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop11WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop11WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop11WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop11Times.length;i++)
			{ 
				busTime = stop11Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop11Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop11Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	else if (stopNo == 12)
	{
		console.log("Stop No: " + stopNo);
		if (weekend == "Yes")
		{
			for (var i=0;i<stop12WTimes.length;i++)
			{ 
				busTime = stop12WTimes[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop12WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					console.log("Scheduled: " + stop12WTimes[i] + " Due: " + dispResult);
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop12WTimes[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
		else if (weekend == "No") //THIS IS THE PIECE BEING USED FOR TESTING
		{
			for (var i=0;i<stop12Times.length;i++)
			{ 
				busTime = stop12Times[i];
				var nextBus;
				if (toSeconds(busTime) < toSeconds(currTime))
				{
					newBusTime = toSeconds(busTime) + 86400;
					var difference = Math.abs(toSeconds(currTime) - newBusTime);
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop12Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
				else
				{
					if (nextBus < toSeconds(busTime))
					{
						
					}
					else
					{
						nextBus = toSeconds(busTime);
					}
					var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));
					var result = [
					Math.floor(difference / 3600), // disp full hours
					Math.floor((difference % 3600) / 60) // disp full mins

					];

					// 0 padding and concatation
					result = result.map(function(v) {
						return v < 10 ? '0' + v : v;
					}).join(':');
					var hrs = result.substring(0,2);
					var min = result.substring(3,5);
					var dispResult = hrs + "Hrs " + min + "Mins";
					// Display Times For Nearest Stop On Page
					var output = "Scheduled: " + stop12Times[i] + "<br /> Due: " + dispResult + "<br /><br />";
					document.querySelector('#busTimes').innerHTML = document.querySelector('#busTimes').innerHTML + output;
				}
			}
			var difference = Math.abs(toSeconds(currTime) - nextBus);
			var result = [
			Math.floor(difference / 3600), // disp full hours
			Math.floor((difference % 3600) / 60) // disp full mins

			];

			// 0 padding and concatation
			result = result.map(function(v) {
				return v < 10 ? '0' + v : v;
			}).join(':');
			var hrs = result.substring(0,2);
			var min = result.substring(3,5);
			var dispResult = hrs + "Hrs " + min + "Mins";
			console.log("Next Bus Due: " + dispResult);
			// Display Next Bus Due On Page
			var outputNextBus = dispResult;
			document.querySelector('#nextBus').innerHTML = outputNextBus;
		}
	}
	
	//loadScript();
	
	//produce and display map of bus stop
	var latlng = "(58.39847354300152, 15.579836368560791)"
	
/*
	// Remove the parentheses and whitespace
	latlng = toString(stop1);
	alert (latlng);
	latlng  = latlng.replace(/[() ]/g,'')

	// Now your code 
	var split = latlng.split(",");
	var lat = split[0];
	var lng = split[1];
	
	alert(lat);
	alert(lng);*/
	
	
/*  
  var busTime = "18:33:00";
  
 
    
 
// Get difference between times
var difference = Math.abs(toSeconds(currTime) - toSeconds(busTime));

// format time differnece
var result = [
    Math.floor(difference / 3600), // disp full hours
    Math.floor((difference % 3600) / 60) // disp full mins

];

// 0 padding and concatation
result = result.map(function(v) {
    return v < 10 ? '0' + v : v;
}).join(':');
console.log("Diff Between times: " + result);
*/
 }
 
 function showMap() {
	document.getElementById('bus-stop-map-canvas').style.display="block";
	initializeBusStopMap()
	document.getElementById("showMapBtn").onclick = hideMap;
	}
	
function hideMap() {
	document.getElementById('bus-stop-map-canvas').style.display="none";
	document.getElementById("showMapBtn").onclick = showMap;
}
 
 function initializeBusStopMap() {
	
	console.log("Initializing Map for Stop" + stopNo);
	if (stopNo ===1){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop1
  };
  var pos = stop1;
  }
  else if (stopNo === 2){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop2
  };
  var pos = stop2;
  }
  else if (stopNo === 3){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop3
  };
  var pos = stop3;
  }
  else if (stopNo === 4){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop4
  };
  var pos = stop4;
  }
  else if (stopNo === 5){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop5
  };
  var pos = stop5;
  }
  else if (stopNo === 6){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop6
  };
  var pos = stop6;
  }
  else if (stopNo === 7){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop7
  };
  var pos = stop8;
  }
  else if (stopNo === 8){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop8
  };
  var pos = stop8;
  }
  else if (stopNo === 9){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop9
  };
  var pos = stop9;
  }
  else if (stopNo === 10){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop10
  };
  var pos = stop10;
  }
  else if (stopNo === 11){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop11
  };
  var pos = stop11;
  }
  else if (stopNo === 12){
  var mapOptions = {
    zoom: 15,
	scrollwheel: false,
    center: stop12
  };
  var pos = stop12;
  }

  var map = new google.maps.Map(document.getElementById('bus-stop-map-canvas'),
      mapOptions);
	  

	  

    marker = new google.maps.Marker({
    map:map,
    draggable:false,
    animation: google.maps.Animation.DROP,
    position: pos
  });
}

function refreshMap() {
  initializeBusStopMap();
  }
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initializeBusStopMap';
  document.body.appendChild(script);
}
