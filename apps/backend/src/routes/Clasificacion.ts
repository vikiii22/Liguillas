import { Router } from "express";
import { getClasificacion } from "../controllers/ClasificacionController";

const router = Router();

router.get("/", getClasificacion);

export default router;