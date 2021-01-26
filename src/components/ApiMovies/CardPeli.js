import React from "react";
import "./Movies.css";

export default function CardPeli(props) {
  return (
    <div className="CardDePeli">
      <div>
        <div className="titleCard">
          <p>{props.Title}</p>
        </div>
        <img className="imgPeli" src={props.Imagen} alt="" />
      </div>
    </div>
  );
}
