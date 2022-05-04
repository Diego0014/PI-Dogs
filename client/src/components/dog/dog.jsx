import React from "react";
import style from "../dog/dog.module.css";

export default function Dog({ name, image, weight, temperament }) {
  return (
    <div>
      <div className={style.divOrder}>
        <div>
          <img className={style.imgDogs} src={image} alt="" value={name} />
        </div>
        <div className={style.dataOrder}>
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <p>Metric: {weight}</p>
          </div>
          <div>
            <p>{temperament}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
