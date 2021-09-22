
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const upload = async () => {
    const params = {
        ACL: "public-read",
        Body: "hello world",
        ContentType: "text/html",
        Bucket: "cmd-client-bucket",
        Key: "testfile.txt"
    }
    s3.putObject(params, (err, results) => {
        if(error) reject(err);
        else resolve(results);
    });
    // return await new Promise((resolve, reject) =>{
    //     s3.putObject(params, (err, results) => {
    //         if(error) reject(err);
    //         else resolve(results);
    //     });
    // });
};
exports.handler = async (event) => {
    // TODO implement
    console.log(event.body["patientInfo"]);
    console.log(event.body["address"]);
    console.log(event.body["demographics"]);
    console.log(event.body["referralInfo"]);
    console.log(event.body["insuranceInfo"]);
    upload();
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers' : 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'
         
     }, 
        body: JSON.stringify("Successful"),
    };
    return response;
};