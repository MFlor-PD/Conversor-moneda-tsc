import { Router } from "express";
import { getAllCurrencies } from "../controllers/currencyController.js";

const router = Router();

router.get("/", getAllCurrencies);

export default router;
