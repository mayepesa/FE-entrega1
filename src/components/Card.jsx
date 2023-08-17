import React from "react";

const Card = ({ career, name, genre }) => {
  return (
    <div className="card">
      <h4>Se guardaron lo siguientes datos sobre ti:</h4>
      <p><b>Nombre:</b> {name}</p>
      <p><b>Carrera:</b> {career}</p>
      <p><b>Género musical:</b> {genre}</p>
    </div>
  );
};

export default Card;