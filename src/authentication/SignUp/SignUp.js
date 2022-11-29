import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, googleLogin } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
    form.reset();
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-3">Sign Up</h1>
      <Form onSubmit={handleRegister} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          Already have an account?
          <Link to="/login"> Please Login</Link>
        </p>

        <Link to="/login">
          <Button className="px-4" variant="primary" type="submit">
            Sign Up
          </Button>
        </Link>
      </Form>
      <div className="text-center mt-5">
        <p>Or Using Google</p>
        <Link to="/login" onClick={handleGoogleLogin}>
          <button className="btn btn-danger">Google Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
