import React, { useState } from "react";
import "./Styles/profile.css";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "21%",
    left: "90%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Profiel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handlePopup = () => {
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg nav">
        <div class="container-fluid">
          <div className="header">Profile</div>
          <span className="fa-solid fa-language logo"></span>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <div>
              <h4 className="choose-language-heading">choose your language</h4>
              <div className="language-wrapper">
                <div className="choose-lang">
                  <div className="langauge-name">A</div>
                  <div className="style-langauge">English</div>
                </div>
                <div className="choose-lang">
                  <div className="langauge-name">आ</div>
                  <div className="style-langauge">Hindi</div>
                </div>
                <div className="choose-lang">
                  <div className="langauge-name">मा</div>
                  <div className="style-langauge">Marati</div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </nav>
    </div>
  );
};

export default Profiel;
