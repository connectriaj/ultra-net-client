import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Partners = () => {
  return (
    <div className="container mt-5 d-grid">
      <h1 className="text-center my-5 text-decoration-underline">
        Our Partners
      </h1>
      <CardGroup>
        <Card className="mx-4 rounded-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Card.Body>
            <Card.Title>Link-3 </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-4 rounded-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Card.Body>
            <Card.Title>D-link</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-4 rounded-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          />
          <Card.Body>
            <Card.Title>TP-link</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Partners;
