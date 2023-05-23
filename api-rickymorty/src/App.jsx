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

  // para mantener nuestras palabras clave de búsqueda y el número de página actual 
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  // hooks para almacenar nuestro estado, género y especie. 
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  //Estamos escribiendo el hook useEffect y poniendo el observador en api. Esto significa que, en caso de que cambie la variable api, queremos
  /*link original de api=https://rickandmortyapi.com/api/character/?page=1
  se modifican  agrega ?page=${pageNumber} para obtener un numero de pagina // &name=${search} para obtener un personaje por referencia
  se modifica  agrega &status=${status}&gender=${gender}&species=${species} para ,manejar los filtros
  */
 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <>
      <div className="App container">
        <Navbar/>
        <h1 className="text-center mb-3">Characters</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <div className=" d-flex">
          <div className="row">
          <Filter pageNumber={pageNumber} status={status}updateStatus={updateStatus}updateGender={updateGender}updateSpecies={updateSpecies}updatePageNumber={updatePageNumber}
/>
            <div className="col-lg-8 col-12">
              <div className="row">
                <Card results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber}/>
      </div>
    </>
  );
}

export default App;
