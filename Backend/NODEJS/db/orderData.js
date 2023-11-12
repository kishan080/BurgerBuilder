const mongoose = require('mongoose');

// const { error } = require('console');
// console.log(orderSchema);
const Order = require('../schema/orderSchema');

async function addOrder(new_order){
    const order_obj= new Order(new_order);
    // console.log(new_order);
    await order_obj.save().then(()=>{
        console.log('sucessfull..save()');
    }).catch((error)=>{
        console.log('error:',error);
    });
}

async function getOrders(){
   const allOrders = await Order.find({});
   return allOrders;
}

module.exports={addOrder,getOrders};