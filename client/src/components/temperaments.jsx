import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../store/actions";
import Dog from "./dog";

export default function Dogs() {
  let dogs = useSelector((state) => state.dogs);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, []);
  console.log(dogs);
  return (
    <div>
      {dogs.map((eachDog) => {
        return (
          <Dog
            key={eachDog.id}
            name={eachDog.name}
            image={eachDog.image}
            weight={eachDog.weight}
          />
        );
      })}
    </div>
  );
}
