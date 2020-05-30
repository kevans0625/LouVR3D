const router = require("express").Router();
const imageController = require("../../controllers/imageController");
const AWS = require('aws-sdk');
const config = require("../../config")

AWS.config.update(config.awsConfig)
const s3 = new AWS.S3();


router.route("/upload")
 .post((req, res) => {
     {console.log(req)}
    const s3Data = {Bucket: 'louvr3d', Key: '1', Body: req.body};
s3.upload(s3Data, function(err, data){
    console.log(err, data)

})
 });

 module.exports = router;