const mongoose=require("mongoose")

const patientSchema = new  mongoose.Schema(
    {
            name:String,
            phn:String,
            address:String,
            Symptom:String
    }

)

module.exports=mongoose.model("patient",patientSchema)