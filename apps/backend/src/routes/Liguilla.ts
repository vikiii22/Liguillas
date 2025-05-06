import { Router } from "express";
import { getTitulo } from "../controllers/LiguillaController";

const router = Router();

router.get("/titulo/:id", getTitulo);

export default router;