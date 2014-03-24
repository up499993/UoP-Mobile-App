function directory() {
myip= '212.185.192.21';
	var cli_ip = myip.substr(0,7);
	alert(cli_ip);
	if (cli_ip === '148.197')
	{
		var ref = window.open('http://sdtools.port.ac.uk/directory', '_blank', 'location=yes');         
    }
	else
	{
	var ref = window.open('main.html#directory', '_self');
	}
}