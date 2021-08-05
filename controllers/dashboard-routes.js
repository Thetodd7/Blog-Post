const router = require("express").Router();
const { Comment, Post } = require("../models");

// /dashboard routes
router.get("/", async (req, res) => {
  try {
    const uid = req.session.uid;
    const dbPostData = await Post.findAll({ where: { user_id: uid } });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    // TODO call helper to pull user info and display it on page
    res.render("all-posts-admin", { posts, layout: "dashboard.handlebars" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
