const mysql=require('mysql2');
const express=require("express");
const bodyParser=require("body-parser");

const mysqlConnection=require("./connection");
const peopleRoutes=require("./routes/people");
const EducationRoutes=require("./routes/education")
var app=express();
app.use(bodyParser.json());
app.use("/people",peopleRoutes);
app.use("/education",EducationRoutes);
app.listen(3000);
