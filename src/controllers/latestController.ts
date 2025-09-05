import { type Request, type Response } from "express";
import type { LatestResponse } from "../models/CurrencyData.js";
import { api } from "../api/axios.js";
import {calcularConversion} from "../utils/calculadora.js";

export const getLatest = async (req: Request, res: Response) => {
    const { base_currency, currencies } = req.query;

    try {

        const params: Record<string, string> = {};

        if (base_currency) params.base_currency = base_currency as string;
        if (currencies) params.currencies = currencies as string;

        const response = await api.get<LatestResponse>("/latest", { params });

        return res.json(response.data); 
        
    } catch (error) {
        console.error("Error fetching latest currency data:", error);
        return res.status(500).json({ error: "Failed to fetch latest currency data" });
    }
};

export const currencyConvertor = async (req: Request, res: Response) => {
    try {
        const { base, target, amount } = req.query;
        
     if (!base || !target || !amount) {
        return res.status(400).json({ error: "Faltan parámetros" });
    }
    
    const params: Record<string, string> = {
      base_currency: base as string,
      currencies: target as string,
    };

    const response = await api.get<LatestResponse>("/latest", { params: { base_currency: base, currencies: target } });

    const rate = response.data.data[target as string];

    if (!rate) {
      return res.status(404).json({ error: "No se encontró la tasa solicitada" });
    }

     const result = calcularConversion(rate, Number(amount));

      return res.json({
      from: base,
      to: target,
      amount: Number(amount),
      rate,
      result,
    });
} catch (error) {
    console.error("Error en la conversión de moneda:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};