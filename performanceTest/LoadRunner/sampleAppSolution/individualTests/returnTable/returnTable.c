returnTable()
{
		web_url("returnTableContents", 
		"URL=https://{svchost}/{env}/services/returnTableContents", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=https://{uihost}/", 
		"Mode=HTML", 
		LAST);
	return 0;
}
