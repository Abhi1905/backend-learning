import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database');
});

// Event when the connection is lost
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from the database');
});
(async () => {
    try{
        console.log("-------------",process.env.MongoDB_URL)
        await mongoose.connect(`${process.env.MongoDB_URL}/${DB_NAME}`)
        
      
        app.listen(process.env.PORT, () => {
            console.log(`Server is running ${process.env.PORT}`);
        })

      

        const connectionState = mongoose.connection.readyState;
        console.log('Mongoose connection state:', connectionState);

    }
    catch (error){
        console.error("ERROR 11111 : ", error)
        throw error
    }
})()