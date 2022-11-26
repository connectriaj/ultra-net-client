import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 fw-bold">Services</h1>
      {services.map((service) => (
        <div key={service._id} service={service}>
          <div className="row">
            <div className="container col-8 my-4">
              <Card className="">
                <Card.Img
                  variant="top"
                  style={{ height: "250px" }}
                  src={service.img}
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-between mt-4">
                  <div className="ms-3 mb-3">
                    <h5>Price: ${service.price}</h5>
                    <h6>Rating: {service.rating}</h6>
                  </div>
                  <div className="me-3">
                    <Link to="/login">
                      <button className="btn btn-primary px-4">
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
