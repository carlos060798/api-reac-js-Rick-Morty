/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export default function InputGroup({ name, changeID, total }) {
  return (
    <>
   
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        
        {[...Array(total).keys()].map((number, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <option value={number + 1}>
              {name} - {number+ 1}
            </option>
          );
        })}
      </select>
    </div>
  
    </>
  );
}
