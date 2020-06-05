require("dotenv").config();
const express = require("express");
const router = express.Router();
const IMAGE = require("../../models/images");
const multer = require("multer");
var AWS = require("aws-sdk");
var storage = multer.memoryStorage();
var upload =multer({ storage: storage });

router.route("/").get((req, res, next) => {
    IMAGE.find(
    {}, 
    null,
    {
        sort: { createdAt: 1 }
    },
    (err, imgs) => {
        if (err) {
            return next(err);
        }
        res.status(200).send(imgs);
    }
    );
});

router.route("/:id").get((req, res, next) => {
    IMAGE.findById(req.params,id, (err, go) => {
        if (err) {
            return next(err);
        }
        res.json(go);
    });
});

router.post("/upload", upload.single("image"), function(req, res) {
    const file = req.file;
    const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;
    let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    // console.log(process.env.AWS_ACCESS_KEY_ID);
    // console.log(process.env.AWS_SECRET_ACCESS_KEY);
    
    var params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer, 
        ContentType: file.mimetype,
        ACL: "public-read"
    };

    s3bucket.upload(params, function(err, data) {
        if (err) {
            res.status(500).json({ error: true, Message: err })
        } else {
            res.send({ data});
            var newFileUploaded = {
                description: req.body.description, 
                fileLink: s3FileURL + file.originalname, 
                s3_key: params.Key
            };
            console.log("Success! Your image has been uploaded to the LouVR3d bucket!")
            var image = new IMAGE(newFileUploaded);
            image.save(function(err, newFile) {
                if (err) {
                    throw err; 
                }
            });
        }
    });
});

router.route("/edit/:id").put((req, res, next) => {
    IMAGE.findByIdAndUpate(
        req.params.id, 
        { $set: { description: Object.keys(req.body)[0] } }, 
        { new: true },
        (err, updateImg) => {
            if (err) {
                return next(err);
            }
            res.status(200).send(updateImg);
        }
    );
});

router.route("/:id").delete((req, res, next) => {
    IMAGE.findByIdAndRemove(
        req.params.id, 
        (err, result) => {
            if (err) {
                return next(err);
            }
            let s3bucket = new AWS.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION
            });

            let params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: file.s3_key
            };

            s3bucket.deleteObject(params, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({
                        status: "200",
                        responseType: "string",
                        response: "sucess"
                    });
                }
            });
        }
    );
});

module.exports = router;