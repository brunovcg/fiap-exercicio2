import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import Button from "../../components/Button";
import { useModal } from "../../provider/modal";

const ModalCustom = () => {
  const { show, setShow, modalTitle, modalContent, modalButtons, closeButton } =
    useModal();

  return ReactDOM.createPortal(
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
      <Modal.Footer>
        {modalButtons.map((item, index) => (
          <Button
            key={index}
            onClick={item.onClick}
            width="45px"
            height="45px"
            color={item.color}
            backgroundColor={item.backgroundColor}
          >
            {item.text}
          </Button>
        ))}
        {closeButton && (
          <Button
            backgroundColor="var(--green)"
            color="var(--white)"
            width="80px"
            height="45px"
            onClick={() => setShow(false)}
          >
            Voltar
          </Button>
        )}
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
};

export default ModalCustom;
