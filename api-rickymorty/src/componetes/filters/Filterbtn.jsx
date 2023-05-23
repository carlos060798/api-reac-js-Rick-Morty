/* eslint-disable react/prop-types */

import "./filters.scss"

export default function FilterBtn({ input, task, updatePageNumber, index, name }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {" "}
          {input}{" "}
        </label>
      </div>
    </>
  );
}
  