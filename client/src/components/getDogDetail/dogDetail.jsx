import React from "react";

export default function DogDetail({ name, image, weight, temperament }) {
  return (
    <div className={style.divOrder}>
      <div className={style.imgContainer}>
        <img className={style.imgDogs} src={image} alt="" value={name} />
      </div>

      <div className={style.dataOrder}>
        <h3>{name}</h3>
        <p>Metric: {weight}</p>
        <p>{temperament}</p>
      </div>
    </div>
  );
}
