// IMPORTACION DE ESTILOS DE BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//IMPORTACION DE COMPONETES
import { useEffect, useState } from "react";
import Search from "./componetes/Search/Search";
import Card from "./componetes/card/Card";
import Filter from "./componetes/filters/Filters";
import Navbar from "./componetes/navbar/Navar";
import Pagination from "./componetes/Pagination/Pagination";

function App() {
  //usemos el hook useState. Esto almacenará los datos en una variable, y tendremos una clave de función para cambiar los datos de la variable cada vez que el hook useEffect obtenga nuevos datos.
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData; // dessestructuracion del objeto inicial de consulta de la api

  //Estamos escribiendo el hook useEffect y poniendo el observador en api. Esto significa que, en caso de que cambie la variable api, queremos
  let api = `https://rickandmortyapi.com/api/character/?page=1`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <>
      <div className="App">
        <h1 className="text-center mb-3">Characters</h1>
        <div className="container d-flex">
          <div className="row">
            Filter component will be placed here
            <div className="col-lg-8 col-12">
              <div className="row">
                <Card results={results} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
