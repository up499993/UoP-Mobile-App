function mapInit()
{
initialize();
}

//Globals

//Define Teaching Buildings
var a = {
                name: 'Anglesea Building',
				abbr: 'A',
                marker: 'img/map_markers/purple_MarkerA.png',
                latlong: new google.maps.LatLng(50.7977267,-1.0965045)
            };
var bk = {
                name: 'Buckingham Building',
				abbr: 'BK',
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
                latlong: new google.maps.LatLng(50.7951025,-1.096449)
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
				abbr: 'temp1-4',
                marker: 'img/map_markers/yellow_MarkerA.png',
                latlong: new google.maps.LatLng(50.7981235,-1.0982819)
            };	
var temp5to6 = {
                name: 'Temporary Teaching 5-6',
				abbr: 'temp5-6',
                marker: 'img/map_markers/yellow_MarkerB.png',
                latlong: new google.maps.LatLng(50.7978911,-1.0977066)
            };
// Define Food Outlets
var stgeorge_coffee = {
	name: 'St. George\'s Coffee Shop',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7916076,-1.1009676)
};
var library_coffee = {
	name: 'Library Coffee Shop',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7937997,-1.0981019)
};
var waterhole = {
	name: 'The Waterhole',
	marker: 'img/map_markers/blue_MarkerBar.png',
	latlong: new google.maps.LatLong(50.7951025,-1.096449)
};
var coco = {
	name: 'Cafe Coco',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7944753,-1.0963857)
};
var artscafe = {
	name: 'Eldon Arts Cafe',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7947319,-1.0909327)
};
var standrew_cafe = {
	name: 'St Andrew\'s Court Cafe',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7956584,-1.0949152)
};
var thirdspace = {
	name: '3rd Space',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7951025,-1.096449)
};
var park_coffee = {
	name: 'Park Coffee Shop',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7976506,-1.0942234)
};
var a901 = {
	name: '901 Internet Cafe',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7977267,-1.0965045)
};
var hub = {
	name: 'The Hub',
	marker: 'img/map_markers/blue_MarkerCoffee.png',
	latlong: new google.maps.LatLong(50.7977,-1.0981993)
};
			

//Building Arrays
var buildings = [a, bk, bb, bt, ds, el, ht, jwh, kh, lg, ml, pk, po, pd, rv, rb, ro, sb, sa, sg, sm, ub, ul, wbb, wb, temp1to4, temp5to6];

var teaching_buildings = [a, bk, bb, bt, ds, el, ht, jwh, kh, lg, ml, pk, po, pd, rv, rb, ro, sb, sa, sg, sm, ub, ul, wbb, wb, temp1to4, temp5to6];

var food_outlets = [stgeorge_coffee, library_coffee, waterhole, coco, artscafe, standrew_cafe, thirdspace, park_coffee, a901];

function buildingMarkers()
{
for (var i = 0; i < buildings.length; i++) {
	
	window["marker" + i] = new google.maps.Marker({
	  position: buildings[i].latlong,
	  map: map,
	  icon: buildings[i].marker,
	  draggable:false,
	  title: buildings[i].name
	});
}
}