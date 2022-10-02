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
        }).then(
            window.alert("Form Submitted")
        )
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
           <div class = "form">
            <div class ="title">
                Prereq Page Form
            </div>
            <form onSubmit={onSubmit}>
                <label class="placeholder" for="date"></label><br></br>
                <input
                    class="input"
                    type="text"
                    id="date"
                    placeholder="YYYY-MM-DD"
                    name="date"
                    value={form.Date}
                    onChange={(e) => updateForm({ Date: e.target.value })}
                ></input><br></br>
                <label class="placeholder" for="fname"></label><br></br>
                <input
                    class="input"
                    type="text"
                    id="fname"
                    placeholder="Name"
                    name="fname"
                    value={form.Name}
                    onChange={(e) => updateForm({ Name: e.target.value })}
                ></input><br></br>
                <label class="placeholder"  for="cmpy"></label><br></br>
                <input
                    class="input"
                    type="text"
                    id="cmpy"
                    placeholder="Company"
                    name="cmpy"
                    value={form.Company}
                    onChange={(e) => updateForm({ Company: e.target.value })}></input><br></br>
                <label class="placeholder" for="purpose"></label><br></br>
                <input
                    class="input"
                    type="text"
                    id="purpose"
                    placeholder="Purpose"
                    name="purpose"
                    value={form.Purpose}
                    onChange={(e) => updateForm({ Purpose: e.target.value })}></input><br></br>
                <label class="placeholder" for="arrtime"></label><br></br>
                <input
                    class="input"
                    type="text"
                    id="arrtime"
                    placeholder="Scheduled Arrival Time"
                    name="arrtime"
                    value={form.Scheduled_Arrival_Time}
                    onChange={(e) => updateForm({ Scheduled_Arrival_Time: e.target.value })}></input><br></br>
                <label class="placeholder" for="deptime"></label><br></br>
                <input
                class="input"
                    type="text"
                    id="deptime"
                    name="deptime"
                    placeholder="Scheduled Departure Time"
                    value={form.Scheduled_Departure_Time}
                    onChange={(e) => updateForm({ Scheduled_Departure_Time: e.target.value })}
                ></input><br></br>
                <label class="placeholder" for="phonenum"></label><br></br>
                <input 
                    class="input"
                    placeholder="Phone Number"
                    type="text"
                    id="phonenum"
                    name="phonenum"
                    value={form.Phone_Number}
                    onChange={(e) => updateForm({ Phone_Number: e.target.value })}></input><br></br>
                <label class="placeholder" for="PSAsup"></label><br></br>
                <input
                    class="input"
                    type="text"
                    id="PSAsup"
                    name="PSAsup"
                    placeholder="PSA Supervisor"
                    value={form.PSA_supervisor}
                    onChange={(e) => updateForm({ PSA_supervisor: e.target.value })}
                ></input><br></br>
                <label class="placeholder" for="loc"></label><br></br>
                <input class="input"
                    type="text"
                    id="loc"
                    placeholder="Location"
                    name="loc"
                    value={form.Location}
                    onChange={(e) => updateForm({ Location: e.target.value })}>
                </input><br></br>
                <label class="placeholder"for="ppl"></label><br></br>
                < input class="input"
                    type="text"
                    id="ppl"
                    name="ppl"
                    placeholder="Number of People"
                    value={form.Number_of_People}
                    onChange={(e) => updateForm({ Number_of_People: e.target.value })}
                ></input><br></br><br></br>
                <input class="input"
                    id="submitbutton"
                    type="submit"
                    value="Submit"></input>
            </form>
            </div>
        </section>
    );
}

