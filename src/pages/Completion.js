import React from "react";
export default function Completion() {
    return (
        <section>
        <h1>Completion Page</h1>
        <form>
            <label for="visitor">Visitor Name:</label><br></br>
            <input type="text" id="visitor" name="visitor"></input><br></br>
            <label for="sup">Supervisor in-charge:</label><br></br>
            <input type="text" id="sup" name="sup"></input><br></br><br></br>
            <input type="checkbox" id="visitorout" name="visitorout" value="otw"></input>
            <label for="visitorout"> Your visitor is on the way out of the vicinity</label><br></br><br></br>
            <input id="submitbutton" type="submit" value="Submit"></input>
        </form>
        </section>
    );
}