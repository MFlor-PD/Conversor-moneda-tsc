import { Router } from "express";
import { getHistoricalData } from "../controllers/historicalController.js";

const router = Router();

router.get("/", getHistoricalData);

export{ router as historicalRoute };