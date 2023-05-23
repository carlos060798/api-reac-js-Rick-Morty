import  { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss"
// eslint-disable-next-line react/prop-types
function  Pagination ({ pageNumber, info, updatePageNumber }) { 
  
// función para manejar la función de cambio de página
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };
 //  componente de paginación sea adapte al tamaño de la pantalla
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>

      <ReactPaginate
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
      />
    </>
  );
}
  
  export default Pagination
  