// require('dotenv').config({path : './env'}) //used in type common js but here we have to use module js 
import dotenv from 'dotenv'
dotenv.config({
    path:  './env'
})
import {app} from './app.js'

import connectDB from './db/index.js'
const port = process.env.PORT || 4000
connectDB()
.then(()=>{
    app.listen( port, ()=>{

        
        console.log(`App lisgening on ${port}`);
        
    })
})
.catch((error)=>{
    console.log("Error in connecting DB " , error);
    
})









/* 
// if we want to connct database here only using ifi ()()
import express from 'express'
const app = express()
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error" , (error)=>{
            console.log("Error : " , error);
            throw error ;
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App listening on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.log("error in connecting database - " , error);
        
    }
})()

*/