import React from "react";
import './form.css';

export default function PrereqEntry() {
    return (
        <section>
        <h1>Prereq Page</h1>
        <h2>Form</h2>
            <form>
                <label for="date">Date:</label><br></br>
                <input type="text" id="date" name="date"></input><br></br>
                <label for="fname">Name:</label><br></br>
                <input type="text" id="fname" name="fname"></input><br></br>
                <label for="cmpy">Company:</label><br></br>
                <input type="text" id="cmpy" name="cmpy"></input><br></br>
                <label for="purpose">Purpose:</label><br></br>
                <input type="text" id="purpose" name="purpose"></input><br></br>
                <label for="arrtime">Scheduled Arrival Time:</label><br></br>
                <input type="text" id="arrtime" name="arrtime"></input><br></br>
                <label for="deptime">Scheduled Departure Time:</label><br></br>
                <input type="text" id="deptime" name="deptime"></input><br></br>
                <label for="phonenum">Phone Number:</label><br></br>
                <input type="text" id="phonenum" name="phonenum"></input><br></br>
                <label for="PSAsup">PSA Supervisor:</label><br></br>
                <input type="text" id="PSAsup" name="PSAsup"></input><br></br>
                <label for="loc">Location:</label><br></br>
                <input type="text" id="loc" name="loc"></input><br></br>
                <label for="ppl">Number of People:</label><br></br>
                <input type="text" id="ppl" name="ppl"></input><br></br><br></br>

                <input id="submitbutton" type="submit" value="Submit"></input>
                
            </form>
        </section>
    );
}