import express, { type Request,  type Response } from 'express';
const app = express(); 

import router from './routes/currencyRoutes.js';
import {statusRoute} from "./routes/statusRoute.js";
import { historicalRoute } from './routes/historicalRoute.js';
import { latestRoute } from './routes/latestRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
app.use(cors());

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Currency Converter");
});


app.use("/api/currencies", router);
app.use("/api/status", statusRoute);
app.use("/api/historical", historicalRoute);
app.use("/api/latest", latestRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





