// eslint-disable-next-line react/prop-types
function Search({ setSearch, updatePageNumber }) {
  let btnSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className=" d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control col-md-6"
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
        />

        <button onClick={btnSearch} className=" btn btn-primary fs-5 mx-5">
        Search
        </button>
        </div>
      </form>
    </>
  );
}

export default Search;
