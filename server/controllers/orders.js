// makanan:String,
// username:String,
// meja:String,
// total:Number,
// status:String,
// dtCreated:Date

var Orders = require('../models/orders')

module.exports = {
  insert: insert,
  displayAll: displayAll,
  update:update,
  deleteOne:deleteOne,
  detail:detail,
  deleteAll:deleteAll
}

function insert(req,res,next){
    var items = new Users({
      makanan:req.body.makanan,
      username:req.body.username,
      meja:req.body.meja,
      total:req.body.total,
      status:req.body.status,
      dtCreated:req.body.dtCreated
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Orders.findOne({
    _id:req.params.id
  },(err,items) => {
      items.makanan = req.body.makanan
      items.username = req.body.username
      items.meja = req.body.meja
      items.total = req.body.total
      items.status = req.body.status
      items.dtCreated = req.body.dtCreated

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function deleteOne(req,res,next){
  Orders.findOne({
    _id:req.params.id
  },(err,items) => {
      if(err)throw err

      items.remove((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function displayAll(req,res,next){
    Orders.find({},(err,result) => {
          res.json(result)
    })
}

function deleteAll(req,res,next){
    Orders.find({},(err,result) => {
          res.json(result)
    })
}

function detail(req,res,next){
    Orders.findOne({
      _id:req.params.id
    },(err,result) => {
          res.json(result)
    })
}
