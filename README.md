# api-reac-js-Rick-Morty
PERSONAJES DE RICK AND MORTY
# script inicales requerido  para inicilizar el proyecto 

-- npm create vite@latest  // crear proyecto con vite y reac js
-- npm install gestioanr //las dependecias nesesarias para el proyecto 
-- npm run dev // correr la app
--npm install bootstrap // bostapt para los estilos del proyecto
--npm install @popperjs/core --save // para crear componenetes interactivos
--npm install sass // crear variables para las para los estilo de css 
--npm install react-router-dom // para crear  las rutas de la aplicacion
--npm install react-paginate --save // para manejar la paginacion  

# paginacion con React-paginate 

se importa en app.js el componete 
<Pagination
  info={info}
  pageNumber={pageNumber}
  updatePageNumber={updatePageNumber}
/> 

-- importamos los paquetes en el componente d epaginacion
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

-Aquí está lo más importante: vamos a agregar las funcionalidades a nuestro componente para que funcione correctamente 

  className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        // eslint-disable-next-line react/prop-types
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"  

# codigos de cada filtros

<div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBtn
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />  

--filtro de genero
<div className="accordion-body d-flex flex-wrap gap-3">
  {genders.map((items, index) => {
    return (
      <FilterBtn
        name="gender" index={index} key={index}
        updatePageNumber={updatePageNumber}
        task={updateGender} input={items}
      />
      );
    })}
  </div>
</div>  


# Cómo configurar React RouterAquí hay una demostración de nuestro componente de navegación:  

1- se crea la carpeta rutas para en rutar con los componetes  episodios y localitation 
2-Para declarar el enrutador y definir todo tipo de rutas de archivos, debemos importar react-router-dom
--import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
3-crea un nuevo componente Router y colóquelo dentro del componente Navbar. 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}
4-Ahora, necesitamos definir todas nuestras rutas. Recuerda, Routes es una colección de Route. La ruta es la ruta real del archivo.

Cada ruta requiere 2 cosas: el path al que conducirá la aplicación y el element que se cargará.  
<Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/episodes" element={<Episodes />} />

          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>

5-se crea labarra de navegacion en el componete Navbar
 <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand fs-3 ubuntu">
            Rick & Morty <span className="text-primary">WiKi</span>
          </Link>
        </div>
      </nav>  

# para visualizar la targeta de cada perosnaje individualmete
 Ahora, escribe este código en caso de que quieras mostrar el estado actual de cada personaje
 {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

A continuación, escribe este código para mostrar toda la información sobre el personaje: 

<div className="content">
  <div className="">
    <span className="fw-bold">Gender : </span>
    {gender}
  </div>
  <div className="">
    <span className="fw-bold">Location: </span>
    {location?.name}
  </div>
  <div className="">
    <span className="fw-bold">Origin: </span>
    {origin?.name}
  </div>
  <div className="">
    <span className="fw-bold">Species: </span>
    {species}
  </div>
</div> 

// // <Route path="/" element={<Home />} />

          <Route path="/episodes" element={<Episodes />} />

          <Route path="/location" element={<Location />} />
        </Routes> 



 <div
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {statusPersonaje()}
        </div>