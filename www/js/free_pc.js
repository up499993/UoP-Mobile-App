function freePC() {
var url = "http://proj.scottwalton.co.uk/json_proxy/oa.php";
    $.getJSON(url, function(oa) {
             console.log(oa.Library);
			 console.log(oa.Park);
             console.log(oa.Burnaby);
			 console.log(oa.Anglesea);
          });

//For Testing with Dummy Data
/*		  
var jsonOA = generateDummyData();
var OA = JSON.parse(jsonOA);

*/

 }
 
// Generate Dummy JSON for testing
function generateDummyData(){
// Define Objects

// Statuses : 1 = Closed, 2 = Open (Green), 3 = Open (Amber), 4 = Open (Red)
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