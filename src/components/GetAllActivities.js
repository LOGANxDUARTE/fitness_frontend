import React, { useEffect } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./GetAllActivities.css";

import { getActivities } from "../api";

const ShowCards = (props) => {
  const { activities, setActivities } = props;

    useEffect(() => {
      getActivities()
        .then((activities) => {
          setActivities(activities);
        })
        .catch(console.error);
    });

    const renderCard = (activity, index) => {
      return (
        <div className="card-container">
      <Card className="card">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody key={index}>
          <CardTitle tag="h5">{activity.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{activity.description}</CardText>
          <Button>Add to Routine</Button>
        </CardBody>
      </Card>
      </div>
      );
    };

    return <div className="App">
      {activities.map(renderCard)}</div>;
  };

export default ShowCards;