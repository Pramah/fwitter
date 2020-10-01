const router = require('express').Router();

const userRoutes = require('./userRoutes');
// api prepended to everyroute

router.use('/users', userRoutes);
module.exports = router;
