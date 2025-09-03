//https://app.freecurrencyapi.com/dashboard
import express, { type Request,  type Response } from 'express';
const app = express(); 
require('dotenv').config();
import cors from 'cors';
app.use(cors());
import axios from 'axios';

//app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Currency Converter");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





