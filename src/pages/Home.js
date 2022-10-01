import React, { useState, useEffect } from "react";

const DashboardHeader = (props) => (
    <tr>
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
         props.editRecord(props.record.name,props.record.Company);
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
        editRecord={() => editRecord(records.Name,records.Company)}
          record={records}
        />
      );
    });
}
async function editRecord(name,company) {
    const response =  await fetch("http://localhost:5000/Dashboard/Checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Name:name,
            Company:company
        })
      })

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
  }


return (
    <div>
      <h3>Loyalty Program Provider List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
          <td>Date</td>
      <td>Name</td>
      <td>Company</td>
      <td>Purpose</td>
      <td>Scheduled_Arrival_Time</td>
      <td>Scheduled_Departure_Time</td>
      <td>Actual_Arrival_Time</td>
      <td>Actual_End_Time</td>
      <td>Actual_Arrival_Time</td>
      <td>PSA_Supervisor</td>
      <td>Location</td>
      <td>Number_of_People</td>
      <td>Current Status</td>
      <td>Confirm Checkout</td>   
          </tr>
        </thead>
        <tbody>{dashboardRecordList()}</tbody>
      </table>
    </div>
  );
}


