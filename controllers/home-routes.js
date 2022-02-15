const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, Comment, QaSuper, QaAgent } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "post_id",
          "user_id",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)"
            ),
            "like_count",
          ],
        ],
        include: {
          model: QaSuper,
          QaAgent,
          attributes: ["username"],
        },
      },
      {
        model: QaSuper,
        QaAgent,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/posts/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "post_id",
          "user_id",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)"
            ),
            "like_count",
          ],
        ],
        include: {
          model: QaSuper,
          QaAgent,
          attributes: ["username"],
        },
      },
      {
        model: QaSuper,
        QaAgent,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
