import React, { useState } from "react";
import { Modale } from "../lib/Modal";
import "./App.css";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const modalStyle = {
    background: "#4343ab",
    margin: "auto",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "80%",
    padding: "0.5rem",
    border: "1px solid white",
  };

  const modalHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.2rem 0.5rem 1.5rem",
  };

  const titleStyle = {
    color: "pink",
  };

  const modalBodyStyle = {
    fontSize: "20px",
    color: "red",
    textAlign: "center",
  };

  const modalFooterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "2rem",
  };

  const xButtonStyle = {
    fontSize: "1rem",
    fontWeight: "700",
    color: "rgb(39, 39, 39)",
    cursor: "pointer",
    border: "none",
    background: "transparent",
  };

  const footerButton1Style = {
    background: "yellow",
    color: "red",
    width: "20%",
    cursor: "pointer",
    padding: "0.5rem",
    margin: "0.5rem",
    border: "1px solid rgb(39, 39, 39)",
  };

  const footerButton2Style = {
    background: "lightblue",
    color: "red",
    width: "50%",
    cursor: "pointer",
    padding: "0.5rem",
    margin: "0.5rem",
    border: "1px solid rgb(39, 39, 39)",
  };

  return (
    <div className="App">
      <button
        className="modal-toggle"
        onClick={() => setDisplayModal(true)}
      >
        show modal
      </button>
      <Modale
        modalStyle={modalStyle}
        modalHeaderStyle={modalHeaderStyle}
        titleStyle={titleStyle}
        modalBodyStyle={modalBodyStyle}
        modalFooterStyle={modalFooterStyle}
        xButtonStyle={xButtonStyle}
        footerButton1Style={footerButton1Style}
        footerButton2Style={footerButton2Style}
        title="Enter your modal title here"
        message="Hello, your message here"
        showModal={displayModal}
        hideModal={() => setDisplayModal(false)}
        buttonText="Ok"
      />
    </div>
  );
}

export default App;
