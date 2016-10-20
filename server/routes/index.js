var express = require('express');
var router = express.Router();


const usersController = require('../controllers/users')
const ordersController = require('../controllers/orders')


var users = require('../models/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  Content.find(function(err,result){
    res.render('login',{content:result});
  })
});



// User API
router.post('/API/user', usersController.insert)
router.get('/API/user', usersController.display)
router.put('/API/user/:id', usersController.update)
router.delete('/API/user/:id', usersController.hapus)
router.get('/API/user/:id', usersController.detail)



// Order API
router.post('/API/order', ordersController.insert)
router.get('/API/order', ordersController.displayAll)
router.put('/API/order/:id', ordersController.update)
router.delete('/API/order/:id', ordersController.deleteOne)
router.delete('/API/order/', ordersController.deleteAll)
router.get('/API/order/:id', ordersController.detail)


router.post('/regis/users', usersController.insertUser)
router.post('/login', function(req, res, next) {
  var username  = req.body.username,
      password  = req.body.password
      users.findOne({
        username:username,
        password:password
      },(err,items) => {
        console.log(items);
        contents.find({},(err,items2)=> {
            console.log(items2);
            res.render('index',{profile:items,content:items2});
        })

      })
});

router.post('/loginback/:username', function(req, res, next) {
  var username  = req.params.username
      users.findOne({
        username:username
      },(err,items) => {
        console.log(items);
        contents.find({},(err,items2)=> {
            console.log(items2);
            res.render('index',{profile:items,content:items2});
        })

      })
});


module.exports = router;
