import React, { useRef, useState } from "react";
import { Button, Form, Message, Container, Segment } from "semantic-ui-react";

import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";

import "./login.css";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const { setIsAuthenticated } = useAuth();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setIsAuthenticated(true);
      history.push("/u/");
    } catch {
      setMessage("Failed to log in");
      setIsAuthenticated(false);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="login">
        <div id="signinContainer">
          <Container fluid>
            <Segment.Group>
              <Segment>
                <h2>Login page</h2>

                {message && <Message warning={true}>{message}</Message>}
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <label>Email Address:</label>
                    <input
                      name="email"
                      type="email"
                      pattern=".+@mail.wit.ie"
                      placeholder="Email Address"
                      maxlength="20"
                      ref={emailRef}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password:</label>
                    <input
                      name="passwordOne"
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>
                      Need an account?{" "}
                      <Link
                        target="_blank"
                        to={{
                          pathname: "https://www.witconnect.ie/signup",
                        }}
                      >
                        Sign Up
                      </Link>
                    </label>
                  </Form.Field>
                  <Button
                    disabled={loading}
                    className="btnSignIn"
                    type="submit"
                  >
                    Log In
                  </Button>
                </Form>
              </Segment>
            </Segment.Group>
          </Container>
        </div>
      </div>
    </>
  );
}
