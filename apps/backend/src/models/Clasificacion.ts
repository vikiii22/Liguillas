import { Schema, model } from "mongoose";

const ClasificacionSchema = new Schema({
  pos: Number,
  equipo: String,
  ganados: Number,
  perdidos: Number,
  partidos: Number,
  setsFavor: Number,
  setsContra: Number,
  diferencia: Number,
});

export default model("Clasificacion", ClasificacionSchema, "clasificacion");