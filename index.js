
//Importing the expess module in our file
var express = require('express')
//we are initializing the app using express
var app = express()

//using the app we are configuring the route of 'GET' Method and path is '/path'
//whenever there is request to the path '/getUsers' means it will show us hello world 
app.get('/user',(req,res)=>{
    res.send('Hello World')
})

app.post('/userId',(req,res)=>{
    var result ={
        name : "Indhu",
        Dept : "LAMP"
    }
    res.send(result)
})
app.listen(4000)