var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function (req, res, next) {
  res.send({
    code: 200,
    data: [{
      name: 'qdleader',
      age: 18
    }],
    resultMsg: '成功'
  });
});

router.post('/login', function (req, res, next) {
  res.send({
    code: 200,
    data: 'qdleader',
    resultMsg: '成功'
  });
});

module.exports = router;
