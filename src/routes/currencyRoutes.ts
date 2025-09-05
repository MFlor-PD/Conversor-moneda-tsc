import { Router } from "express";
import { getAllCurrencies, getCurrency } from "../controllers/currencyController.js";

const router = Router();

router.get("/", getAllCurrencies);
router.get("/:query", getCurrency);

export default router;


