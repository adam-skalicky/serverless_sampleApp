const libDynamo = require("./lib/dynamo");
const uuidv4 = require("uuid/v4");

module.exports.addRecord = async (event) => {
    var startTime = Date.now(); 
    var body = JSON.parse(event.body);
    var dateObject= JSON.stringify(new Date())
    var date = JSON.parse(dateObject)
    var recordID = uuidv4();
    var name = body.name;
    var Item = {
        recordID,
        date,
        name
    } 
    var paramsPut = { 
        Item,
        TableName: `${process.env.stage}-sampleApp`,
    };
    console.log({paramsPut})
    var putResponse = await libDynamo.handleParams(paramsPut, "put"); //executes scan and saves as var for subsequent deletion.
    if (putResponse.success === true) {
        var endTime = Date.now(); 
        var totalTime = endTime - startTime
        Item.duration = totalTime
        return {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(Item)
          };
    } else {
        return {
            statusCode: 500,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({error: true})
          };
    }
    
}