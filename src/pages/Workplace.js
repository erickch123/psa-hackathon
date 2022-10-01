import React from "react";
export default function Workplace() {
    return (
        <section>
            <h1>Workplace Page</h1>
            <form>
                <label for="visitor">Visitor Name:</label><br></br>
                <input type="text" id="visitor" name="visitor"></input><br></br>
                <label for="com">Company:</label><br></br>
                <input type="text" id="com" name="com"></input><br></br>
                <label for="phoneno">Phone number:</label><br></br>
                <input type="text" id="phoneno" name="phoneno"></input><br></br>
                <label for="sup">Supervisor in-charge:</label><br></br>
                <input type="text" id="sup" name="sup"></input><br></br><br></br>
                <input id="submitbutton" type="submit" value="Submit"></input>
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