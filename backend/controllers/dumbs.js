const router = require('express').Router();

router.get('/', async (_req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = router;