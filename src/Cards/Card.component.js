import React from "react";
import { Card, Button } from "react-bootstrap";
import MyButton from "../Bootstrap/Button";

const MyCard = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.pic} height="200" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.children}
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.button}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
