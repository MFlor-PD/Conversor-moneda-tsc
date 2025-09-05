import { type Request, type Response } from "express";
import type { HistoricalResponse } from "../models/CurrencyData.js";
import { api } from "../api/axios.js";

export const getHistoricalData = async (req: Request, res: Response) => {
    const { date, base_currency, currencies } = req.query;

    if (!date) {
        return res.status(400).json({ error: "Missing required parameter: date" });
    }

    const baseCurrencyNormalized = (base_currency as string)?.toUpperCase();
    const currenciesNormalized = (currencies as string)
        ?.split(",")
        .map(c => c.trim().toUpperCase())
        .join(",");

    try {
        const response = await api.get<HistoricalResponse>("/historical", {
            params: {
                date,
                base_currency: baseCurrencyNormalized,
                currencies: currenciesNormalized,
            },
        });

        return res.json(response.data);
    } catch (error) {
        console.error("Error fetching historical data:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
