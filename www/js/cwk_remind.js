function loadCwkReminders()
{
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
console.log (cwkNotifications.length);
if (cwkNotifications.length === 0)
{
}
else
{
for (var i = 0; i < cwkNotifications.length; i++) {
	document.querySelector('#cwkReminders').innerHTML = document.querySelector('#cwkReminders').innerHTML + "<div id='notification" + i + "'><p class='bold'>" + cwkNotifications[i].module + "</p>" + "<p>" + cwkNotifications[i].desc + "</p>" + "<p><span class='bold'>Notes:</span> " + cwkNotifications[i].notes + "</p><button onClick='cwkRemindCancel(" + i + ");'>Delete</button><hr /></div>";
   
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
window.plugin.notification.local.cancel(id);
alert("Removed Reminder");
}

function cwkRemindAdd ()
{
var cwkModule = $('#cwkModule').val();
var cwkDesc = $('#cwkDesc').val();

var message = cwkModule + ": " + cwkDesc;

var cwkNotifications = [];
cwkNotifications[0] = message;
localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);

var now                  = new Date().getTime(),
    _05_seconds_from_now = new Date(now + 05*1000);

window.plugin.notification.local.add({
    id:         1, // is converted to a string
    title:      'Reminder',
    message:    message,
    repeat:     'weekly',
    date:       _05_seconds_from_now,
    foreground: 'foreground',
    background: 'background'


});
cwkRemind();
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
alert("Local Storage Contains " + cwkNotifications.length + " items");
}
var cwkModule = $('#cwkModule').val();
var cwkDesc = $('#cwkDesc').val();
var cwkNotes = $('#cwkNotes').val();

var message = cwkModule + ": " + cwkDesc + ". " + cwkNotes;
var arrayPos = cwkNotifications.length;
alert("New Position: " + arrayPos);
//var cwkNotifications = [];
var addToArray = {
                notificationNo: arrayPos,
                message: message,
				module: cwkModule,
				desc: cwkDesc,
				notes: cwkNotes
            };
//var addToArray = [arrayPos, message];
alert("Write to Local Storage");
cwkNotifications.push(addToArray);
console.log(cwkNotifications);
localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);

var now                  = new Date().getTime(),
    _05_seconds_from_now = new Date(now + 05*1000);

window.plugin.notification.local.add({
    id:         1,
    title:      'CWK Reminder',
    message:    message,
    date:       _05_seconds_from_now,
    foreground: 'foreground',
    background: 'background'


});
cwkRemind();
function foreground (id) {
    console.log('I WAS RUNNING ID='+id)
}

function background (id) {
    console.log('I WAS IN THE BACKGROUND ID='+id)
}
}