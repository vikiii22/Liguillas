import express from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import jugadoresRoutes from "./routes/Jugadores";
import liguillaRoutes from "./routes/Liguilla";

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (_req, res) => {
  res.send("Liguilla backend activo");
});

app.use("/api/jugadores", jugadoresRoutes);

app.use("/api/liguilla", liguillaRoutes);

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});
