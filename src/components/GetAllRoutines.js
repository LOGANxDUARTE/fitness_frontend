import React, { useEffect } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
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

  const renderRoutines = (routines, index) => {
    return (
      <div className="card-container">
    <Card className="card">
      <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="Card image cap" />
      <CardBody key={index}>
        <CardTitle tag="h5">{routines.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{routines.creatorname}</CardSubtitle>
        <CardText>{routines.goal}</CardText>
        <Button>Add to Routine</Button>
      </CardBody>
    </Card>
    </div>
    );
  };

  const mappedRoutines = routines.map(renderRoutines);

    return <div className="App">
      {mappedRoutines}
    </div>


  // return (
  //   <ul>
  //     {routines.map((routine, index) => {
  //       return (
  //         <li key={index}>
  //           Routine {index + 1}
  //           <ul>
  //             <li>{routine.creatorName}</li>
  //             <li>{routine.name}</li>
  //             <li>{routine.goal}</li>
  //             {/* <li>{routine.activities}</li>
  //             <li>{routine.activities.count}</li>
  //             <li>{routine.activities.duration}</li> */}
  //           </ul>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};

export default GetAllRoutines;