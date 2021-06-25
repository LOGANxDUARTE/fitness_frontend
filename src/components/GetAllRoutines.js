import React, { useEffect } from "react";

import { getRoutines } from "../api";

const GetAllRoutines = (props) => {
  const { routines, setRoutines } = props;

  useEffect(() => {
    getRoutines()
      .then((Routines) => {
        setRoutines(Routines);
      })
      .catch(console.error);
  });

  return (
    <ul>
      {routines.map((routine, index) => {
        return (
          <li key={index}>
            Routine {index + 1}
            <ul>
              <li>{routine.creatorName}</li>
              <li>{routine.name}</li>
              <li>{routine.goal}</li>
              {/* <li>{routine.activities}</li>
              <li>{routine.activities.count}</li>
              <li>{routine.activities.duration}</li> */}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default GetAllRoutines;