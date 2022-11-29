import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch(`https://ultra-net-server.vercel.app/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed successfully 😍");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="container w-50">
      <h2 className="text-center my-5 text-decoration-underline">
        Please add your review
      </h2>
      <Form
        onSubmit={handlePlaceOrder}
        className="border border-2 p-5 rounded-3"
      >
        <div className="mb-4">
          <h2 className="text-center">{title}</h2>
          <p className="text-center">
            <small>Price: ${price}</small>
          </p>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="row">
            <div className="col-6">
              <div className="py-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first"
                  type="text"
                  placeholder="First name"
                />
              </div>

              <div className="py-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="last" type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="col-6">
              <div className="py-2">
                <Form.Label>Your Phone</Form.Label>
                <Form.Control
                  name="phone"
                  type="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="py-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
          </div>
        </Form.Group>

        {/* comment box start from here */}
        <div className="my-3">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Write here your review"
          >
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              required
            />
          </FloatingLabel>
        </div>

        <Button className="w-100 mt-3" variant="primary" type="submit">
          Submit Your Review
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
