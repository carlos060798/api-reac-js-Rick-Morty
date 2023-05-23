/* eslint-disable react/prop-types */
import Gender from "./catage/Gender";
import Species from "./catage/Species";
import Status from "./catage/Status";

function Filter({
  // eslint-disable-next-line no-unused-vars
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) {
  //función para que podamos borrar nuestros filtros y actualizar la página
  function clearFilters() {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  }

  return (
    <>
      <div className="col-lg-3 col-12 mb-5">
        <div className="text-center fw-bold fs-4 mb-2">Filters</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={clearFilters}
          className="text-primary text-decoration-underline text-center mb-3"
        >
          {" "}
          Clear Filters{" "}
        </div>
        <div className="accordion" id="accordionExample">
          {/* Category components will be placed here */}
          <Status
  updatePageNumber={updatePageNumber}
  updateStatus={updateStatus}
/>
<Species
  updatePageNumber={updatePageNumber}
  updateSpecies={updateSpecies}
/>
<Gender
  updatePageNumber={updatePageNumber}
  updateGender={updateGender}
/>
        </div>
      </div>
    </>
  );
}

export default Filter;
