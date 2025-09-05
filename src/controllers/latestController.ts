import { type Request, type Response } from "express";
import type { LatestResponse } from "../models/CurrencyData.js";
import { api } from "../api/axios.js";

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