const express = require('express');
const router = express.Router();

const data = {
  "firstname":"Nishant",
  "lastname": "Phatangare"
};

/* GET test json */
router.get('/', function(req, res, next) {
    res.send(data);
});

module.exports = router;
