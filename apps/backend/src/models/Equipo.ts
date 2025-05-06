import { Schema, model } from "mongoose";

const EquipoSchema = new Schema({
  id: String,
  nombre: String,
  idLiguilla: String,
});

export default model("Equipo", EquipoSchema, "equipos");