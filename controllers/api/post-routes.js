const router = require("express").Router();
const { Post, QaSuper } = require("../../models");

router.get("/", (req, res) => {
    Post.findAll({
            attributes: ["id", "post_text", "created_at"],
            include: [{
                model: QaSuper,
                attributes: ["username"],
            }, ],
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/:id", (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "post_text", "created_at"],
            include: [{
                model: QaSuper,
                attributes: ["username"],
            }, ],
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    if (req.session) {
        Post.create({

                post_text: req.body.post_text,
            })
            .then((dbPostData) => res.json(dbPostData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

router.put("/:id", (req, res) => {
    Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
    Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;