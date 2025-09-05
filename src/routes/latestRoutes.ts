import { Router } from "express";
import { getLatest } from "../controllers/latestController.js";

const router = Router();

router.get("/", getLatest);

export{ router as latestRoute };
