import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  Message,
  Container,
  Segment,
  Popup,
  Icon,
} from "semantic-ui-react";
import app from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import date from "date-and-time";

import "./signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, send_verification } = useAuth();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [course, setCourse] = useState();
  const [allowEmployers, setallowEmployers] = useState(false);
  const [publicAccount, setpublicAccount] = useState(true);

  const now = new Date();
  const creationDate = date.format(now, "ddd, MMM DD YYYY");

  const history = useHistory();

  const handleOnChangeFName = (e) => {
    setFName(e.target.value);
  };

  const handleOnChangeLName = (e) => {
    setLName(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleOnChangeCourse = (e) => {
    setCourse(e.target.value);
  };

  const createUser = () => {
    const userRef = app.database().ref("Users");

    const uId = userEmail.substring(0, 8);
    const name = fName + " " + lName;

    const profileImage =
      "https://res.cloudinary.com/a20085909/image/upload/v1617890932/profile-placeholder-genderless_w9v4r5.png";
      
    setallowEmployers(false);
    setpublicAccount(true);
    const user = {
      uId,
      fName,
      lName,
      name,
      profileImage,
      userEmail,
      course,
      creationDate,
      allowEmployers,
      publicAccount,
    };
    // console.log(user);

    userRef.push(user);
  };

  const CourseOptions = [
    {
      key: "DEFAULT",
      value: "DEFAULT",
      text: "Please Select Your Course",
    },
    {
      key: "SSD",
      value: "BSc (Hons) in Software Systems Development",
      text: "BSc (Hons) in Software Systems Development",
    },
    {
      key: "SCP",
      value: "BSc (Hons) in Social Care Practice",
      text: "BSc (Hons) in Social Care Practice",
    },
    {
      key: "Other",
      value: "Other",
      text: "Other",
    },
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
      createUser();
      send_verification();
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
                    <label>Name: </label>
                    <input
                      id="fName"
                      name="fname"
                      type="text"
                      placeholder="First Name"
                      onChange={handleOnChangeFName}
                      required
                    />
                    <input
                      id="lName"
                      name="lname"
                      type="text"
                      placeholder="last Name"
                      onChange={handleOnChangeLName}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>
                      Email Address:{" "}
                      <Popup
                        id="popups1"
                        trigger={<Icon name="help circle" />}
                        content="Enter Your Student Email: 200******@mail.wit.ie"
                        on="click"
                        hideOnScroll
                      />
                    </label>
                    <input
                      name="email"
                      type="email"
                      pattern=".+@mail.wit.ie"
                      placeholder="200*****@mail.wit.ie"
                      maxLength="20"
                      onChange={handleOnChangeEmail}
                      ref={emailRef}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>
                      Course:{" "}
                      <Popup
                        id="popups2"
                        trigger={<Icon name="help circle" />}
                        content="Please Choose Your Course"
                        on="click"
                        hideOnScroll
                      />
                    </label>
                    <select
                      id="formSelect"
                      name="courses"
                      placeholder="Select your Course"
                      onChange={handleOnChangeCourse}
                      required
                    >
                      {CourseOptions.map((CourseOptions) => (
                        <option value={CourseOptions.value}>
                          {CourseOptions.text}
                        </option>
                      ))}
                    </select>
                  </Form.Field>
                  <Form.Field>
                    <label>
                      Password:{" "}
                      <Popup
                        id="popups3"
                        trigger={<Icon name="help circle" />}
                        content="Your Password Must Be 6 Character or More"
                        on="click"
                        hideOnScroll
                      />
                    </label>
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
                      Confirm Password:{" "}
                      <Popup
                        id="popups4"
                        trigger={<Icon name="help circle" />}
                        content="Re-enter the Password From the Above Field"
                        on="click"
                        hideOnScroll
                      />
                    </label>

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
