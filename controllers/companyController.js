const Company=require('../models/companySchema')



// Create a single company

const createCompany=async(req,res)=>{

    try{
    const company=new Company(req.body)
    await company.save()
    res.status(201).send({message:"Company succefully created"})
    }
    catch(error){
        console.log(error)
        res.status(500).send({error:error.message});
    }

}


// Insert multiple companies at once

const createCompanies= async(req,res)=>{
    console.log("Request Body:", req.body);
    try{
        const result = await Company.insertMany(req.body);
        res.status(201).json({ message: "Companies inserted successfully", data: result });
    }
    catch (error) {
    console.error("Error inserting companies:", error);
    res.status(500).json({ error: "Failed to insert companies", details: error.message });
    }
}

// Get all companies with optional filters (location, industry, pagination)

const getCompanies= async(req,res)=>{
    let {location,industry,page=1,limit=1}=req.query
    let filters ={}
    if(location){
        filters.location=new RegExp(location, "i");
    }
    
    if(industry){
        filters.industry=new RegExp(industry, "i");
    }

    console.log(filters.location)

   try{
    const companies= await Company.find(filters);
    console.log(req.query)
    const totalcount=await Company.countDocuments(filters)
    res.status(200).send({totalcount:totalcount,companies});
   }
   catch(error){
    res.status(500).send({error:error.message})
   }
}


// Update an entire company record (replace document)

const updateCompany=async(req,res)=>{
    
    try{
        const company= await Company.findByIdAndUpdate(req.params.id,req.body,{ new: true, overwrite: true })
    
        if (!company) {
        return res.status(404).json({ error: "Company not found" });
        }
        
        res.status(200).send("company has updated successfully")
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

// Partially update a company (only given fields)

const updateCompanyFields=async(req,res)=>{
    try{
        const company=await Company.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send("data updated succfuly")
    }
    catch(error){
        console.log(error)
        res.status(400).send({error:error.message})
    }
}

//To delete company based on id

const deleteCompany= async(req,res)=>{
    try {
    const company=await Company.findByIdAndDelete(req.params.id);
    console.log(company)
    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get unique list of all company locations

const getLocations=async(req,res)=>{
    try{
    const uniqueLocations = await Company.distinct("location");
    res.status(200).send(uniqueLocations)
    //console.log(uniqueLocations)
    }
    catch(error){
        res.status(500).send({error:error.message})
    }

}

module.exports={createCompany,createCompanies,getCompanies,updateCompany,updateCompanyFields,deleteCompany,getLocations}