import React, { useState, useEffect } from "react";
import app from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Segment } from "semantic-ui-react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";

export default function UserDetails() {
  const [userList, setUserList] = useState([]);

  const { currentUser } = useAuth();
  const currentUserEmail = currentUser.email;

  useEffect(
    () => {
      const userRef = app.database().ref("Users");
      userRef.on("value", (snapshot) => {
        const users = snapshot.val();
        console.log(snapshot.val());
        const userList = [];
        for (let id in users) {
          userList.push({ id, ...users[id] });
        }

        setUserList(
          userList.filter((user) => user.userEmail === currentUserEmail)
        );
        console.log(userList);
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {userList.map((user) => (
        <>
          <Segment.Group>
            <Segment>
              <div id="profileHeader">
                <header>
                  <div>
                    <img
                      alt="Profile_Image"
                      src="https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg"
                    />

                    <div>
                      <a href="/u/update-profile">
                        <h1>{<h1>{user.name}</h1> || <h1>(Name)</h1>}</h1>
                      </a>
                      <h5>
                        {<small>{user.course}</small> || (
                          <small>(Course)</small>
                        )}
                      </h5>
                    </div>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillTwitterCircle />
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${currentUser.email}`}>
                          <AiOutlineMail />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </header>
              </div>
            </Segment>
          </Segment.Group>
        </>
      ))}
    </>
  );
}
