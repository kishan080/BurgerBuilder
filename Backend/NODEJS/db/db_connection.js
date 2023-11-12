const { error } = require('console');
const mongoose = require('mongoose');

function connect()
{
    mongoose.connect("mongodb+srv://kishan080vv:vv080nahsik@cluster0.jn6jhxv.mongodb.net/dbBurger?retryWrites=true&w=majority").then(()=>{
        console.log("connection establish to monogdb");
    }).catch((error)=>{
        console.log("failed:",error);
    })
}

module.exports = {connect};