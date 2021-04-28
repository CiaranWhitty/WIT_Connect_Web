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

export default function Portfolios() {
  const { currentUser } = useAuth();
  const userEmail = currentUser.email;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [publicItem, setpublicItem] = useState(false);
  const [portfolioImage, setPortfolioImage] = useState(
    "https://res.cloudinary.com/a20085909/image/upload/v1570916144/yifz1tahn11luai14fis.png"
  );
  const [portfolioFile, setPortfolioFile] = useState("");

  const now = new Date();
  const creationDate = date.format(now, "ddd, MMM DD YYYY");

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeDescribe = (e) => {
    setDescription(e.target.value);
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
            setPortfolioImage(url);
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
            setPortfolioFile(url);
          });
      }
    );
    // Uploading file
  };

  const createPortfolio = () => {
    const portfolioRef = app.database().ref("Portfolio");

    const uId = userEmail.substring(0, 8);

    setpublicItem(false);

    const portfolio = {
      uId,
      userEmail,
      title,
      portfolioImage,
      portfolioFile,
      description,
      creationDate,
      year,
      publicItem,
    };

    portfolioRef.push(portfolio);
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
      <Grid centered columns={3}>
        <Grid.Column id="addToPortfolio" verticalAlign={"middle"}>
          <Button onClick={() => dispatch({ type: "OPEN_MODAL" })}>
            Add To Portfolio
          </Button>
          <Popup
            id="popups1"
            trigger={<Icon name="help circle" />}
            content="Used to Add Items to Your Portfolio"
            on="click"
            hideOnScroll
          />
        </Grid.Column>
      </Grid>

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
            required
          />
          <TextArea
            id="formTextArea"
            placeholder="Describe the Item..."
            onChange={handleOnChangeDescribe}
            style={{ minHeight: 100 }}
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
          />{" "}
          <progress value="0" max="100" id="uploader">
            0%
          </progress>
          <Divider />
          <Select
            id="formSelect"
            placeholder="Select your Year"
            onChange={(e, { value }) => setYear(value)}
            options={yearsOptions}
            required
          />
        </Modal.Content>

        <Modal.Actions>
          <Button positive onClick={createPortfolio}>
            Add item
          </Button>

          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
