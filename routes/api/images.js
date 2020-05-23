const router = require("express").Router();
const imageController = require("../../controllers/imageController")

router.route("/upload")
 .post(imageController.uploadImageToS3);

 module.exports = router;