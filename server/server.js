const app_express = require('./app_express.js')
const port = process.env.PORT || 5000;
const dbo = require("./db/conn");
const app = app_express()
const server = app.listen(port, () => {


// const server = app_test.app_t.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  });

exports.server_test = server;