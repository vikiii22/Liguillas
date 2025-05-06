import { useEffect, useState } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Equipos from "./components/EquiposList";
import Partidos from "./components/PartidosList";
import JugadoresList from "./components/JugadoresList";
import ClasificacionList from "./components/ClasificacionList";

function App() {
  const [titulo, setTitulo] = useState("Liguilla");

  useEffect(() => {
    fetch("http://localhost:3000/api/liguilla/titulo/b43e57ee11def14f1aad99235c4d5179")
      .then(res => res.json())
      .then(data => {
        if (data.titulo) {
          setTitulo(data.titulo);
          document.title = data.titulo;
        }
      });
  }, []);

  return (
    <div>
      <h1>{titulo}</h1>
      <Router>
        <nav style={{ display: "flex", gap: 20, padding: 16, borderBottom: "1px solid #ccc", marginBottom: 24 }}>
          <Link to="/equipos">Equipos</Link>
          <Link to="/partidos">Partidos</Link>
          <Link to="/jugadores">Jugadores</Link>
          <Link to="/clasificacion">Clasificación</Link>
        </nav>
        <Routes>
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/partidos" element={<Partidos />} />
          <Route path="/jugadores" element={<JugadoresList />} />
          <Route path="/clasificacion" element={<ClasificacionList />} />
          <Route path="*" element={<Partidos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
