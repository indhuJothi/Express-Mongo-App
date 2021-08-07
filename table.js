var express = require("express");
app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MyBusDb", {useNewUrlParser: true});

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var schema = new mongoose.Schema({
    id :Number,
    BusName : String,
    TotalSeats :Number,
    BookedSeats: Number,
    From : String,
    To : String
  }) 
  var BusCollection = mongoose.model("BusCollection", schema);

app.get("/", function (req, res) {   
    BusCollection.find({}, function (err, collections) {
    if (err) {
        console.log(err);
    } else {
        res.render("index", { details: collections })
    }
})
})


app.listen(3000, "localhost", function () {
console.log("server has started");
})