function directory() {
	//myip = '148.197.136.33'; //test on campus ip
	myip = '212.185.192.21'; //test off campus ip
	var cli_ip = myip.substr(0,7);
	if (cli_ip === '148.197')
	{
		var ref = window.open('http://sdtools.port.ac.uk/directory', '_blank', 'location=yes');         
    }
	else
	{
	var ref = window.open('main.html#directory', '_self');
	}
}