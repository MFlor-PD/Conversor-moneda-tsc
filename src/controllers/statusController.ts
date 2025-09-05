import { type Request, type Response } from "express";
import { api } from "../api/axios.js";
import type { StatusResponse, Month  } from "../models/CurrencyData.js";

export async function getStatus(req: Request, res: Response): Promise<void> {
  try {
    const response = await api.get<StatusResponse>("/status");
    const monthData: Month = response.data.quotas.month;
    
    const monthNames = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const today = new Date();
    const currentMonth = monthNames[today.getMonth()];
    const currentYear = today.getFullYear();

   
    res.status(200).json({
      month: `${currentMonth} ${currentYear}`,
      total: monthData.total,
      used: monthData.used,
      remaining: monthData.remaining
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching API status" });
  }
}