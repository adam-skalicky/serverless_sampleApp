version()
{
		web_url("version", 
		"URL=https://{svchost}/{env}/services/version", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=https://{uihost}/",  
		"Mode=HTML", 
		LAST);
	return 0;
}
