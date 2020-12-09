//This will hold the express app 
const express = require('express'); //import express
const bodyParser = require("body-parser"); 
const { send } = require('process');

const Contact = require('./models/contact.model.ts');


const  app = express(); //returns an express app. we export it below

app.use(bodyParser.json());


app.use((req,res,next)=>{
    
    res.setHeader('Access-Control-Allow-Origin','*'); 
    /*first argument: header key identitfer, 
    second argument: value - * means no matter what domain the app that is 
    sending the request is running on its allow to access our resourses*/
    res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-Requested-With,Content-Type,Accept") /* depends on if your app needs these headers, if theres a header thans need and 
    not defined, request will be blocked. If you don't plan on using the header, no need to put it*/
    
    res.setHeader('Access-Control-Allow-Methods',
    "GET,POST,PATCH,DELETE,OPTIONS")
    
    next();
});



app.post("/api/contact", (req,res,next)=>{
       // const contact = req.body;
       const contact = new Contact({
        email: req.body.email,
        fullname: req.body.fullname,
        message: req.body.message
      });

        //console.log(contact);
        res.status(201).json({
            message: 'Contact added succesfully',
            contact: contact
        });
});



app.use('/api/posts',(req,res,next)=>{

    const posts = [
        {
            id:'erhjtyuhrg',
            title: " first server-side post",
            content: "This is coming fromt he server!"
        },
        {
            id:'ergerfe',
            title: " second server-side post",
            content: "This is coming fromt he server!"

        }
    ]

    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
    
}); //.use(); uses a new middle on our app and on our incoming request
    //next(); function will continue its journey down the file

module.exports = app;  //export entire express app above