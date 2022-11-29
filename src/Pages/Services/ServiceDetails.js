import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, title, description, price } = useLoaderData();

  return (
    <div className="container">
      <h1 className="text-center my-5 text-decoration-underline">
        Service Details and Customer Reviews
      </h1>
      <div className="row">
        <div className="col mx-5 border border-2">
          <h2 className="text-center text-decoration-underline py-3">
            Service Details
          </h2>
          <div className="p-3">
            <p className="fw-bold">{title}</p>
            <p>
              <small>{description}</small>
            </p>
            <p>
              <small className="fw-bold">Price: ${price}</small>
            </p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary px-4">Checkout Now</button>
            </Link>
          </div>
        </div>
        <div className="col mx-5 border border-2">
          <h4 className="text-center text-decoration-underline py-3">
            Your Reviews
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
