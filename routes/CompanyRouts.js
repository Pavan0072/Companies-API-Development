const express=require('express')
const {createCompany,createCompanies,getCompanies,updateCompany,updateCompanyFields,deleteCompany,getLocations}=require('../controllers/companyController')
const router=express.Router()



router.get("/",getCompanies);
router.get("/locations",getLocations);
router.post("/",createCompany);
router.post("/",createCompanies);
router.put("/:id",updateCompany);
router.patch("/:id",updateCompanyFields)
router.delete("/:id",deleteCompany);


module.exports=router

