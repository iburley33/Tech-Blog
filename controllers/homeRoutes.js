const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await Blog.findAll({
      include: [{model: User, attributes: ['name']}],
      order: [['date_created', 'DESC']],
    });

    const blogs = userData.map((project) => project.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.err(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/newuser', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('createaccount');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.err(err);
    res.status(500).json(err);
  }
});


module.exports = router;
