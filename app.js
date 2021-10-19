const express = require("express");
const server = express();
const path = require("path");
server.use("/assets",express.static("assets"));
const PORT = 3000;
const HOME_PAGE = '/views/index.html';
const REGISTER_PAGE = '/views/register.html';
const LOGIN_PAGE = '/views/login.html';


server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,HOME_PAGE));
});

server.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,REGISTER_PAGE));
});

server.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,LOGIN_PAGE));
});

server.listen(PORT,()=>{
    console.log("el servidor inicio ok....!!!");
});

