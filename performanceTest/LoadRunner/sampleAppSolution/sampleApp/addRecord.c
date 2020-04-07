addRecord()
{

	web_custom_request("addRecord", 
		"URL=https://{svchost}/{env}/services/addRecord", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=https://{uihost}/", 
		"Mode=HTML", 
		"EncType=text/plain;charset=UTF-8", 
		"Body={\"name\":\"{jsonName}\"}", 
		LAST);


	return 0;
}