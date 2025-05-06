import { useEffect, useState } from "react";

type Jugador = {
  _id: string;
  nombre: string;
  // otros campos si los necesitas
};

type Equipo = {
  _id: string;
  nombre: string;
  jugadores: Jugador[];
  // otros campos si los necesitas
};

type Partido = {
  equipoLocal: Equipo;
  equipoVisitante: Equipo;
  resultado?: string;
  // otros campos si los necesitas
};

type Jornada = {
  _id: string;
  jornada: number;
  fecha: string;
  partidos: Partido[];
};

const ID_LIGUILLA = "b43e57ee11def14f1aad99235c4d5179";

export default function Partidos() {
  const [jornadas, setJornadas] = useState<Jornada[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/jornadas/liguilla/${ID_LIGUILLA}`)
      .then(res => res.json())
      .then(data => {
        setJornadas(data);
        if (data.length > 0) setSelected(data[0]._id);
      });
  }, []);

  const jornadaActual = jornadas.find(j => j._id === selected);

  return (
    <div>
      <h2>Lista de Partidos</h2>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        {jornadas.map(j => (
          <option key={j._id} value={j._id}>
            Jornada {j.jornada} - {j.fecha}
          </option>
        ))}
      </select>
      {jornadaActual && (
        <table style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>Local</th>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "40%" }}>Visitante</th>
            </tr>
          </thead>
          <tbody>
            {jornadaActual.partidos.map((p, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ textAlign: "right", padding: 8 }}>
                  <div style={{ fontWeight: "bold" }}>{p.equipoLocal?.nombre}</div>
                  <div style={{ fontSize: "0.8em", color: "#666" }}>
                    {p.equipoLocal?.jugadores.map(j => (
                      <span key={j._id} style={{ marginLeft: 4, marginRight: 4 }}>
                        {j.nombre}
                      </span>
                    ))}
                  </div>
                </td>
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  {p.resultado !== null && p.resultado !== undefined && p.resultado !== ""
                    ? p.resultado
                    : "vs"}
                </td>
                <td style={{ textAlign: "left", padding: 8 }}>
                  <div style={{ fontWeight: "bold" }}>{p.equipoVisitante?.nombre}</div>
                  <div style={{ fontSize: "0.8em", color: "#666" }}>
                    {p.equipoVisitante?.jugadores.map(j => (
                      <span key={j._id} style={{ marginLeft: 4, marginRight: 4 }}>
                        {j.nombre}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}