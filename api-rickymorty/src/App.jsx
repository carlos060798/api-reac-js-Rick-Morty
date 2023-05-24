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
import CardDetails from "./componetes/card/CardDetails";

function App() {
  return (
    <>
     <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
