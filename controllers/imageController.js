// const AWS = require('aws-sdk');


// const {uuid} = require('uuidv4')
// const config = require("../config")

// AWS.config.update(config.awsConfig)
// const s3 = new AWS.S3();




// const s3Data = {Bucket: 'louvr3d', Key: "1", Body: Blob};
// s3.upload(s3Data, function(err, data){
//     console.log(err, data)
// })

// function uploadToS3(req, res){
//     req.s3Key = uuid();
//     console.log(req);
//     let downloadURL = `https://s3-${config.awsConfig.region}.amazonaws.com/louvr3d/${req.s3Key}`
//     return new Promise((resolve, reject) => {
//             return singleFileUpload(req, res, err => {
//                 if(err) return reject(err);
//                 return resolve(downloadURL)
//             })
//     })


// }
       
module.exports = {
    
}