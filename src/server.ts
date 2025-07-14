// 0BajUsk6DUsqIb3h

// mongodb+srv://<db_username>:<db_password>@cluster0.wotzmkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


import  express, { Request, Response }  from "express";
import {Server} from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";


let server: Server;



const startServer = async () =>{
   try{
    console.log(envVars.NODE_ENV);
     await mongoose.connect("mongodb+srv://tour:0BajUsk6DUsqIb3h@cluster0.wotzmkf.mongodb.net/tour-management-backend?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to DB!!");
    server = app.listen(envVars.PORT, () => {
        console.log(`Server is listening to port ${envVars.PORT}`);
    });
   } catch (error) {
    console.log(error);
   }

};

startServer();


process.on("SIGTERM", () =>{
  console.log("SIGTERM signal recived... Server shutting down.. ");
  if(server) {
    server.close(() =>{
      process.exit(1)
    })
  }
  process.exit(1)
})


process.on("SIGINT", () =>{
  console.log("SIGINT signal recived.. Server shutting down.. ");
  if(server) {
    server.close(() =>{
      process.exit(1)
    })
  }
  process.exit(1)
})


// Unhandler rejection error
process.on("unhandledRejection", (err) =>{
  console.log("unhandled Rejection detected... Server shutting down.. ", err);
  if(server) {
    server.close(() =>{
      process.exit(1)
    })
  }
  process.exit(1)
})



// Uncaught Exception error
process.on("uncaughtException", (err) =>{
  console.log("Uncaught Exception detected... Server shutting down.. ", err);
  if(server) {
    server.close(() =>{
      process.exit(1)
    })
  }
  process.exit(1)
})

// Unhandler rejection error
// Promise.reject(new Error("I forgot to catch this promise"))

// Uncaught Exception error
// throw new Error("I forgot to handle this local error")


/**
 * unhandled rejection error
 */

