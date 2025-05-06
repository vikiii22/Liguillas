import { Router } from "express";
import { getJornadasByLiguilla } from "../controllers/JornadasController";

const router = Router();

router.get("/liguilla/:idLiguilla", getJornadasByLiguilla);

export default router;