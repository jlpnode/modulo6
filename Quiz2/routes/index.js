var express = require('express');
var router = express.Router();



// Página de entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz'});
});



module.exports = router;