import { useEffect, useState } from "react";

type Clasificacion = {
  _id: string;
  pos: number;
  equipo: string;
  ganados: number;
  perdidos: number;
  partidos: number;
  setsFavor: number;
  setsContra: number;
  diferencia: number;
};

export default function ClasificacionList() {
  const [clasificacion, setClasificacion] = useState<Clasificacion[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/clasificacion")
      .then(res => res.json())
      .then(setClasificacion);
  }, []);

  return (
    <div>
      <h2>Clasificación</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Equipo</th>
            <th>G</th>
            <th>P</th>
            <th>PR</th>
            <th>+Sets</th>
            <th>-Sets</th>
            <th>Dif</th>
          </tr>
        </thead>
        <tbody>
          {clasificacion.map(c => (
            <tr key={c._id}>
              <td style={{ textAlign: "center" }}>{c.pos}</td>
              <td>{c.equipo}</td>
              <td style={{ textAlign: "center" }}>{c.ganados}</td>
              <td style={{ textAlign: "center" }}>{c.perdidos}</td>
              <td style={{ textAlign: "center" }}>{c.partidos}</td>
              <td style={{ textAlign: "center" }}>{c.setsFavor}</td>
              <td style={{ textAlign: "center" }}>{c.setsContra}</td>
              <td style={{ textAlign: "center" }}>{c.diferencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}