function cwkRemind()
{
alert("Manual01"); 
var d = new Date(); 
d = d.getTime() + 60*1000; //60 seconds from now 
d = new Date(d); 

alert("Manual02"); 
window.plugins.localNotification.add({ 
date: d, // your set date object 
message: 'Hello world!', 
repeat: 'weekly', // will fire every week on this day 
badge: 0, 
foreground:'foreground', 
background:'background' 
}); 

alert("Manual03"); 
}