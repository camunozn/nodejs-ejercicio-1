const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esto es un GET a users desde mi servidor');
});

router.post('/', (req, res) => {
  const doc = req.body;
  res.json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

module.exports = router;
