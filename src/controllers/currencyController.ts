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

export async function getCurrency(req: Request, res: Response): Promise<void> {
  const { query } = req.params;
  if (!query) {
    res.status(400).json({ message: "Query parameter is required" });
    return;
  }

  try {
   
    const response = await api.get<CurrenciesResponse>("/currencies");
    const currencies = response.data.data;
    const q = query.toLowerCase();


    const byCode = currencies[query.toUpperCase()];
    if (byCode) {
      res.status(200).json([byCode]); 
      return;
    }

   
    const byName = Object.values(currencies).filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.name_plural.toLowerCase().includes(q)
    );

    if (byName.length > 0) {
      res.status(200).json(byName);
      return;
    }


    res.status(404).json({ message: "Currency not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching currency" });
  }
}
