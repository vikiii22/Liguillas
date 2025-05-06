import { Schema, model } from "mongoose";

const LiguillaSchema = new Schema({
    name: String,
    id: String,
    sport: String,
    personalization: Object
});

export default model("Liguilla", LiguillaSchema, "plataformas");