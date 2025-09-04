import express, { type Request,  type Response } from 'express';
const app = express(); 

import router from './routes/currencyRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
app.use(cors());



const PORT = 3000;
//app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Currency Converter");
});


app.use("/api/currencies", router);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





