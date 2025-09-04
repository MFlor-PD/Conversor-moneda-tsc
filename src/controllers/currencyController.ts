import { type Request, type Response } from "express";
import type { CurrenciesResponse, Currency } from "../models/CurrencyData.js";
import { api } from "../api/axios.js";


export async function getAllCurrencies(req: Request, res: Response): Promise<void> {
  try {
    const response = await api.get<CurrenciesResponse>("/currencies");
    const currencies: Currency[] = Object.values(response.data.data);
    res.status(200).json(currencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching currencies" });
  }
}
