const { Model } = require("sequelize");
const { User } = require("../../models/User");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("contactMe");
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      res.status(200).json(userData);
    });
    console.log(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
