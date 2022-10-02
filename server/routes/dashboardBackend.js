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
        Actual_Arrival_Time: "Not Yet",
        Actual_End_Time: "Not Yet",
        Phone_Number: req.body.Phone_Number,
        PSA_supervisor: req.body.PSA_supervisor,
        Location:req.body.Location,
        Number_of_People:req.body.Number_of_People,
        Status:"Registered"
       }
    db_connect.collection("Dashboard").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});



dashboardRoutes.route("/AddCompletion").post(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { 
        Name: req.body.Name,
        PSA_supervisor: req.body.PSA_supervisor,
        Status: "Waiting-For-Dismissal" 
    }; 
    let newvalues = {   
      $set: {     
        Status:"Walking-Out"
      }, 
     }
    db_connect
        .collection("Dashboard")
        .updateOne(myquery,newvalues,function(err,result){
            if (err){
              res.status(400).send('error updating data with id ${myquery.id}!');
            }
            else{
                res.send("Status Changed from Waiting-For-Dismissal to Walking-Out");
              console.log("Status Changed from Waiting-For-Dismissal to Walking-Out")
            }
          });
});

dashboardRoutes.route("/AddWorkplace").post(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { 
        Name: req.body.Name,
        Company:req.body.Company,
        Phone_Number: req.body.Phone_Number,
        PSA_supervisor: req.body.PSA_supervisor,
        Status: "At Workplace"
    }; 
    let newvalues = {   
      $set: {     
        Status:"Waiting-For-Dismissal"
      }, 
     }
    db_connect
        .collection("Dashboard")
        .updateOne(myquery,newvalues,function(err,result){
            if (err){
              res.status(400).send('error updating data with id ${myquery.id}!');
            }
            else{
                res.send("Status Changed from from At Workplace to Waiting-For-Dismissal");
              console.log("Status Changed from from At Workplace to Waiting-For-Dismissal")
            }
          });
});


dashboardRoutes.route("/Checkin").post(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { 
        Name: req.body.Name,
        Company: req.body.Company,
        Status: "Registered" 
    }; 
    let newvalues = {   
      $set: {     
        Status:"At Workplace",
        Actual_Arrival_Time: getCurrentTime()
      }, 
     }
    db_connect
        .collection("Dashboard")
        .updateOne(myquery,newvalues,function(err,result){
            if (err){
              res.status(400).send('error updating data with id ${myquery.id}!');
            }
            else{
            res.send("Status Changed from to Completion to Checked-Out")
              console.log("Status Changed from to Completion to Checked-Out")
            }
          });
});

dashboardRoutes.route("/Checkout").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { 
      Name: req.body.Name,
      Company: req.body.Company,
      Status: "Walking-Out" 
  }; 
  let newvalues = {   
    $set: {     
      Status:"Checked-Out",
      Actual_End_Time: getCurrentTime()
    }, 
   }
  db_connect
      .collection("Dashboard")
      .updateOne(myquery,newvalues,function(err,result){
          if (err){
            res.status(400).send('error updating data with id ${myquery.id}!');
          }
          else{
          res.send("Status Changed from to Completion to Checked-Out")
            console.log("Status Changed from to Completion to Checked-Out")
          }
        });
});



dashboardRoutes.route("/getStatus").post(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { Name: req.body.Name
                    };
    db_connect
        .collection("Dashboard")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result.Status);
        });
   });

function getCurrentTime(){
    var today = new Date();
    var hours = today.getHours()
    var minutes = today.getMinutes()
    if(hours<10){
        hours = "0",hours
    }
    if(minutes<10){
        minutes = "0",minutes
    }
    console.log(hours)
    console.log(minutes)
    var result = (""+hours+minutes)
    console.log(result)
    return result
}
function getTodayDate(){
    var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
    return today

}
module.exports = dashboardRoutes;