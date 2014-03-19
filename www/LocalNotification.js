var LocalNotification = function() {
};

LocalNotification.prototype.add = function(options) {
    var defaults = {
            
            fireDate        : new Date(new Date().getTime() + 5000),
            alertBody       : "This is a local notification.",
            action			: 'View',
            repeatInterval  : "" ,
            soundName       : "beep.caf" ,
            badge           : 0  ,
            notificationId  : 1  ,
            background      : function(notificationId){},
            foreground      : function(notificationId){}                
        };
            
        if(options){
            for (var key in defaults) {
                if (typeof options[key] !== "undefined"){
                defaults[key] = options[key];
                }
            }
        }
        
        if (typeof defaults.fireDate == 'object') {
            defaults.fireDate = Math.round(defaults.fireDate.getTime()/1000);
        }
            
        cordova.exec(
            function(params) {
                window.setTimeout(function(){
                    if(typeof defaults.foreground == 'function'){
                      if(params.appState == "active") {
                        defaults.foreground(params.notificationId);
                        return;
                      }
                    }
                    if(typeof defaults.background == 'function'){
                      if(params.appState != "active") {
                        defaults.background(params.notificationId);
                        return;
                      }
                    }
                }, 1);
            }, 
            null, 
            "LocalNotification" , 
            "addNotification"   , 
            [
                defaults.fireDate        ,
                defaults.alertBody       ,
                defaults.action       ,
                defaults.repeatInterval  ,
                defaults.soundName       ,
                defaults.notificationId,
                defaults.badge
            ]
        );

};

LocalNotification.prototype.setBadgeNumber =  function(badgeNumber, callback) {
	cordova.exec(callback, null, "LocalNotification", "setBadgeNumber", [badgeNumber]);
};

LocalNotification.prototype.cancel =  function(str, callback) {
	cordova.exec(callback, null, "LocalNotification", "cancelNotification", [str]);
};

LocalNotification.prototype.cancelAll = function(callback) {
	cordova.exec(callback, null, "LocalNotification", "cancelAllNotifications", []);
};

module.exports = new LocalNotification();