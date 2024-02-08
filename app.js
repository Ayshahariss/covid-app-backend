const  express =require("express")
const  cors =require("cors")
const  mongoose=require("mongoose")
const patientRoute = require("./controllers/patienRoute")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aysha-haris:Captainthor432@cluster0.3vwom3n.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/patient",patientRoute)

app.listen(3004,()=>{
    console.log("server running")
})

