import mongoose from "mongoose";
import {DB_NAME} from './constants'












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