const mongoose= require('mongoose');

const orderSchema= new mongoose.Schema(
    {
        ingredients:{
            salad: {
                type:Number
            },
            bacon: {
                type:Number
            } , 
            cheese: {
                type:Number
            } , 
            meat:{
                type:Number
            } 
        },
        orderData: 
        {
            name:{
                type:String
            },
            street:{
                type:String
            },
            zipCode: {
                type:String
            },
            country: {
                type:String
            },
            email:{
                type:String
            },
            deliveryMethod:{
                type:String
            }
        },
        price:{
            type:Number
        }
    }
);

module.exports = mongoose.model('order',orderSchema);