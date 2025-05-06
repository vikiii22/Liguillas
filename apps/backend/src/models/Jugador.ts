import { Schema, model } from "mongoose";

const JugadorSchema = new Schema({
  id: String,
  nombre: String,
  equipoId: String,
  imagen: String,
});

export default model("Jugador", JugadorSchema, "jugadores");