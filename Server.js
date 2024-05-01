const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/sdp37"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((e) => {
    console.log(e.message)
});

const app = express()
app.use(express.json())  //to parse JSON data
app.use(cors())

const adminrouter = require("./routes/adminroutes")

app.use("",adminrouter)


const port = 5432
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`)
})