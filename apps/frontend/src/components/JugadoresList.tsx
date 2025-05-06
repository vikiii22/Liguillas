import { useEffect, useState } from "react";

type Jugador = {
  _id: string;
  id: string;
  nombre: string;
  equipo: string;
  imagen: string;
};

export default function JugadoresList() {
  const [jugadores, setJugadores] = useState<Jugador[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/jugadores")
      .then((res) => res.json())
      .then(setJugadores);
  }, []);

  return (
    <div>
      <h2>Lista de Jugadores</h2>
      <ul>
        {jugadores.map((j) => (
          <li key={j._id} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <img
              src={j.imagen ? j.imagen : "/default-avatar.png"}
              alt={j.nombre}
              width={40}
              height={40}
              style={{ borderRadius: "50%", marginRight: 8 }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/default-avatar.png";
              }}
            />
            <span>{j.nombre} - {j.equipo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}