import React, { useState } from "react";
import app from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Form, Segment, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function Updatedetails() {
  const history = useHistory();

  const { currentUser } = useAuth();
  const userEmail = currentUser.email;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleOnChangeCourse = (e) => {
    setCourse(e.target.value);
  };

  const createUser = () => {
    const userRef = app.database().ref("Users");

    const users = {
      userEmail,
      name,
      age,
      course,
    };

    userRef.push(users);
    history.push("/u/profile");
  };

  const cancelBtn = () => {
    history.push("/u/update-profile");
  };

  return (
    <>
      <div id="Forms">
        <Container fluid>
          <Segment.Group>
            <Segment>
              <h2>Update Details</h2>

              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name..."
                    value=""
                    onChange={handleOnChangeName}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Age</label>
                  <input
                    placeholder="Age..."
                    value=""
                    onChange={handleOnChangeAge}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Course</label>
                  <input
                    placeholder="Course..."
                    value=""
                    onChange={handleOnChangeCourse}
                    required
                  />
                </Form.Field>

                <Button positive className="btnSignUp" onClick={createUser}>
                  Submit
                </Button>

                <Button negative onClick={cancelBtn}>
                  Cancel
                </Button>
              </Form>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    </>
  );
}
