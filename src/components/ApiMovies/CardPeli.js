import React from "react";
import "./Movies.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CardPeli = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="CardDePeli">
      <a onClick={handleShow}>
        <div>
          <div className="imgPeliTwo">
            <img className="imgPeli" src={props.Imagen} alt="" />
          </div>
          {/* <div className="titleCard">
            <p>{props.Title}</p>
          </div> */}
        </div>
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="ModalMovie" closeButton>
          <Modal.Title>
            <i>{props.Title}</i>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="ModalMovie">
          <div className="text-center">
            <div>
              <img className="w-50" src={props.Imagen} alt="" />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="ModalMovie">
          <Button variant="success">
            <b>Ver Pelicula</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CardPeli;
