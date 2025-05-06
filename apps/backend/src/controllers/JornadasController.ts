import { Request, Response } from "express";
import Jornada from "../models/Jornadas";
import Equipo from "../models/Equipo";
import Jugador from "../models/Jugador";

export const getJornadasByLiguilla = async (req: Request, res: Response) => {
  const { idLiguilla } = req.params;
  const jornadas = await Jornada.find({ "partidos.idLiguilla": idLiguilla }).lean();
  const equipos = await Equipo.find().lean();
  const jugadores = await Jugador.find().lean();

  const equiposMap = new Map(equipos.map(e => [e.id, e]));
  const jugadoresPorEquipo = jugadores.reduce((acc, jugador) => {
    if (jugador.equipoId) {
      const equipoId = String(jugador.equipoId);
      if (!acc[equipoId]) acc[equipoId] = [];
      acc[equipoId].push(jugador);
    }
    return acc;
  }, {} as Record<string, any[]>);

  const jornadasTransformadas = jornadas
    .map(jornada => ({
      ...jornada,
      partidos: jornada.partidos.map((partido: any) => {
        const equipoLocal = equiposMap.get(partido.equipoLocalId);
        const equipoVisitante = equiposMap.get(partido.equipoVisitanteId);
        return {
          ...partido,
          equipoLocal: {
            ...equipoLocal,
            jugadores: jugadoresPorEquipo[partido.equipoLocalId] || []
          },
          equipoVisitante: {
            ...equipoVisitante,
            jugadores: jugadoresPorEquipo[partido.equipoVisitanteId] || []
          }
        };
      })
    }))
    .sort((a, b) => (a.jornada ?? 0) - (b.jornada ?? 0));

  res.json(jornadasTransformadas);
};