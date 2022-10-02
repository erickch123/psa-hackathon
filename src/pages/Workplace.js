import React, { useState } from "react";
export default function Workplace() {
    const [form, setForm] = useState({
        Name: "",
        Company: "",
        Phone_Number: "",
        PSA_supervisor: "",
    });
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        const completedForm = { ...form };
        console.log(completedForm)
        const testtt = await fetch("http://localhost:5000/Dashboard/AddWorkplace", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(completedForm),
        }).then((window.alert("Form Submitted")))

            .catch(error => {
                window.alert(error);
                return;
            })
        setForm({
            Name: "",
            Company: "",
            Phone_Number: "",
            PSA_supervisor: "",
        })

    }
    return (
        <section>
            <div class="form">
                <div class="title">
                    Workplace Completion Approval
                </div>
                <form onSubmit={onSubmit}>
                    <label class="placeholder" for="visitor"></label><br></br>
                    <input
                        class="input"
                        type="text"
                        id="visitor"
                        name="visitor"
                        placeholder="Visitor Name"
                        value={form.Name}
                        onChange={(e) => updateForm({ Name: e.target.value })}
                    ></input><br></br>
                    <label class="placeholder" for="com"></label><br></br>
                    <input
                        class="input"
                        type="text"
                        id="com"
                        name="com"
                        placeholder="Company"
                        value={form.Company}
                        onChange={(e) => updateForm({ Company: e.target.value })}
                    ></input><br></br>
                    <label class="placeholder" for="phoneno"></label><br></br>
                    <input
                        class="input"
                        type="text"
                        id="phoneno"
                        name="phoneno"
                        placeholder="Phone number"
                        value={form.Phone_Number}
                        onChange={(e) => updateForm({ Phone_Number: e.target.value })}
                    ></input><br></br>
                    <label class="placeholder" for="sup"></label><br></br>
                    <input
                        class="input"
                        type="text"
                        id="sup"
                        name="sup"
                        placeholder="Supervisor in-charge"
                        value={form.PSA_supervisor}
                        onChange={(e) => updateForm({ PSA_supervisor: e.target.value })}
                    ></input><br></br><br></br>
                    <input
                        class="input"
                        id="submitbutton"
                        type="submit"
                        value="Submit"
                    ></input>
                </form>
            </div>



        </section>
    );
}

/**
"Date": "2022-10-02",
"Name":"John Lenon",
"Company":"ABC Company",
"Purpose":"Trash Collection",
"Scheduled_Arrival_Time": 1100,
"Scheduled_Departure_Time": 1300,
"Actual_Arrival_Time": 1130,
"Actual_End_Time": 1330,
"Phone_Number": 93249324,
"PSA_supervisor": "Tom Livingston",
"Location":"Building 2",
"Number of People":5
 */