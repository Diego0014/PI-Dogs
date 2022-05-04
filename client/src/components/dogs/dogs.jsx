import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../../store/actions";
import Dog from "../dog/dog";
import style from "../dogs/dogs.module.css"

export default function Dogs() {
  let dogs = useSelector((state) => state.dogs);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <div className={style.container} >
      {dogs.map((eachDog) => {
        return (
          <Dog
            key={eachDog.id}
            name={eachDog.name}
            image={eachDog.image}
            weight={eachDog.weight}
            temperament={eachDog.temperament}
          />
        );
      })}
    </div>
  );
}
