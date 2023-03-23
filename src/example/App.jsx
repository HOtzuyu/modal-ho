import React, { useState } from "react";
import Modal from "../lib/Modal";
const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {showModal ? (
        <Modal
          title="Modal Title"
          message="Modal Message"
          onClose={handleClose}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ParentComponent;
