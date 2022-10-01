const express = require("express");
const dashboardRoutes = express.Router();
const dbo = require("../db/conn");

dashboardRoutes.route("/").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("Dashboard")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

dashboardRoutes.route("/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        Date: req.body.Date,
        Name:req.body.Name,
        Company:req.body.Company,
        Purpose:req.body.Purpose,
        Scheduled_Arrival_Time: req.body.Scheduled_Arrival_Time,
        Scheduled_Departure_Time: req.body.Scheduled_Departure_Time,
        Actual_Arrival_Time: req.body.Actual_Arrival_Time,
        Actual_End_Time: req.body.Actual_End_Time,
        Phone_Number: req.body.Phone_Number,
        PSA_supervisor: req.body.PSA_supervisor,
        Location:req.body.Location,
        Number_of_People:req.body.Number_of_People,
        Status:req.body.Status
       }
    db_connect.collection("Dashboard").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});


dashboardRoutes.route("/Checkout").post(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { 
        Name: req.body.Name,
        Company: req.body.Company }; 
    let newvalues = {   
      $set: {     
        Status:"Completed",
      }, 
     }
    db_connect
        .collection("Dashboard")
        .updateOne(myquery,newvalues,function(err,result){
            if (err){
              res.status(400).send('error updating data with id ${myquery.id}!');
            }
            else{
                res.send("Status Completed")
              console.log("1 document updated")
            }
          });
});
module.exports = dashboardRoutes;