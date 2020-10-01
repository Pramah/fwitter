const router = require('express').Router();

// api prepended to everyroute

router.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = router;
