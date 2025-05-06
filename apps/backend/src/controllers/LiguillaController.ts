import { Request, Response } from "express";
import Liguilla from "../models/Liguilla";

export const getTitulo = async (req: Request, res: Response) => {
  const liguilla = await Liguilla.findOne({ id: req.params.id }, { name: 1 });
  res.json({ titulo: liguilla?.name || "Sin título" });
};