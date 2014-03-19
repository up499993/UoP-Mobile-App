function cwkRemind()
{
var now                  = new Date().getTime(),
    _60_seconds_from_now = new Date(now + 60*1000);

window.plugin.notification.local.add({
    id:         1, // is converted to a string
    title:      'Reminder',
    message:    'Dont forget to buy some flowers.',
    repeat:     'weekly',
    date:       _60_seconds_from_now,
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