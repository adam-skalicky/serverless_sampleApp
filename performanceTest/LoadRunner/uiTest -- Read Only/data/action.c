Action()
{

	web_set_sockets_option("SSL_VERSION", "AUTO");

	web_add_auto_header("Sec-Fetch-Dest", 
		"document");

	web_add_auto_header("Sec-Fetch-Site", 
		"none");

	web_add_auto_header("Sec-Fetch-Mode", 
		"navigate");

	web_add_auto_header("DNT", 
		"1");

	web_add_header("Sec-Fetch-User", 
		"?1");

	web_add_header("Upgrade-Insecure-Requests", 
		"1");

	web_url("d2619n0lrdp3qq.cloudfront.net", 
		"URL=https://d2619n0lrdp3qq.cloudfront.net/", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t1.inf", 
		"Mode=HTML", 
		EXTRARES, 
		"Url=/static/js/2.94969f6a.chunk.js", ENDITEM, 
		"Url=/static/media/logo.5d5d9eef.svg", ENDITEM, 
		LAST);

	web_add_auto_header("Origin", 
		"https://d2619n0lrdp3qq.cloudfront.net");

	web_add_auto_header("Sec-Fetch-Dest", 
		"empty");

	web_add_auto_header("Sec-Fetch-Mode", 
		"cors");

	web_add_auto_header("Sec-Fetch-Site", 
		"cross-site");

	web_url("version", 
		"URL=https://tecigcc8s5.execute-api.us-east-2.amazonaws.com/master/services/version", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=https://d2619n0lrdp3qq.cloudfront.net/", 
		"Snapshot=t3.inf", 
		"Mode=HTML", 
		LAST);

	web_url("returnTableContents", 
		"URL=https://tecigcc8s5.execute-api.us-east-2.amazonaws.com/master/services/returnTableContents", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=https://d2619n0lrdp3qq.cloudfront.net/", 
		"Snapshot=t4.inf", 
		"Mode=HTML", 
		LAST);

	web_websocket_send("ID=0", 
		"Buffer={\"channel\":\"/meta/handshake\",\"version\":\"1.0\",\"supportedConnectionTypes\":[\"callback-polling\"]}", 
		"IsBinary=0", 
		LAST);

	return 0;
}