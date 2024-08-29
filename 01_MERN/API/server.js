import express from 'express';
import mongoose from 'mongoose';
import bodyParse from 'express';
import cors from 'cors';

import productRouter from './routes/product.js'


const app = express();
app.use(bodyParse.json());

app.use(cors({
    origin:true,
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}))


// productRouter
app.use('/api/products',productRouter)


// MVC
// M = MODELS
// V = VIEW -CLIENT(REACT APP)
// C = CONTROLLER - (FUNCTION)


mongoose.connect("mongodb://localhost:27017",{
    "dbName":"volcanus_batch4_4pm",
})
.then(()=>console.log("mongoDb connected successfully"))
.catch(()=>console.log("internal server error"))

const port  =1000;

app.listen(port,()=>console.log(`server is running on port ${port}`));