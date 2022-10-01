import React, { useState, useEffect } from "react";
import './Home.css';

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
    <td>
      <button className="btn btn-link"
        onClick={() => {
          props.editRecordIn(props.record.name, props.record.Company);
        }}
      >
        In
      </button>
    </td>
    <td>
      <button className="btn btn-link"
        onClick={() => {
          props.editRecordOut(props.record.name, props.record.Company);
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
    const statusReceived = await fetch("http://localhost:5000/Dashboard/getStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
       { Name: name,
      }),
    }).catch(error => {
      window.alert(error);
      return;
    })
  console.log(statusReceived);
  if(statusReceived=="Registered" || "At Workplace"){
      console.log("if checkout")
      window.alert("Status Changed to At Workplace")
  }
  else{
      console.log("else")
      window.alert("Visitors already Working")
  }

    
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
    const statusReceived = await fetch("http://localhost:5000/Dashboard/getStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
       { Name: name
      }),
    }).catch(error => {
      window.alert(error);
      return;
    })
  console.log(statusReceived);
  if(statusReceived=="Completion" || "Checked-Out"){
      console.log("if checkout")
      window.alert("Status Changed to Checkout")
  }
  else{
      console.log("else")
      window.alert("Status is not at Completion yet")
  }
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
            <td>Scheduled_Departure Time</td>
            <td>Actual Arrival_Time</td>
            <td>Actual End_Time</td>
            <td>Actual Arrival Time</td>
            <td>PSA Supervisor</td>
            <td>Location</td>
            <td>Number of People</td>
            <td>Current Status</td>
            <td>Confirm Checkin</td>
            <td>Confirm Checkout</td>
          </tr>
        </thead>
        <tbody>{dashboardRecordList()}</tbody>
      </table>
    </div>
  );
}


