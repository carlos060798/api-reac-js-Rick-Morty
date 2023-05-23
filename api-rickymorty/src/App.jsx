// IMPORTACION DE ESTILOS DE BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./app.css";
//IMPORTACION DE COMPONETES
import Navbar from "./componetes/navbar/Navar";

// componetes con las rutas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Episodes from "./rutas/episodes";
import Location from "./rutas/location";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/episodes" element={<Episodes />} />

          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
