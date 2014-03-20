function timetable()
{
$.ajax({
    url: 'http://proj.scottwalton.co.uk/json_proxy/ical.php?ics=http://timetable.myport.ac.uk/57C6D47B8C6C9E4F.ics',
    dataType: 'json',
    success: function( ical ) {
	console.log("Got JSON");
	
	// Extract info from Description
	for (var i = 0; i < ical.length; i++){
	ical[i].WEEK  = ical[i].DESCRIPTION.split("\\n")[1].substr(ical[i].DESCRIPTION.split("\\n")[1].indexOf(":") + 2);
	ical[i].BUILDING = ical[i].DESCRIPTION.split("\\n")[2].substr(ical[i].DESCRIPTION.split("\\n")[2].indexOf(":") + 2);
	ical[i].ROOM = ical[i].DESCRIPTION.split("\\n")[3].substr(ical[i].DESCRIPTION.split("\\n")[3].indexOf(":") + 3);
	ical[i].UNITSHORT = ical[i].DESCRIPTION.split("\\n")[4].substr(ical[i].DESCRIPTION.split("\\n")[4].indexOf(":") + 1);
	ical[i].UNIT = ical[i].DESCRIPTION.split("\\n")[5].substr(ical[i].DESCRIPTION.split("\\n")[5].indexOf(":") + 3);
	ical[i].TYPE = ical[i].DESCRIPTION.split("\\n")[6].substr(ical[i].DESCRIPTION.split("\\n")[6].indexOf(":") + 3);
	ical[i].GROUP = ical[i].DESCRIPTION.split("\\n")[7].substr(ical[i].DESCRIPTION.split("\\n")[7].indexOf(":") + 3);
	ical[i].LECTURER = ical[i].DESCRIPTION.split("\\n")[8].substr(ical[i].DESCRIPTION.split("\\n")[8].indexOf(":") + 2);
	}
	
	//Build table
	document.querySelector('#persTimeTable').innerHTML = "<table border='0' cellpadding='0' cellspacing='0' class='uopTable timetable' title='Events for Student to Attend'> <colgroup> <col width='11%'> <col width='39%'> <col width='10%'> <col width='10%'> <col width='10%'> <col width='10%'> <col width='10%'> </colgroup> <tbody> ";
	document.querySelector('#persTimeTable tbody').innerHTML = document.querySelector('#persTimeTable').innerHTML + "<tr class='subtitle'> <th>Date</th> <th>Unit</th> <th>Times</th> <th>Group</th> <th>Lecturer</th> <th>Type</th> <th>Room</th> </tr> </tbody> </table>";
	
	for (var i = 0; i < ical.length; i++) {
		//turn DTSTART into a start date time
		var DTSTART = ical[i].DTSTART;
		var start_yr = DTSTART.substring(0,4);
		var start_mo = DTSTART.substring(4,6);
		var start_da = DTSTART.substring(6,8);
		var start_hr = DTSTART.substring(9,11);
		var start_mi = DTSTART.substring(11,13);
		var start_se = DTSTART.substring(13,15);
		var dateStart = new Date(start_yr + '-' + start_mo + '-' + start_da + "T" + start_hr + ":" + start_mi + ":" + start_se)
		
		//turn DTEND into an end date time
		var DTEND = ical[i].DTEND;
		var end_yr = DTSTART.substring(0,4);
		var end_mo = DTSTART.substring(4,6);
		var end_da = DTSTART.substring(6,8);
		var end_hr = DTSTART.substring(9,11);
		var end_mi = DTSTART.substring(11,13);
		var end_se = DTSTART.substring(13,15);
		var dateEnd = new Date(end_yr + '-' + end_mo + '-' + end_da + "T" + end_hr + ":" + end_mi + ":" + end_se)
		
		// Format Day, Month and st, nd, rd, th
		var weekday=new Array(7);
		weekday[0]="Sun";
		weekday[1]="Mon";
		weekday[2]="Tue";
		weekday[3]="Wed";
		weekday[4]="Thu";
		weekday[5]="Fri";
		weekday[6]="Sat";
		var month=new Array(12);
		month[1]="Jan";
		month[2]="Feb";
		month[3]="Mar";
		month[4]="Apr";
		month[5]="May";
		month[6]="Jun";
		month[7]="Jul";
		month[8]="Aug";
		month[9]="Sep";
		month[10]="Oct";
		month[11]="Nov";
		month[12]="Dec";
		function get_nth_suffix(date) {
			switch (date) {
			case 1:
			case 21:
			case 31:
				return 'st';
			case 2:
			case 22:
				return 'nd';
			case 3:
			case 23:
				return 'rd';
			default:
				return 'th';
			}
		}

		//add event to table
		document.querySelector('#persTimeTable tbody').innerHTML = document.querySelector('#persTimeTable').innerHTML + "<tr> <td>" +  weekday[dateStart.getDay()] + " " +  dateStart.getDay() + get_nth_suffix(dateStart.getDay()) + " " +  month[dateStart.getMonth()]+ "</td> <td>" + ical[i].UNIT + "</td> <td nowrap='nowrap'>" + start_hr + ":" + start_mi + " - " + end_hr + ":" + end_mi + "</td> <td>" + ical[i].GROUP + "</td> <td>" + ical[i].LECTURER + "</td> <td>" + ical[i].TYPE + "</td> <td>" + ical[i].ROOM + "</td> </tr>";
		
	}
	
	}
	
	});
}

