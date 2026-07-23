import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import dns from 'dns'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

dns.setServers(['1.1.1.1' ,'8.8.8.8'])



//app config - app instance
const app = express()
//defining port
const port = process.env.PORT
connectDB()
connectCloudinary()


//middlewares
app.use(express.json());
app.use(cors());// allow forntend to connect with backend

//api endpoints
app.use('/api/admin' ,adminRouter)
//localhost:4000/api/admin/add-doctor

app.get('/' ,(req,res) => {
    res.send('api is working')

})

app.listen(port, ()=> console.log("Server Started" , port))

