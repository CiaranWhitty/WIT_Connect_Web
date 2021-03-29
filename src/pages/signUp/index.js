import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  Message,
  Container,
  Segment,
  Select,
} from "semantic-ui-react";
import app from "../../firebase/firebase"
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import date from 'date-and-time';

import "./signup.css";

export default function Signup() {
  const nameRef = useRef();
  const courseRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, send_verification } = useAuth();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState();

  const now = new Date();
  const creationDate = date.format(now, 'ddd, MMM DD YYYY');
  
  const history = useHistory();

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const createUser = () => {
    const userRef = app.database().ref("Users");
    
    const users = {
      name,
      email,
      course,
      creationDate,
    };

    userRef.push(users);
  };

  const CourseOptions = [
    { key: "C1", value: "c1", text: "Course 01" },
    { key: "C2", value: "c2", text: "Course 02" },
  ];

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
      createUser();
      setMessage("Congratulations Account created");
      history.push("/login");
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
                    <label>Name:</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      onChange={handleOnChangeName}
                      ref={nameRef}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Email Address:</label>
                    <input
                      name="email"
                      type="email"
                      pattern=".+@mail.wit.ie"
                      placeholder="200*****@mail.wit.ie"
                      onChange={handleOnChangeEmail}
                      ref={emailRef}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Course:</label>
                    <Select
                      id="formSelect"
                      placeholder="Select your Course"
                      options={CourseOptions}
                      onChange={(e, { value }) => setCourse( value )}  
                      ref={courseRef}
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
