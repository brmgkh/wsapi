import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const UserCard = ({ user }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
        style={{ width: "50%", margin: "10px auto" }}
      />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>{user.name}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user.phone}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.website}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
