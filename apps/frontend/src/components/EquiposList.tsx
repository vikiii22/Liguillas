import { useEffect, useState } from "react";

type Equipo = {
  _id: string;
  id: string;
  nombre: string;
  idLiguilla: string;
};

const ID_LIGUILLA = "b43e57ee11def14f1aad99235c4d5179";

export default function Equipos() {
  const [equipos, setEquipos] = useState<Equipo[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/equipos/liguilla/${ID_LIGUILLA}`)
      .then(res => res.json())
      .then(setEquipos);
  }, []);

  return (
    <div>
      <h2>Lista de Equipos</h2>
      <ul>
        {equipos.map(e => (
          <li key={e._id}>{e.nombre}</li>
        ))}
      </ul>
    </div>
  );
}