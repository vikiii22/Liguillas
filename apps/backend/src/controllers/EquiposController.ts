import { Request, Response } from "express";
import Equipo from "../models/Equipo";

export const getEquiposByLiguilla = async (req: Request, res: Response) => {
  const { idLiguilla } = req.params;
  const equipos = await Equipo.find({ idLiguilla });
  res.json(equipos);
};