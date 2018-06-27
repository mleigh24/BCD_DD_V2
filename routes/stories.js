var express = require('express');
var router = express.Router();

/* GET theme page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stories page' });
});

module.exports = router;
