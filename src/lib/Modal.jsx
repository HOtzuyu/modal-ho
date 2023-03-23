import React from "react";

export const Modale = ({
  showModal,
  hideModal,
  message,
  title,
  modalStyle,
  modalHeaderStyle,
  titleStyle,
  modalBodyStyle,
  modalFooterStyle,
  xButtonStyle,
  footerButton1Style,
  footerButton2Style,
  buttonText,
}) => {
  return (
    showModal && (
      <>
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div
              className="modal"
              style={modalStyle}
            >
              <div
                className="modal-header"
                style={modalHeaderStyle}
              >
                <h3 style={titleStyle}>{title}</h3>
                <button
                  type="button"
                  style={xButtonStyle}
                  className="modal-close-button"
                  onClick={hideModal}
                >
                  X
                </button>
              </div>
              <div
                className="modal-body"
                style={modalBodyStyle}
              >
                {message}
              </div>
              <div
                className="modal-footer"
                style={modalFooterStyle}
              >
                <button
                  type="button"
                  className="modal-close-button-footer"
                  style={footerButton1Style}
                  onClick={hideModal}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};
