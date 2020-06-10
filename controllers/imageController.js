const AWS = require('aws-sdk');
const multer = require('multer'); 
const multerS3 = require('multer-s3')
const {uuid} = require('uuidv4')
const config = require("../client/src/config")
AWS.config.update(config.awsConfig)
const s3 = new AWS.S3();

var upload = multer({
    storage: multerS3({
      s3,
      bucket: 'louvr3d',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null,req.s3Key)
      }
    })
})
const singleFileUpload = upload.single('image');
function uploadToS3(req, res){
    req.s3Key = uuid();
    console.log(req);
    let downloadURL = `https://s3-${config.awsConfig.region}.amazonaws.com/louvr3d/${req.s3Key}`
    console.log(downloadURL)
    return new Promise((resolve, reject) => {
            return singleFileUpload(req, res, err => {
                if(err) return reject(err);
                return resolve(downloadURL)
            })
    })
}
module.exports = {
    uploadImageToS3: (req, res) => {
        uploadToS3(req, res)
        .then(downloadUrl => {
            console.log(downloadUrl);
            return res.status(200).send({downloadUrl})
        })
        .catch(e =>{
            console.log(e)
        })
    }
}