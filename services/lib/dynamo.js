const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();


const scanParams = async (params) => {
	console.log("Start scanParams");
	try {
		console.log("Scanning");
		return await dynamoDb.scan(params).promise(); // create message in db
	} catch (error) {
		console.log("Error caught quiriedParams");
		console.log(error);
		return {
			success: false,
			error
		};
	}
};
  
const deleteParams = async (params) => {
	// console.log('Start deleteParams');
	try {
		var deleteResponse = await dynamoDb.delete(params).promise(); // create message in db
		return { deleteResponse, status: "pass" };
	} catch (error) {
		console.log("Error caught deleteParams");
		console.log(error);
		return {
			success: false,
			error
		};
	}
};
  
const putParams = async (params) => {
	console.log("Start putParams");
	try {
		await dynamoDb.put(params).promise(); // create message in db
		console.log("Put Object");
		return {
			success: true
		};
	} catch (error) {
		console.log({error});
		console.log("Error caught putParams");
		console.log({params});
		var item = params.Item;
		console.log({item});

		return {
			success: false,
			error
		};
	}
};
  
const getParams = async (params) => {
	console.log("Start getParams");
	try {
		var data = await dynamoDb.get(params).promise();
		return data;
	} catch (error) {
		console.log("Error caught getParams");
		console.log(error);
		return {
			success: false,
			error
		};
	}
};
  
const updateParams = async (params) => {
	console.log("Start updateParams");
	try {
		var data = await dynamoDb.update(params).promise();
		return data;
	} catch (error) {
		console.log("Error caught updateParams");
		console.log(error);
		return {
			success: false,
			error
		};
	}
};
  
const queryParams = async (params) => {
	console.log("Start queryParams");
	try {
		var data = await dynamoDb.query(params).promise();
		return data;
	} catch (error) {
		console.log("Error caught queryParams");
		console.log(error);
		return {
			success: false,
			error
		};
	}
};
module.exports.handleParams = async (params, method) => {
	if (method === "scan") {
		return await scanParams(params);
	}
	if (method === "delete") {
		return await deleteParams(params);
	}
	if (method === "put") {
		return await putParams(params);
	}
	if (method === "get") {
		return await getParams(params);
	}
	if (method === "update") {
		return await updateParams(params);
	}
	if (method === "query") {
		return await queryParams(params);
	}
};


  