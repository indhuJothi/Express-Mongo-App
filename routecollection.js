var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var mydbo = db.db('MyBusDb')
    // console.log('switched to '+mydbo.databaseName+" database")
    // mydbo.createCollection("RouteCollection",function(err,res){
    //     if(err) throw err
    //     console.log('collection created')
    //     db.close()
    // })
  
        var myobj =[
            {
                id: 1,
                city : "Bangalore"
            },
            {
                id : 2,
                city : "Coimbatore"
            },
            {
                id : 3,
                city : "Chennai"
            },
            {
                id :4,
                city : "Trichy"
            },
            {
                id :5,
                city : "Madurai"
            }
        ]
        mydbo.collection('RouteCollection').insertMany(myobj,(err,res)=>{
            console.log('The inserted count is '+res.insertedCount)
            db.close()
        })
    
    })