var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    makanan:String,
    username:String,
    meja:String,
    total:Number,
    status:String,
    dtCreated:Date
})

module.exports= mongoose.model('orders', orderSchema)
