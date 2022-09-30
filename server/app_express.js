const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// example router app.use("/TransactionHistory",require("./routes/TransactionHistory"));

const dbo = require("./db/conn");
function create_server(){
    return app
}
module.exports = create_server;