function cwkRemind()
{
window.plugins.localNotification.add({
    fireDate        : Math.round(new Date().getTime()/1000 + 5),
    alertBody       : "This is a local notification.",
    action          : "View",
    repeatInterval  : "daily",
    soundName       : "beep.caf",
    badge           : 0,
    notificationId  : 123,
    foreground      : function(notificationId){ 
        alert("Hello World! This alert was triggered by notification " + notificationId); 
    },
    background  : function(notificationId){
        alert("Hello World! This alert was triggered by notification " + notificationId);
    }           
});

		  /*


 // prep some variables
  var startDate = new Date(2014,2,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
  var endDate = new Date(2014,2,15,19,30,0,0,0);
  var title = "My nice event";
  var location = "Home";
  var notes = "Some notes about this event.";
  var success = function(message) { alert("Success: " + JSON.stringify(message)); };
  var error = function(message) { alert("Error: " + message); };
  
  window.plugins.calendar.createEventInteractively(title,location,notes,startDate,endDate,success,error);

window.addcalendareventplugin(function(val){
        alert(val);   //once success message come and you have tested it, you can remove this alert.
    });
	*/
}