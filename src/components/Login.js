import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const history= useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log in</h2>
            {error ? (
              <Alert variant="danger">{JSON.stringify(error)}</Alert>
            ) : (
              ""
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={emailRef} type="email" required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log in
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account?<Link to="/signup"> Sign up!</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
