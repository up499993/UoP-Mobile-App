function cwkRemind()
{
}

function cwkRemindCancelAll()
{
window.plugin.notification.local.cancelAll();
}

function cwkRemindCancel(id)
{
window.plugin.notification.local.cancel(id);
}

function cwkRemindAdd ()
{
var cwkModule = $('#cwkModule').val();
var cwkDesc = $('#cwkDesc').val();

var message = cwkModule + ": " + cwkDesc;
alert(message);

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

function foreground (id) {
    console.log('I WAS RUNNING ID='+id)
}

function background (id) {
    console.log('I WAS IN THE BACKGROUND ID='+id)
}
}