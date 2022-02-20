const router = require('express').Router();

const req = require('express/lib/request');
const empRoutes = require('./employee-routes');
const qaRoutes = require('./qaAgent-routes');
const qaSupRoutes = require('./qaSup-routes');
const postRoutes = require('./post-routes');
const empSupRoutes = require('./empSup-routes');
const formRoutes = require('./employeeform-routes');

router.use('/employees', empRoutes);
router.use('/qa', qaRoutes);
router.use('/posts', postRoutes);
router.use('/qasup', qaSupRoutes);
router.use('/supervisors', empSupRoutes);
router.use('/form', formRoutes);

module.exports = router;
