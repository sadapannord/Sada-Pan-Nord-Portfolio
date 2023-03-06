const { Model } = require("sequelize");
const { User } = require("../User");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("contactMe");
});

router.post("/contactMe", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;