const router = require("express").Router();
const userRoutes = require("./user");
const imagesRoutes = require("./images");

router.use("/user", userRoutes);

router.use("/images", imagesRoutes);
module.exports = router;
