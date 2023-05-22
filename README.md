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