/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../componetes/card/Card";
import InputGroup from "../componetes/filters/catage/InputGroup";

export default function Episodes() {
  //estos estados para que podamos retener y cambiar información crucial para obtener datos de nuestra api
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let consulta = await Promise.all(
        data.characters.map((resultados) => {
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
            Episode name :{" "}
            <span className="text-primary">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
        <div className="row">
  <div className="col-lg-3 col-12 mb-4">
    <h4 className="text-center mb-4">Pick Episode</h4>
    <InputGroup name="Episode" changeID={setID} total={51} />
  </div>
  <div className="col-lg-8 col-12">
    <div className="row">
      <Card results={results} />
    </div>
  </div>
</div>
      </div>
    </>
  );
}
