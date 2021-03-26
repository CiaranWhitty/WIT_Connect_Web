import React, { useRef, useState } from "react";
import { Button, Form, Message, Container, Segment } from "semantic-ui-react";

import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function UpdatePassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updatePassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/u/profile");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const cancelBtn = () => {
    history.push("/u/update-profile");
  };

  return (
    <>
      <div id="Forms">
        <Container fluid>
          <Segment.Group>
            <Segment>
              <h2>Update Password</h2>
              {/* testing user */}
              {/* {currentUser.email} */}
              {error && <Message warning={true}>{error}</Message>}
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Email Address:</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    defaultValue={currentUser.email}
                    ref={emailRef}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password:</label>
                  <input
                    name="passwordOne"
                    type="password"
                    placeholder="Leave blank to keep the same"
                    ref={passwordRef}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password:</label>
                  <input
                    name="passwordTwo"
                    type="password"
                    placeholder="Leave blank to keep the same"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Field>

                <Button
                  positive
                  disabled={loading}
                  className="btnSignUp"
                  type="submit"
                >
                  Update
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
