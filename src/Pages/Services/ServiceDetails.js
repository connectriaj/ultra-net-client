import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const { _id, title, img, description, price } = useLoaderData();
  return (
    <div className="container">
      <h1 className="text-center my-5 text-decoration-underline">
        Service Details and Customer Reviews
      </h1>
      <div className="row">
        <div className="col-12 mx-5 border border-2">
          <h2 className="text-center text-decoration-underline py-3">
            Service Details
          </h2>
          <div className="p-3">
            <img
              className="mb-4"
              style={{ height: "200px", width: "100%" }}
              src={img}
              alt="img"
            />
            <p className="fw-bold">{title}</p>
            <p>
              <small>{description}</small>
            </p>
            <p>
              <small className="fw-bold">Price: ${price}</small>
            </p>
                  </div>
                  
              </div>
              <div className="px-5 ms-5 mt-4">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-success w-100">Add a review</button>
          </Link>
        </div>

        <div className="col12 my-5 rounded mx-5 border border-2">
          <h4 className="text-center text-decoration-underline py-3">
            Customer Reviews
          </h4>
          {reviews.map((review) => (
            <div key={review.service} review={review}>
              <div className="my-3 p-3 border ">
                <img src={user?.img} alt="" />
                <p>{review.customer}</p>
                <small>{review.message}</small>
              </div>
            </div>
          ))}
          {orders.map((order) => (
            <div>
              {user?.email ? (
                <div></div>
              ) : (
                <div className="my-3 p-3 border ">
                  <img src={user?.img} alt="" />
                  <p>{order.customer}</p>
                  <small>{order.message}</small>
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ServiceDetails;
