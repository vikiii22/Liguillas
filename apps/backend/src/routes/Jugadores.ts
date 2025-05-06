import { Router } from "express";
import Jugador from "../models/Jugador";
import Equipo from "../models/Equipo";

const router = Router();

router.get("/", async (_req, res) => {
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
});

export default router;