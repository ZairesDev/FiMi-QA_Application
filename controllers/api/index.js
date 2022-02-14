const router = require("express").Router();

const empRoutes = require("./employee-routes");
const qaRoutes = require("./qaAgent-routes");
// const commentRoutes = require("./comment-routes");
// const postRoutes = require("./post-routes");

router.use("/employees", empRoutes);
router.use("/qa", qaRoutes);
// router.use("/comments", commentRoutes);
// router.use("/posts", postRoutes);

module.exports = router;
