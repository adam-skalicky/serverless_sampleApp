const libSNS = require('./lib/sns');
module.exports.queueRecordPurge = async () => {
    await libSNS.simpleSNSPublish({"purgeQueue": true, "subscriber": "purgeQueue"});
    const response = JSON.stringify({ "jobQueued": true });
    return {             
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 200, 
      body: response 
    };
}