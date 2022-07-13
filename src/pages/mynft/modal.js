import React, { useEffect } from "react";
import Modal from "react-modal";
import "./modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalBuy(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);
  const [dataBuy, setDataBuy] = React.useState(props.dataBuy);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    setDataBuy(props.dataBuy);
    console.log("tesss databuy->", props.dataBuy);
  }, [props.dataBuy]);

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    props.onClose();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export { ModalBuy };
