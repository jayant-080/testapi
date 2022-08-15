import  express from "express"


const app = express()

app.use(express.json())

app.get('/hi',(req,res)=>{
    res.status(200).json({
        message:"hi boy"
    })
})

app.get('/hello',(req,res)=>{
    res.status(200).json({
        message:"hello boy"
    })
})


app.listen(2000,()=>{
    console.log("sercer is running on port 2000")
})