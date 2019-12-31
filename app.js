const express = require("express");
const bodyParser = require("body-parser");

const scheduleRoutes= require("./routes/scheduleRoutes")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));

app.use(scheduleRoutes)


app.listen(3000, ()=>{
    console.log("server is running")
})