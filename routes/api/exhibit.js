const router = require("express").Router();
const exhibitController = require("../../controllers/exhibitController")

router.route("/")
  .post(exhibitController.create);

module.exports = router