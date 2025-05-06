import { Router } from "express";
import Liguilla from "../models/Liguilla";

const router = Router();


router.get("/titulo/:id", async (req, res) => {
  const liguilla = await Liguilla.findOne({ id: req.params.id }, { name: 1 });
  res.json({ titulo: liguilla?.name || "Sin título" });
});

export default router;