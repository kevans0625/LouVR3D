const router = require("express").Router();
const imageController = require("../../controllers/imageController")

router.route("/api/uploadImages")
 .post(imageController.uploadImageToS3);
module.exports = router