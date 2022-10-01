import React, {useState} from "react";
export default function Completion() {
    const [form, setForm] = useState({
        Name: "",
        PSA_supervisor: ""
        });

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
        }
    async function onSubmit(e) {
        e.preventDefault();
        const completedForm = { ...form };
        const testtt = await fetch("http://localhost:5000/Dashboard/AddCompletion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(completedForm),
        })
        console.log(testtt)
        .catch(error => {
          window.alert(error);
          return;
        })
        setForm({ Name: "",PSA_supervisor: ""})

        const statusReceived = await fetch("http://localhost:5000/Dashboard/getStatus", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(completedForm),
          }).catch(error => {
            window.alert(error);
            return;
          })
        console.log(statusReceived);
        if(statusReceived=="At Workplace" || "Completion"){
            console.log("if completion")
            window.alert("Status Changed to Completion")
        }
        else{
            console.log("else")
            window.alert("Status is not at Workplace")
        }

    }
    return (
        <section>
        <h1>Completion Page</h1>
        <form onSubmit={onSubmit}>
            <label for="visitor">Visitor Name:</label><br></br>
            <input 
            type="text" 
            id="visitor" 
            name="visitor" 
            value={form.Name} 
            onChange={(e) => updateForm({ Name: e.target.value })}></input><br></br>
            <label for="sup">Supervisor in-charge:</label><br></br>
            <input type="text" id="sup" name="sup"  value={form.PSA_supervisor} onChange={(e) => updateForm({ PSA_supervisor: e.target.value })} ></input><br></br><br></br>
            <input type="checkbox" id="visitorout" name="visitorout" value="otw"></input>
            <label for="visitorout"> Your visitor is on the way out of the vicinity</label><br></br><br></br>
            <input id="submitbutton" type="submit" value="Submit"></input>
        </form>
        </section>
    );
}