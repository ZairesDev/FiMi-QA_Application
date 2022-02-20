const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');

const dashboardRoutes = require('./dashboard-routes.js');
// const formRoutes = require("./employeeform-routes");
const searchRoutes = require('./search-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
// router.use("/form", formRoutes);
router.use('/search', searchRoutes);

module.exports = router;
