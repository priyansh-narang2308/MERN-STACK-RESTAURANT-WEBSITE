import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleWare } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";


const app = express();
dotenv.config({ path: "./config/config.env" });
// require('dotenv').config();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], //frontend ka path dena hai jisse connect kar sakte hai
    methods: ["POST"], //put,get,delete vo sab
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);   //used in post man for the local host

dbConnection();

app.use(errorMiddleWare);

export default app;
