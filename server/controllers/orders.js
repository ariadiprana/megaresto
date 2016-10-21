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
    var items = new Orders({
      makanan:req.body.makanan,
      username:req.body.username,
      meja:req.body.meja,
      total:req.body.total,
      status:req.body.status,
      dtCreated:new Date()
    })
    items.save()
    res.json(items)
}



function update(req,res,next){
  console.log(`parammmsssid`,req.params.id);
  Orders.update({_id: req.params.id}, {
      status: req.params.status
  }, function(err, affected, resp) {
     
  })
}


// function update(req,res,next){
//   console.log(`parammmsssid`,req.params.id);
//   Orders.findOne({
//     _id:(req.params.id)
//   },(err,items) => {
//     console.log('status:',req.params.status);
//     console.log('itemsAwal:',items);
//       items.makanan = items.makanan
//       items.username = items.username
//       items.meja = items.meja
//       items.total = items.total
//       items.status = req.params.status
//       items.dtCreated = new Date()
//     console.log('itemsAkhir:',items);
//       items.save((err)=> {
//         if(err) throw err
//         res.json(items)
//       })
//   })
// }

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
