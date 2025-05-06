import { Schema, model } from "mongoose";

const PartidoSchema = new Schema({
  equipoLocalId: String,
  equipoVisitanteId: String,
  idLiguilla: String,
  resultado: String,
});

const JornadaSchema = new Schema({
  jornada: Number,
  fecha: String,
  partidos: [PartidoSchema],
});

export default model("Jornada", JornadaSchema, "jornadas");