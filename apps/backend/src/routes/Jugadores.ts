import { Router } from "express";
import { getJugadores } from "../controllers/JugadoresController";

const router = Router();

router.get("/", getJugadores);

export default router;