const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/', async (req, res) => {
    console.log('this is the one')
  try {
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
      
    });

    console.log("created comment", newComment);

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
