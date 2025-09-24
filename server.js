require('dotenv').config();
const mongoose=require('mongoose')
const express = require('express');
const {connection}=require('./config/db')
const companyRoutes = require('./routes/CompanyRouts');


const Company=require('./models/companySchema')

const app=express();
app.use(express.json())

app.use('/api/company', companyRoutes)




app.get("/",(req,res)=>{
    res.json({welcome: "Welcome to the Company API"})
})


app.post("/api/companies/bulk",async(req,res)=>{
    console.log("Request Body:", req.body);
    try{
        const result = await Company.insertMany(req.body);
        res.status(201).json({ message: "Companies inserted successfully", data: result });
    }
    catch (error) {
    console.error("Error inserting companies:", error);
    res.status(500).json({ error: "Failed to insert companies", details: error.message });
    }
})     

app.listen(process.env.PORT,async ()=>{
    try{
        await connection
        console.log("Database has been connected succefully")
    }
    catch(error){
        console.log("Error connecting to database",error)
    }
    console.log(`server is up and running on: http://localhost:${process.env.PORT}`)

})


