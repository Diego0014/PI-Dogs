import React from "react";
import style from "./dog.module.css";

export default function Temperament({ name }) {
  console.log(name);
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}