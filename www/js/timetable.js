function timetable()
{
$.ajax({
    url: 'http://proj.scottwalton.co.uk/json_proxy/ical.php?ics=http://timetable.myport.ac.uk/57C6D47B8C6C9E4F.ics',
    dataType: 'json',
    success: function( ical ) {
	console.log("Got JSON");
	console.log(ical);
	console.log(ical[0].DESCRIPTION);
	console.log(ical[0].DESCRIPTION.split("\\n"));
	
	for (var i = 0; i < ical.length; i++){
	ical[i].WEEK  = ical[i].DESCRIPTION.split("\\n")[1].substr(ical[i].DESCRIPTION.split("\\n")[1].indexOf(":") + 2);
	ical[i].BUILDING = ical[i].DESCRIPTION.split("\\n")[2].substr(ical[i].DESCRIPTION.split("\\n")[2].indexOf(":") + 2);
	ical[i].ROOM = ical[i].DESCRIPTION.split("\\n")[3].substr(ical[i].DESCRIPTION.split("\\n")[3].indexOf(":") + 3);
	ical[i].UNITSHORT = ical[i].DESCRIPTION.split("\\n")[4].substr(ical[i].DESCRIPTION.split("\\n")[4].indexOf(":") + 1);
	ical[i].UNIT = ical[i].DESCRIPTION.split("\\n")[5].substr(ical[i].DESCRIPTION.split("\\n")[5].indexOf(":") + 3);
	ical[i].TYPE = ical[i].DESCRIPTION.split("\\n")[6].substr(ical[i].DESCRIPTION.split("\\n")[6].indexOf(":") + 3);
	ical[i].GROUP = ical[i].DESCRIPTION.split("\\n")[7].substr(ical[i].DESCRIPTION.split("\\n")[7].indexOf(":") + 3);
	ical[i].LECTURER = ical[i].DESCRIPTION.split("\\n")[8].substr(ical[i].DESCRIPTION.split("\\n")[8].indexOf(":") + 2);
	
	console.log(ical[i]);
	}
	//var tt = JSON.parse(ical);
	//console.log(tt);
	}
	
	});
}

