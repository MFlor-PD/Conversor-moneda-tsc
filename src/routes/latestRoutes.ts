import { Router } from "express";
import { getLatest, currencyConvertor } from "../controllers/latestController.js";

const router = Router();

router.get("/", getLatest);
router.get("/convert", currencyConvertor);

export { router as latestRoute };
