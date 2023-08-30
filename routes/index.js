var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

/* GET reiki page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services Offered'});
});

/* GET Cooling page. */
router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Book An Appointment'});
});

router.get('/reiki', function(req, res, next) {
  res.render('reiki', {layout: !req.xhr});
});

router.get('/lomi', function(req, res, next) {
  res.render('lomi', {layout: !req.xhr});
});

router.get('/pelvic', function(req, res, next) {
  res.render('pelvic', {layout: !req.xhr});
});

// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact Me'});
// });

module.exports = router;
