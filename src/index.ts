import express, { type Request,  type Response } from 'express';
const app = express(); 

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
app.use(cors());

import axios from 'axios';

const PORT = 3000;
//app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Currency Converter");
});




const API_KEY = process.env.FREECURRENCY_API_KEY; // lo leés del .env
const BASE_URL = "https://api.freecurrencyapi.com/v1/currencies";

// Función para traer TODO el JSON de la API
async function getAllRates(base: string = "USD") {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        base_currency: base,
      },
    });

    // Axios ya hace el JSON.parse por vos
    console.log("Respuesta completa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
}

// Llamada de prueba
getAllRates();


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





