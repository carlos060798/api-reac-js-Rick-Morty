/* eslint-disable react/prop-types */
import styles from "./Card.module.scss";

function Card({ results }) {
  // recibe los resultados de la consulta de la api
  let CardsGroup; // agrupa  los results en una varaible

  //valida si hay o no datos de la consylta del api
  if (results) {
    // si hay resultados itera el array de result y extrae las propiedades  de cada objeto  por personaje
    CardsGroup = results.map((result) => {
      let { id, image, name, status, location } = result; // desectucutacion de los objeto de cada dato del personaje

      // funcion para validar el Status de cada personaje

      const statusPersonaje = () => {
        switch (status) {
          case "Dead":
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-danger`}
              >
                {status}
              </div>
            );
          case "Alive":
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-success`}
              >
                {status}
              </div>
            );
          default:
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-secondary`}
              >
                {status}
              </div>
            );
        }
      };

      return (
        //creacion de card que conyinen los datos del personaje
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
      );
    });
  } else {
    CardsGroup = "No Characters Found :/";
  }

  return <>{CardsGroup}</>;
}

export default Card;
