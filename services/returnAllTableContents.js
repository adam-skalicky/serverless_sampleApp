const libDynamo = require("./lib/dynamo");


module.exports.returnAllTableContents = async (event) => {
    var paramsScan = { //Defines parameters for scan (scan used to determine list of items for deletion)
        TableName: `${process.env.stage}-sampleApp`
    };
    console.log({paramsScan});
    var scanResponse = await libDynamo.handleParams(paramsScan, "scan"); //executes scan and saves as var for subsequent deletion.
    console.log({scanResponse});
    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(scanResponse.Items)
      };
}