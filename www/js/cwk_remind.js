function cwkRemind()
{
//var cwkNotifications = [];
//cwkNotifications[0] = message;
//localStorage["cwkNotifications"] = JSON.stringify(cwkNotifications);

//...
alert("Reading");
var cwkNotificationsStorred = JSON.parse(localStorage["cwkNotifications"]);

alert(cwkNotificationsStorred);
}

function cwkRemindCancelAll()
{
window.plugin.notification.local.cancelAll();
alert("Removed all Notifications");
}

function cwkRemindCancel(id)
{
window.plugin.notification.local.cancel(id);
alert("Removed Notification");
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