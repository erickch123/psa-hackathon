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
        

        // const statusReceived = await fetch("http://localhost:5000/Dashboard/getStatus", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(completedForm),
        // }).catch(error => {
        //     window.alert(error);
        //     return;
        // })
        // console.log(statusReceived);
        // if (statusReceived == "At Workplace" || "Registered") {
        //     console.log("if completion")
        //     window.alert("Status Changed to At Workplace")
        // }
        // else {
        //     console.log("else")
        //     window.alert("Status is not at Workplace")
        // }

    }
    return (
        <section>
            <h1>Workplace Page</h1>
            <form onSubmit={onSubmit}>
                <label for="visitor">Visitor Name:</label><br></br>
                <input
                    type="text"
                    id="visitor"
                    name="visitor"
                    value={form.Name}
                    onChange={(e) => updateForm({ Name: e.target.value })}
                ></input><br></br>
                <label for="com">Company:</label><br></br>
                <input
                    type="text"
                    id="com"
                    name="com"
                    value={form.Company}
                    onChange={(e) => updateForm({ Company: e.target.value })}
                ></input><br></br>
                <label for="phoneno">Phone number:</label><br></br>
                <input
                    type="text"
                    id="phoneno"
                    name="phoneno"
                    value={form.Phone_Number}
                    onChange={(e) => updateForm({ Phone_Number: e.target.value })}
                ></input><br></br>
                <label for="sup">Supervisor in-charge:</label><br></br>
                <input
                    type="text"
                    id="sup"
                    name="sup"
                    value={form.PSA_supervisor}
                    onChange={(e) => updateForm({ PSA_supervisor: e.target.value })}
                ></input><br></br><br></br>
                <input
                    id="submitbutton"
                    type="submit"
                    value="Submit"
                ></input>
            </form>


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