const libDynamo = require("./lib/dynamo");

const deleteRecords = async () => {
	const paramsScan = { //Defines parameters for scan (scan used to determine list of items for deletion)
        TableName: `${process.env.stage}-sampleApp`,
	};
	const scanResponse = await libDynamo.handleParams(paramsScan, "scan"); //executes scan and saves as var for subsequent deletion.
	const scanResponseArray = scanResponse.Items; //Result return as object named "Items" with an array of records, this decends into the object
	var deleteReponse = []; //defines var delete response, will be added to as objects are deleted.
	const promises = scanResponseArray.map(async (item) => { //Loops through array from scan and executes delete operation.
		const recordID = item.recordID;
		const paramDelete = { //defines pararms for delete action
			Key: {
				recordID
			},
			TableName: `${process.env.stage}-sampleApp`
		};
		const deleteParamsResponse = await libDynamo.handleParams(paramDelete, "delete"); //executes delete
		deleteReponse.push({ deleteSuccess: deleteParamsResponse.status, recordID }); //logs delete for http return
	});
	await Promise.all(promises);
	return deleteReponse; //returns records deleted.
};

module.exports.purgeRecords = async () => {
	var startTime = Date.now(); 
	const deleteResponse = await deleteRecords();
	const deletedRecordCount = deleteResponse.length;
	const endTime = Date.now(); // Epoch in MS
	const executionTimeMS = endTime - startTime;
	const response = JSON.stringify({ executionTimeMS, deletedRecordCount });
	return { statusCode: 200, body: response };

};
