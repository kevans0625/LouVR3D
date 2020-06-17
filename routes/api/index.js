const router = require("express").Router();
const userRoutes = require("./user");
const imagesRoutes = require("./images");
const exhibitRoutes = require("./exhibit")
const db = require("../../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const auth = require("../../middleware/auth")

router.use("/user", userRoutes);

router.use("/images", imagesRoutes);

router.use("/exhibit", exhibitRoutes)

router.post("/login", async function(req, res) {
  try {
    const {username, password } = req.body;
    // validate
    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await db.User.findOne({username:username });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

//     const favorites = await db.Exhibit.findAll({userID:user._id});
// console.log(favorites)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
    console.log(token)
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message)
  }
});

router.post("/tokenIsVerified", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await db.User.findById(verified.id);
    if (!user) return res.json(false);
  const favorites = await db.Exhibit.findAll({userid:verified.id});
    console.log("favorites" + favorites)
    return res.json(true, favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/validUser", auth, async (req, res) => {
  const user = await db.User.findById(req.user);
  res.json({
    id: user._id,
    username: user.username,
    avatar: user.avatar,
    age: user.age,
    bio: user.bio,
    tagline: user.tagline
  });
});

module.exports = router;
