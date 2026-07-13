import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 export default function ChatModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
dialogClassName='chat-modal'
backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chronicle AI
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


