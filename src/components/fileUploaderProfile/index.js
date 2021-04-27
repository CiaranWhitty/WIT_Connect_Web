import React, { useState } from "react";
import app from "../../firebase/firebase";
import { Button, Card } from "semantic-ui-react";
import "./fileUploader.css";

export default function FileUploader({ user, userId }) {
  const [loading, setLoading] = useState(false);

  const storageRef = app.storage().ref(`Users/ProfilePictures`);

  const uploadFile = () => {
    const uploader = document.getElementById("uploader");
    const file = document.getElementById("files").files[0];

    const thisRef = storageRef.child(userId);
    const task = thisRef.put(file);

    task.on(
      "state_Changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
        setLoading(true);
      },

      function error(err) {},
      function complete() {
        const userRef = app.database().ref("Users").child(user.id);
        storageRef
          .child(userId)
          .getDownloadURL()
          .then((url) => {
            userRef.update({
              profileImage: url,
            });
          });
        setLoading(false);
      }
    );
  };

  return (
    <>
      <Card.Content>
        <div className="fileUploader">
          <img id="picture" alt="Profile_Image" src={user.profileImage} />
          <input type="file" id="files" name="Files[]" multiple />
          <progress value="0" max="100" id="uploader">
            0%
          </progress>
          <Button
            onClick={uploadFile}
            size="big"
            color="blue"
            disabled={loading}
          >
            Upload Profile Picture
          </Button>
        </div>
      </Card.Content>
    </>
  );
}
