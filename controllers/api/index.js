const router = require("express").Router();

const req = require("express/lib/request");
const empRoutes = require("./employee-routes");
const qaRoutes = require("./qaAgent-routes");
const qaSupRoutes = require("./qaSup-routes");
// const commentRoutes = require("./comment-routes");
// const postRoutes = require("./post-routes");

router.use("/employees", empRoutes);
router.use("/qa", qaRoutes);
// router.use("/comments", commentRoutes);
// router.use("/posts", postRoutes);
router.use("/qasup", qaSupRoutes);

module.exports = router;
