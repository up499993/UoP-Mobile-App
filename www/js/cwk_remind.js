function loadCwkReminders()
{
document.querySelector('#cwkReminders').innerHTML = "";
// Check to see if variable exists and create if necessary
alert("Is cwkNotifications variable defined?");
if (typeof cwkNotifications === 'undefined') {
    // variable is undefined
	var cwkNotifications = [];
	alert("No");
}
alert("Yes");

// Check to see if localStorage key exists
alert("LocalStorage key?");
if (localStorage.getItem("cwkNotifications") === null) {
	alert("No");
  localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);
  document.querySelector('#cwkReminders').innerHTML = "There are no Coursework Reminders to Display";
  alert("Is Now");
}
else
{
alert("Yes");
var cwkNotifications = JSON.parse(localStorage["cwkNotifications"]);
alert ("Length " + cwkNotifications.length);
if (cwkNotifications.length === 0)
{
document.querySelector('#cwkReminders').innerHTML = "There are no Coursework Reminders to Display";
}
else
{
alert("Start loop");
for (var i = 0; i < cwkNotifications.length; i++) {
	document.querySelector('#cwkReminders').innerHTML = document.querySelector('#cwkReminders').innerHTML + "<div id='notification" + i + "'><p class='bold'>" + cwkNotifications[i].module + "</p>" + "<p>" + cwkNotifications[i].desc + "</p>" + "<p><span class='bold'>Notes:</span> " + cwkNotifications[i].notes + "</p><p>Due: " + cwkNotifications[i].when + "</p><button cless='ui-btn ui-shadow ui-corner-all' onClick='cwkRemindCancel(" + i + ");'>Delete</button><hr /></div>";
   
}
}
}
}

function cwkRemindCancelAll()
{
window.plugin.notification.local.cancelAll();
alert("Removed all Notifications");
}

function cwkRemindCancel(id)
{
console.log("id: " + id);
console.log("localstorage: " + localStorage.cwkNotifications);
var cwkNotifications = JSON.parse(localStorage["cwkNotifications"]);
console.log("JSON parse: " + cwkNotifications);
console.log("Alert " + id + ": " + cwkNotifications[id]);
cwkNotifications.splice(id, 1);
localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);
console.log("localstorage: " + localStorage.cwkNotifications);

window.plugin.notification.local.cancel(id);
alert("Removed Reminder");
loadCwkReminders();
}

function cwkRemindAdd ()
{var cwkNotifications = JSON.parse(localStorage["cwkNotifications"]);
alert("Local Storage Contains " + cwkNotifications.length + " items");

var cwkModule = $('#cwkModule').val();
var cwkDesc = $('#cwkDesc').val();
var cwkNotes = $('#cwkNotes').val();

var message = cwkModule + ": " + cwkDesc + ". " + cwkNotes;
var arrayPos = cwkNotifications.length;
alert("New Position: " + arrayPos);

var cwkDate = $('#cwkDate').val();
var cwkTime = $('#cwkTime').val();
var cwkDateTime = new Date(cwkDate+' '+cwkTime);
alert("When? " + cwkDateTime);
//var cwkNotifications = [];
var addToArray = {
                notificationNo: arrayPos,
                message: message,
				module: cwkModule,
				desc: cwkDesc,
				notes: cwkNotes,
				when: cwkDateTime
            };
alert("Write to Local Storage");
cwkNotifications.push(addToArray);
console.log(cwkNotifications);
localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);

loadCwkReminders();

window.plugin.notification.local.add({
    id:         arrayPos,
    title:      'CWK Reminder',
    message:    message,
	repeat:		1,
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
}

//  T E S T I N G
function test()
{
var now                  = new Date().getTime(),
    _05_seconds_from_now = new Date(now + 05*1000);

console.log("now: " + now);
console.log("5sec: " + _05_seconds_from_now);

var cwkDate = $('#cwkDate').val();
var cwkTime = $('#cwkTime').val();
console.log("cwkDate: " + cwkDate);
console.log("cwkTime: " + cwkTime);
var cwkDateTime = new Date(cwkDate+' '+cwkTime);
console.log("cwkDateTime: " + cwkDateTime);

}