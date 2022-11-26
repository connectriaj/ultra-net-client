import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    form.reset();
  };

  return (
    <div className="w-25 mx-auto">
      <h1 className="text-center mt-5">Please Login</h1>
      <Form onSubmit={handleLogin}>
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
          New to UltraNET?
          <Link to="/signup"> Please Register</Link>
        </p>

        <Link to="">
          <Button className="px-4" variant="primary" type="submit">
            Login
          </Button>
        </Link>
      </Form>
      <div className="text-center mt-5">
        <p>Or Using Google</p>
        <Link to="">
          <button className="btn btn-danger">Google Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;