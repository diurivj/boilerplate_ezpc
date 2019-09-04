const router = require('express').Router();
const Campus = require('../models/Campus');

router.get('/', (req, res) => {
  // Campus.create({ name: 'Mexico', teachers: ['Jossesin', 'Diego'] })
  //   .then((campusCreated) => {
  //     res.render('index', campusCreated);
  //   })
  //   .catch((err) => {
  //     res.render('index', err);
  //   });
});

module.exports = router;
