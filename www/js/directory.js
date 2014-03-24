function directory() {
	var cli_ip = myip.substr(0,7);
	alert(cli_ip);
	if (cli_ip === '148.197')
	{
		var ref = window.open('http://sdtools.port.ac.uk/directory8', '_blank', 'location=yes');         
    }
	else
	{
	alert("Only Available when on campus");
	}
