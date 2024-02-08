const express=require("express")
const patientModel=require("../models/patientModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let patients=new patientModel(data)
    let result= await patients.save()
    res.json({
        status:"success"
    })
})

module.exports=router