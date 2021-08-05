const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");
// /api/post routes

router.post("/", async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete post by its id value
  console.log("deleting post");
  try {
    const destroy = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      msg: `Destroyed Post ${req.params.id}`,
      response: destroy,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

