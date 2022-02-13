const router = require("express").Router();

const csrRoutes = require("./callspecialist-routes");
const euRoutes = require("./escalationUnit-routes");
const qaRoutes = require("./qaAgent-routes");
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");

router.use("/csr", csrRoutes);
router.use("/eu", euRoutes);
router.use("/qa", qaRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
