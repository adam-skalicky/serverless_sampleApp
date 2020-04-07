const AWS = require('aws-sdk')
const sns = new AWS.SNS({
    region: process.env.region
  });

  module.exports.simpleSNSPublish = async (data) => {
    const messageAttributes = {
      subscriber: {
        DataType: 'String',
        StringValue: data.subscriber
      },
      publishType: {
        DataType: 'String',
        StringValue: 'createNew'
      }
    };
    console.log(`arn:aws:sns:${process.env.region}:${process.env.accountId}:${process.env.stage}-sampleApp`);
    const params = {
      Message: JSON.stringify(data), // data is the message payload
      MessageAttributes: messageAttributes,
      TopicArn: `arn:aws:sns:${process.env.region}:${process.env.accountId}:${process.env.stage}-sampleApp`
    };
    return sns.publish(params).promise();
  };