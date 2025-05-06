import { Router } from "express";
import { getEquiposByLiguilla } from "../controllers/EquiposController";

const router = Router();

router.get("/liguilla/:idLiguilla", getEquiposByLiguilla);

export default router;