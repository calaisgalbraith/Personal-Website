import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import './ImageModal.css'

function ImageModal({show, handleClose, src}) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Image src={src}></Image>
        </Modal>
    );
}

export default ImageModal;
  