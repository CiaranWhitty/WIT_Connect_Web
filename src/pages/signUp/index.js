import React, { useRef, useState } from "react";
import { Button, Form, Message, Container, Segment } from "semantic-ui-react";

import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

import "./signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, send_verification } = useAuth();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setMessage("Passwords do not match");
    }

    try {
      setMessage("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      send_verification();
      setMessage("Congratulations Account created");
    } catch {
      setMessage("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="signUp">
        <div id="signupContainer">
          <Container fluid>
            <Segment.Group>
              <Segment>
                <h2>SignUp</h2>
                {/* testing user */}
                {/* {currentUser.email} */}
                {message && <Message warning={true}>{message}</Message>}
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <label>Email Address:</label>
                    <input
                      name="email"
                      type="email"
                      pattern=".+@mail.wit.ie"
                      placeholder="Email Address"
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
                    <label>Confirm Password:</label>
                    <input
                      name="passwordTwo"
                      type="password"
                      placeholder="Confirm Password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>
                      Already have an account? <Link to="/login">Log In</Link>
                    </label>
                  </Form.Field>
                  <Button
                    disabled={loading}
                    className="btnSignUp"
                    type="submit"
                  >
                    Sign Up
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
