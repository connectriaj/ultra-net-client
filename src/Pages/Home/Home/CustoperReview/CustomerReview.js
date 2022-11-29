import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CustomerReview = () => {
  return (
    <div className="container mt-5 d-grid">
      <h1 className="text-center my-5 text-decoration-underline">
        Customer Reviews
      </h1>
      <CardGroup>
        <Card className="mx-4 rounded-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Card.Body>
            <Card.Title>Hasina Khan </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <p className="ms-3">
            Rating:{" "}
            <small className="text-warning">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </small>
          </p>
        </Card>
        <Card className="mx-4 rounded-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Card.Body>
            <Card.Title>Nasima Begum</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <p className="ms-3">
            Rating:{" "}
            <small className="text-warning">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </small>
          </p>
        </Card>
        <Card className="mx-4 rounded-3">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80"
          />
          <Card.Body>
            <Card.Title>David Silva</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <p className="ms-3">
            Rating:{" "}
            <small className="text-warning">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </small>
          </p>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CustomerReview;
