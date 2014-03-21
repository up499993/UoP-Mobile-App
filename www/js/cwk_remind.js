function loadCwkReminders()
{
document.querySelector('#cwkReminders').innerHTML = "";
// Check to see if variable exists and create if necessary
if (typeof cwkNotifications === 'undefined') {
    // variable is undefined
	var cwkNotifications = [];
}

// Check to see if localStorage key exists
if (localStorage.getItem("cwkNotifications") === null) {
  localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);
  document.querySelector('#cwkReminders').innerHTML = "There are no Coursework Reminders to Display";
}
else
{
var cwkNotifications = JSON.parse(localStorage["cwkNotifications"]);
if (cwkNotifications.length === 0)
{
document.querySelector('#cwkReminders').innerHTML = "There are no Coursework Reminders to Display";
}
else
{
for (var i = 0; i < cwkNotifications.length; i++) {
	document.querySelector('#cwkReminders').innerHTML = document.querySelector('#cwkReminders').innerHTML + "<div id='notification" + i + "'><p class='bold'>" + cwkNotifications[i].module + "</p>" + "<p>" + cwkNotifications[i].desc + "</p>" + "<p><span class='bold'>Notes:</span> " + cwkNotifications[i].notes + "</p><p><span class='bold'>Due:</span> " + cwkNotifications[i].date + " " + cwkNotifications[i].time + "</p><button cless='ui-btn ui-shadow ui-corner-all' onClick='cwkRemindCancel(" + i + ");'>Delete</button><hr /></div>";
   
}
}
}
}

function cwkRemindCancel(id)
{
var cwkNotifications = JSON.parse(localStorage["cwkNotifications"]);
cwkNotifications.splice(id, 1);
localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);

window.plugin.notification.local.cancel(id);
loadCwkReminders();
}

function cwkRemindAdd ()
{var cwkNotifications = JSON.parse(localStorage["cwkNotifications"]);

var cwkModule = $('#cwkModule').val();
var cwkDesc = $('#cwkDesc').val();
var cwkNotes = $('#cwkNotes').val();
var cwkDate = $('#cwkDate').val();
var cwkTime = $('#cwkTime').val();
if (cwkNotes === ""){cwkNotes = "None";}

var message = cwkModule + ": " + cwkDesc + ". Notes: " + cwkNotes + ". This is due on " + cwkDate + " at " + cwkTime;
var arrayPos = cwkNotifications.length;


var cwkDateTime = new Date(cwkDate+' '+cwkTime);

var month = cwkDateTime.getMonth()+1;
var day = cwkDateTime.getDate();
var year = cwkDateTime.getFullYear();
var cwkDateStored = day + "/" + month + "/" + year;
var addToArray = {
                notificationNo: arrayPos,
                message: message,
				module: cwkModule,
				desc: cwkDesc,
				notes: cwkNotes,
				date: cwkDateStored,
				time: cwkTime
            };
cwkNotifications.push(addToArray);
localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);

loadCwkReminders();

window.plugin.notification.local.add({
    id:         arrayPos,
    title:      'CWK Reminder',
    message:    message,
    date:       cwkDateTime,
    foreground: 'foreground',
    background: 'background'


});
function foreground (id) {
    console.log('I WAS RUNNING ID='+id)
}

function background (id) {
    console.log('I WAS IN THE BACKGROUND ID='+id)
}

document.querySelector('#cwkModule').value = "";
document.querySelector('#cwkDesc').value = "";
document.querySelector('#cwkNotes').value = "";

document.querySelector('#cwkDate').value = "";
document.querySelector('#cwkTime').value = "";
}