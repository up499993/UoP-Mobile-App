function directory() {
		alert("go");
         var ref = window.open('http://sdtools.port.ac.uk/directory', '_blank', 'location=yes', 'hidden=yes');
         ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { alert(event.type); });
    }
