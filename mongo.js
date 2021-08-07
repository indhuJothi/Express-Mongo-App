var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var mydbo = db.db('MyBusDb')
    // console.log('switched to '+mydbo.databaseName+" database")
    // mydbo.createCollection("BusCollection",function(err,res){
    //     if(err) throw err
    //     console.log('collection created')
    //     db.close()
    // })

//     var BusCollectionobj =[
//         {
//            id : 1,
//            BusName : "Sowmya Bus Travels",
//            TotalSeats : 90,
//            BookedSeats : 45,
//            From : ObjectId('610e29fcde5c171e65050f33'),
//            To :  ObjectId('610e29fcde5c171e65050f34')
//         },
//         {
//             id : 2,
//             BusName : "Red Bus Travels",
//             TotalSeats : 108,
//             BookedSeats : 60,
//             From : ObjectId('610e29fcde5c171e65050f34'),
//             To :  ObjectId('610e29fcde5c171e65050f35')

//          },
        //  {
        //     id : 3,
        //     BusName : "Karthikeyan Bus Travels",
        //     TotalSeats : 100,
        //     BookedSeats : 55,
        //     From :ObjectId('610e29fcde5c171e65050f35'),
        //     To :  ObjectId('610e29fcde5c171e65050f36')
        //  },
//          {
//             id : 4,
//             BusName : "Blue Bus Travels",
//             TotalSeats : 90,
//             BookedSeats : 45,
//             From : ObjectId('610e29fcde5c171e65050f36'),
//             To :  ObjectId('610e29fcde5c171e65050f37')
//          }
// ]
mydbo.collection('BusCollection').find({}).toArray(function(err,res){
    if(err) throw err
    console.log(JSON.stringify(res))
    db.close()
})
// mydbo.collection('BusCollection').insertMany(BusCollectionobj,(err,res)=>{
//     if(err) throw err
//     console.log('Number of documents insterted '+ res.insertedCount)
//     db.close()
// })
// mydbo.collection('BusCollection').updateMany({},{$set:{From : "610e29fcde5c171e65050f33 ", To: "610e29fcde5c171e65050f34 "}})
// mydbo.collection('BusCollection').aggregate([{
//     $lookup:
//     {
//         from : "RouteCollection",
//         localField : "id",
//         foreignField:'id',
//         as : 'routedetails'
//     }
// }]).toArray(function(err,res){
//     if(err) throw err
//     console.log(JSON.stringify(res))
//     db.close()
// })
}
)

