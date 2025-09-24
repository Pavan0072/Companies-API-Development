const mongoose=require('mongoose')



const CompnaySchema=mongoose.Schema({
name: { type: String, required: true },
location: { type: String, required: true },
industry: { type: String, required: true },
revenue: { type: Number, required: true },
employeeCount: { type: Number, required: true },
foundedYear: { type: String, required: true },
logo:{type:String},
description: { type: String }

})

const Company=mongoose.model('Company',CompnaySchema)

module.exports=Company