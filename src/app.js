import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

cors.use(cors({
    origin : process.env.CORS_ORIGEN,
    credentials :  true
}))
// which origen to allow the acess of server 

app.use(express.json({
    limit:"16kb"
}))
// json which is sent to us  limit it to 16kb 

app.use(express.urlencoded({
    extended:true , 
    limit : "16kb"
}))
// when data eill come from url  to encode url like in search space is converted to either + or %20 or any for this 

app.use(express.static("public"))
//we will keep our file on server for some time in public foulder

app.use(cookieParser())
// cookies of the brouser can be acessed and set also (curd opeeration kar pau)

export { app }