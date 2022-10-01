import React from "react";
export default function Completion() {
    return (
        <section>
        <h1>Completion Page</h1>
        <form>
            <input type="checkbox" id="visitorout" name="visitorout" value="otw"></input>
            <label for="visitorout"> Your visitor is on the way out of the vicinity</label><br></br><br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </section>
    );
}