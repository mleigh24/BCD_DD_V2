var express = require('express');
var router = express.Router();

/* GET theme page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Queries page' });
});

module.exports = router;
