import express ,{Express,Request,Response}from "express"
// const express =  require("express")
const port = 4000
const app : Express =  express();

app.get("/",(req: Request,res: Response)=>{
    res.send("Hello from express and  n;j")
})

app.listen(port,()=>{
    console.log(`Port listening on ${port}`);
})