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
      
      <div class = "form">
            <div class ="title">
                Completion Confirmation
            </div>
      <form onSubmit={onSubmit}>
        <label class="placeholder"for="visitor"></label><br></br>
        <input class="input"
          type="text"
          id="visitor"
          name="visitor"
          value={form.Name}
          placeholder = "Visitor Name"
          onChange={(e) => updateForm({ Name: e.target.value })}></input><br></br>
        <label class="placeholder"for="sup"></label><br></br>
        <input class="input"
          type="text"
          id="sup"
          name="sup"
          placeholder="Supervisor in-charge"
          value={form.PSA_supervisor}
          onChange={(e) => updateForm({ PSA_supervisor: e.target.value })} ></input><br></br>
        <label class="placeholder" for="phone"></label><br></br>
        <input class="input"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          value={form.Phone_Number}
          onChange={(e) => updateForm({ Phone_Number: e.target.value })} ></input><br></br><br></br>
        <input type="checkbox" id="visitorout" name="visitorout" value="otw"></input>
        <label class ="endbox" for="visitorout" > Your visitor is on the way out of the vicinity</label><br></br><br></br>
        <input id="submitbutton" class = "submit" type="submit" value="Submit"></input>
      </form>
      </div>
    </section>
  );
}