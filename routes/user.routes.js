const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Respondiendo al get');
  console.log(req.body);
});

router.post('/', (req, res) => {
  res.send('Respondiendo al post');
});

router.put('/', (req, res) => {
  res.send('Respondiendo al put');
});

router.delete('/', (req, res) => {
  res.send('Respondiendo al delete');
});

module.exports = router;
