import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceMenu = ({ service }) => {
  const { title, img, price, rating, description } = service;

  return (
    <div className="col">
      <Card>
        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img variant="top" style={{ height: "250px" }} src={img} />
          </PhotoView>
        </PhotoProvider>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 100 ? (
              <p>
                {description.slice(0, 250) + "..."}
                <Link to="/services/:_id">Reade More</Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between mt-4">
          <div className="ms-3 mb-3">
            <h5>Price: ${price}</h5>
            <h6>Rating: {rating}</h6>
          </div>
          <div className="me-3">
            <Link to="/services">
              <button className="btn btn-primary px-4">Show More</button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceMenu;
