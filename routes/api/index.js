const router = require("express").Router();
const userRoutes = require("./user");
const imagesRoutes = require("./images");
const exhibitRoutes = require("./exhibits")

router.use("/user", userRoutes);

router.use("/images", imagesRoutes);

router.use("/exhibit", exhibitRoutes)
module.exports = router;
