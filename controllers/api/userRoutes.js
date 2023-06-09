const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  console.log("creating new user...");
  try {
    const userData = await User.create(req.body);

    console.log("got here");

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/logout", (req, res) => {
  console.log("logging out...");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.render('login');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
