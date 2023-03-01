

var express = require('express');
const mongoose = require('mongoose')
var router = express.Router();


const User = mongoose.model('user')




/* GET users listing. */
router.get('/data', async (req, res, next) => {
  try {
    const articles = await User.find({});
    res.send(articles);
    // console.log(articles);
  } catch (err) {
    console.log(err);
  }
});

// res.json(doc)
module.exports = router;