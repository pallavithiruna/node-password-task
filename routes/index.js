var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express', name:"Pallavi"});
  res.send(
    `<h1>Welcome to Express jiiiiiii</h1>`
  )
});

module.exports = router;
