import React, { useState } from "react";
import app from "../../../firebase/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import {
  Button,
  Modal,
  TextArea,
  Select,
  Grid,
  Popup,
  Icon,
  Divider,
} from "semantic-ui-react";

import "./style.css";
import date from "date-and-time";

function portfolioReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function Portfolios({ portfolio }) {
  const { currentUser } = useAuth();
  const userEmail = currentUser.email;

  const [editedTitle, setEditedTitle] = useState(portfolio.title);
  const [editedDescription, setEditedDescription] = useState(
    portfolio.description
  );
  const [editedYear, setEditedYear] = useState(portfolio.year);
  const [editedPortfolioFile, setEditedPortfolioFile] = useState(
    portfolio.portfolioFile
  );
  const [editedPortfolioImage, setEditedPortfolioImage] = useState(
    portfolio.portfolioImage
  );

  const now = new Date();
  const creationDate = date.format(now, "ddd, MMM DD YYYY");

  const handleOnChangeTitle = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleOnChangeDescribe = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleOnChangePI = (e) => {
    // Uploading image
    const storageRef = app.storage().ref(`Users/PortfolioItems/Images`);

    const uploader = document.getElementById("uploaderImage");
    const file = document.getElementById("filesI").files[0];

    const thisRef = storageRef.child(file.name);
    const task = thisRef.put(file);

    task.on(
      "state_Changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },

      function error(err) {},
      function complete() {
        storageRef
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setEditedPortfolioImage(url);
          });
      }
    );
    // Uploading image
  };

  const handleOnChangePF = (e) => {
    // Uploading file
    const storageRef = app.storage().ref(`Users/PortfolioItems/Files`);

    const uploader = document.getElementById("uploader");
    const file = document.getElementById("files").files[0];

    const thisRef = storageRef.child(file.name);
    const task = thisRef.put(file);

    task.on(
      "state_Changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },

      function error(err) {},
      function complete() {
        storageRef
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setEditedPortfolioFile(url);
          });
      }
    );
    // Uploading file
  };

  const editPortfolio = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const UpdatePortfolio = () => {
    const portfolioRef = app.database().ref("Portfolio").child(portfolio.id);

    portfolioRef.update({
      title: editedTitle,
      description: editedDescription,
      year: editedYear,
      portfolioImage: editedPortfolioImage,
      portfolioFile: editedPortfolioFile,
    });

    dispatch({ type: "CLOSE_MODAL" });
  };

  const [state, dispatch] = React.useReducer(portfolioReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  const yearsOptions = [
    { key: "y1", value: "y1", text: "First Year" },
    { key: "y2", value: "y2", text: "Second Year" },
    { key: "y3", value: "y3", text: "Third Year" },
    { key: "y4", value: "y4", text: "Fourth Year" },
  ];

  return (
    <div className="portfolioForm">
      <Button id="butnEdit" floated="right" onClick={editPortfolio}>
        <Icon name="edit" size={"large"} />
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Add an Item</Modal.Header>
        <Modal.Content>
          <input
            id="formTitle"
            type="text"
            placeholder="Title..."
            onChange={handleOnChangeTitle}
            defaultValue={portfolio.title}
            required
          ></input>
          <TextArea
            id="formTextArea"
            placeholder="Describe the Item..."
            onChange={handleOnChangeDescribe}
            style={{ minHeight: 100 }}
            defaultValue={portfolio.description}
            required
          />{" "}
          <Divider />
          <h2>Portfilio Image:</h2>
          <input
            type="file"
            id="filesI"
            name="files[]"
            onChange={handleOnChangePI}
            accept="image/*"
          />{" "}
          <progress value="0" max="100" id="uploaderImage">
            0%
          </progress>
          <Divider />
          <h2>Portfilio File:</h2>
          <input
            type="file"
            id="files"
            name="Files[]"
            onChange={handleOnChangePF}
          />
          <progress value="0" max="100" id="uploader">
            0%
          </progress>
          <Divider />
          <Select
            id="formSelect"
            placeholder="Select your Year"
            onChange={(e, { value }) => setEditedYear(value)}
            options={yearsOptions}
            defaultValue={portfolio.year}
            required
          />{" "}
        </Modal.Content>

        <Modal.Actions>
          <Button positive onClick={UpdatePortfolio}>
            Update item
          </Button>

          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
