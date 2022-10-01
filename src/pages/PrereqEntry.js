import React, { useState } from "react";
import './form.css';
export default function PrereqEntry() {

    const [form, setForm] = useState({
        Date: "",
        Name: "",
        Company: "",
        Purpose: "",
        Scheduled_Arrival_Time: "",
        Scheduled_Departure_Time: "",
        Phone_Number: "",
        PSA_supervisor: "",
        Location: "",
        Number_of_People: ""
    });
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    };

    async function onSubmit(e) {
        e.preventDefault();
        const completedForm = { ...form };
        await fetch("http://localhost:5000/Dashboard/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(completedForm),
        })
            .catch(error => {
                window.alert(error);
                return;
            })
        setForm({
            Date: "",
            Name: "",
            Company: "",
            Purpose: "",
            Scheduled_Arrival_Time: "",
            Scheduled_Departure_Time: "",
            Phone_Number: "",
            PSA_supervisor: "",
            Location: "",
            Number_of_People: "",
        });
    };
    //To emptied the form after submission
    return (
        <section>
            <h1>Prereq Page</h1>
            <h2>Form</h2>
            <form onSubmit={onSubmit}>
                <label for="date">Date:</label><br></br>
                <input
                    type="text"
                    id="date"
                    placeholder="YYYY-MM-DD"
                    name="date"
                    value={form.Date}
                    onChange={(e) => updateForm({ Date: e.target.value })}
                ></input><br></br>
                <label for="fname">Name:</label><br></br>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={form.Name}
                    onChange={(e) => updateForm({ Name: e.target.value })}
                ></input><br></br>
                <label for="cmpy">Company:</label><br></br>
                <input
                    type="text"
                    id="cmpy"
                    name="cmpy"
                    value={form.Company}
                    onChange={(e) => updateForm({ Company: e.target.value })}></input><br></br>
                <label for="purpose">Purpose:</label><br></br>
                <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    value={form.Purpose}
                    onChange={(e) => updateForm({ Purpose: e.target.value })}></input><br></br>
                <label for="arrtime">Scheduled Arrival Time:</label><br></br>
                <input
                    type="text"
                    id="arrtime"
                    name="arrtime"
                    value={form.Scheduled_Arrival_Time}
                    onChange={(e) => updateForm({ Scheduled_Arrival_Time: e.target.value })}></input><br></br>
                <label for="deptime">Scheduled Departure Time:</label><br></br>
                <input
                    type="text"
                    id="deptime"
                    name="deptime"
                    value={form.Scheduled_Departure_Time}
                    onChange={(e) => updateForm({ Scheduled_Departure_Time: e.target.value })}
                ></input><br></br>
                <label for="phonenum">Phone Number:</label><br></br>
                <input
                    type="text"
                    id="phonenum"
                    name="phonenum"
                    value={form.Phone_Number}
                    onChange={(e) => updateForm({ Phone_Number: e.target.value })}></input><br></br>
                <label for="PSAsup">PSA Supervisor:</label><br></br>
                <input
                    type="text"
                    id="PSAsup"
                    name="PSAsup"
                    value={form.PSA_supervisor}
                    onChange={(e) => updateForm({ PSA_supervisor: e.target.value })}
                ></input><br></br>
                <label for="loc">Location:</label><br></br>
                <input
                    type="text"
                    id="loc"
                    name="loc"
                    value={form.Location}
                    onChange={(e) => updateForm({ Location: e.target.value })}>
                </input><br></br>
                <label for="ppl">Number of People:</label><br></br>
                < input
                    type="text"
                    id="ppl"
                    name="ppl"
                    value={form.Number_of_People}
                    onChange={(e) => updateForm({ Number_of_People: e.target.value })}
                ></input><br></br><br></br>
                <input
                    id="submitbutton"
                    type="submit"
                    value="Submit"></input>
            </form>
        </section>
    );
}

