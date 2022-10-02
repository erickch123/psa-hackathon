import React, { useState } from "react";
export default function Completion() {
  const [form, setForm] = useState({
    Name: "",
    PSA_supervisor: "",
    Phone_Number: ""
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
    const completedForm = { ...form };
    await fetch("http://localhost:5000/Dashboard/AddCompletion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedForm),
    }).then(window.alert("Form Submitted"))
      .catch(error => {
        window.alert(error);
        return;
      })
    setForm({ Name: "", PSA_supervisor: "", Phone_Number: "" })
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
        <input
          type="text"
          id="sup"
          name="sup"
          value={form.PSA_supervisor}
          onChange={(e) => updateForm({ PSA_supervisor: e.target.value })} ></input><br></br><br></br>
        <label for="phone">Phone Number:</label><br></br>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.Phone_Number}
          onChange={(e) => updateForm({ Phone_Number: e.target.value })} ></input><br></br><br></br>
        <input type="checkbox" id="visitorout" name="visitorout" value="otw"></input>
        <label for="visitorout"> Your visitor is on the way out of the vicinity</label><br></br><br></br>
        <input id="submitbutton" type="submit" value="Submit"></input>
      </form>
    </section>
  );
}