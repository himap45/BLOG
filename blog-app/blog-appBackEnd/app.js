const express=require('express');
//Object  Initilization
const app=express();
//Backend Routing
app.get('/',function(req,res){
res.send("Blog server up!!");
})
//port number
app.listen(6002,()=>{
    console.log("Listening on port 6002");
})