const express = require('express');
const bodyParser= require('body-parser');
const cors=require('cors');
const {connect} = require("./db/db_connection");
const orderData=require("./db/orderData");

const app =express();
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.post('/orders',(req,res)=>{
    // console.log(req);
    const new_order={
        ingredients:req.body.ingredients,
        orderData:req.body.orderData,
        price:req.body.price
    }
    // console.log(new_order);
    orderData.addOrder(new_order);
    res.sendStatus(200);
})

app.get('/orders',async (req,res)=>{
  try{  
        const allOrders = await orderData.getOrders();
        // console.log(allOrders);
        res.status(200).json(allOrders);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

connect();

app.listen(8080,()=>{
    console.log('server listening on port 8080');
})