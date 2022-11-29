import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="container w-50">
      <h2 className="text-center my-5 text-decoration-underline">
        Checkout page
      </h2>
      <Form className="border border-2 p-5 rounded-3">
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
                <Form.Control type="text" placeholder="First name" />
              </div>

              <div className="py-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="col-6">
              <div className="py-2">
                <Form.Label>Your Phone</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone number" />
              </div>

              <div className="py-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
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
          <FloatingLabel controlId="floatingTextarea2" label="Write here">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </div>

        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
