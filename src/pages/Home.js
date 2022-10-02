import React, { useState, useEffect } from "react";
import './Home.css';
import '../components/timer.js'

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
         props.editRecordIn(props.record.name,props.record.Company).then(window.location.reload());
         
       }}
     >
       In
        </button>
        <button id="outbutton" className="btn btn-link"
       onClick={() => {
         props.editRecordOut(props.record.name,props.record.Company).then(window.location.reload());
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
          editRecordIn={() => editRecordIn(records.Name, records.Company)}
          editRecordOut={() => editRecordOut(records.Name, records.Company)}
          record={records}
        />
      );
    });
  }
  async function editRecordIn(name, company) {
    const response = await fetch("http://localhost:5000/Dashboard/Checkin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Company: company
      })
    })

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
      
    }
  //   const statusReceived = await fetch("http://localhost:5000/Dashboard/getStatus", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(
  //      { Name: name,
  //     }),
  //   }).catch(error => {
  //     window.alert(error);
  //     return;
  //   })
  // console.log(statusReceived);
  // if((statusReceived=="Registered") || (statusReceived== "At Workplace")){
  //     console.log("if Registers/ at workplace")
  //     window.alert("Status Changed to At Workplace")
  // }
  // else{
  //     console.log("else")
  //     window.alert("Visitors already Working")
  // }

    
  }
  async function editRecordOut(name, company) {
    const response = await fetch("http://localhost:5000/Dashboard/Checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Company: company
      })
    })

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
  //   const statusReceived = await fetch("http://localhost:5000/Dashboard/getStatus", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(
  //      { Name: name
  //     }),
  //   }).catch(error => {
  //     window.alert(error);
  //     return;
  //   })
  // console.log(statusReceived);
  // if((statusReceived=="Walking-Out") || (statusReceived=="Checked-Out")){
  //     console.log("if walking-out/checkout")
  //     window.alert("Status Changed to Checkout")
  // }
  // else{
  //     console.log("else")
  //     window.alert("Status is not at Walking Out Yet")
  // }
  }


  return (
    <div>
      <h3>PSA Visitors Dashboard</h3>
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
  );
}


