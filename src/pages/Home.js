import React, { useState, useEffect } from "react";
import './Home.css';
import {countdown, stopTimer, delay} from '../components/timer.js'

const DashboardHeader = (props) => (
    <tr id="entries">
      <td>{props.record.Date}</td>
      <td>{props.record.Name}</td>
      <td>{props.record.Company}</td>
      <td>{props.record.Purpose}</td>
      <td>{props.record.Scheduled_Arrival_Time}</td>
      <td>{props.record.Scheduled_Departure_Time}</td>
      <td>{props.record.Actual_Arrival_Time}</td>
      <td>{props.record.Actual_End_Time}</td>
      <td>{props.record.Phone_Number}</td>
      <td>{props.record.PSA_supervisor}</td>
      <td>{props.record.Location}</td>
      <td>{props.record.Number_of_People}</td>
      <td>{props.record.Status}</td>
      <td id="timer"></td>
      <td>
      <button id="inbutton" className="btn btn-link"
    //   EDIT THIS FUNCTION
       onClick={() => {
         props.editRecordIn(props.record.name,props.record.Company,props.record.Phone_Number).then(window.location.reload());
         
       }}
     >
       In
        </button>
        <button id="outbutton" className="btn btn-link"
       onClick={() => {
         props.editRecordOut(props.record.name,props.record.Company,props.record.Phone_Number).then(window.location.reload());
       }}
     >
       Out
        </button>
     </td>
    </tr>
   );


export default function Home() {
  const [dbrecord, setDbrecord] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:5000/Dashboard/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const dbrecord = await response.json();
      setDbrecord(dbrecord);
    }

    getData();

    return;
  }, [dbrecord.length]);

  // This method will map out the records on the table
  function dashboardRecordList() {
    return dbrecord.map((records) => {
      return (
        <DashboardHeader
          editRecordIn={() => editRecordIn(records.Name, records.Company,records.Phone_Number)}
          editRecordOut={() => editRecordOut(records.Name, records.Company,records.Phone_Number)}
          record={records}
        />
      );
    });
  }
  async function editRecordIn(name, company,phone) {
    const response = await fetch("http://localhost:5000/Dashboard/Checkin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Company: company,
        Phone_Number: phone,
     
      })
    })

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
      
    }
    const statusReceived = await fetch("http://localhost:5000/Dashboard/getArrivalDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
       { Name: name
      }),
    }).then(response => {
        return response.json();
      }).then(data => {
        // Work with JSON data here
        console.log(data)
        var strTime = String(data.arrival)
        console.log(strTime)
        var frontpart = strTime.substring(0,2)
        var backpart = strTime.substring(2,strTime.length)
        console.log(frontpart)
        var checkintime = new Date(data.date+" "+frontpart+":"+backpart)
        console.log(checkintime)
        var cdtime = new Date(checkintime.getTime()+ 30*60000).getTime();
        console.log(cdtime)
        // timer function
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
          
            // Find the distance between now and the count down date
            var distance = cdtime - now;
            console.log("help: "+distance)
            // Time calculations for days, hours, minutes and seconds
            
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // var minutes = Math.floor(distance);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            // Display the result in the element with id="demo"
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
          
            // If the count down is finished, write some text
            if (distance < 0) {
              clearInterval(x);
              document.getElementById("timer").innerHTML = "EXPIRED";
            }
          }, 1000)


    
    
    }).catch(error => {
      window.alert(error);
      return;
    })

    
  }
  async function editRecordOut(name, company,phone) {
    const response = await fetch("http://localhost:5000/Dashboard/Checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Company: company,
        Phone_Number: phone
      })
    })

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
  
  }


  return (
    <section class="backgrd">

 
    <div>
      <div class="title">PSA Visitors Dashboard</div>
      <table class="dashtable" className="table table-striped" style={{ marginTop: 0 }}>
        <thead class="tablehead">
          <tr>
          <td>Date</td>
      <td>Name</td>
      <td>Company</td>
      <td>Purpose</td>
      <td>Scheduled Arrival Time</td>
      <td>Scheduled Departure Time</td>
      <td>Actual_Arrival Time</td>
      <td>Actual End Time</td>
      <td>Phone Number</td>
      <td>PSA_Supervisor</td>
      <td>Location</td>
      <td>Number of People</td>
      <td>Current Status</td>
      <td>Timer</td> 
      <td>Confirm Checkin / Checkout</td>   
          </tr>
        </thead>
        <tbody>{dashboardRecordList()}</tbody>
      </table>
    </div>
    </section>
  );
}
