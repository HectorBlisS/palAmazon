const express = require('express');
const router  = express.Router();

//moment().format('LLL') 

/* GET home page */
router.get('/', (req, res, next) => {
  const fecha = new Date();
  const dinero = 6570;
  const obj = {
    fecha, dinero
  }
  res.render('index', {fecha, dinero, obj});
});

module.exports = router;
