import { Request, Response } from "express";
import Jugador from "../models/Jugador";
import Equipo from "../models/Equipo";

export const getJugadores = async (_req: Request, res: Response) => {
  const jugadores = await Jugador.find();
  const equipos = await Equipo.find();

  const equiposMap = new Map(equipos.map(e => [e.id, e.nombre]));

  const jugadoresConEquipo = jugadores.map(j => ({
    _id: j._id,
    nombre: j.nombre,
    equipo: equiposMap.get(j.equipoId) || "",
    imagen: j.imagen,
  }));

  res.json(jugadoresConEquipo);
};