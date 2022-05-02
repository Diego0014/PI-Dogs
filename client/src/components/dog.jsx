import React from "react";
import style from "./dog.module.css";

export default function Dog({ name, image, weight, temperament }) {
  console.log(temperament);
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <img className={style.imgDogs} src={image} alt='' />
        <h4>Weight(kg): {weight}</h4>
        <div><h3>Temperament: {temperament}</h3></div>
      </div>
    </div>
  );
}
