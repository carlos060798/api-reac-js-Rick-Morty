
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../componetes/card/Card";
import InputGroup from "../componetes/filters/catage/InputGroup";

export default function Location() {
  //estos estados para que podamos retener y cambiar información crucial para obtener datos de nuestra api
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let consulta = await Promise.all(
        data.residents.map((resultados) => {
          return fetch(resultados).then((res) => res.json());
        })
      );
      setResults(consulta);
    })();
  }, [api]);

  return (
    <>
          <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
    </>
  );
}
