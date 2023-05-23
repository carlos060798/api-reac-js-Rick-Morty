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