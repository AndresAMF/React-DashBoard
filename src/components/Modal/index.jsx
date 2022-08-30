import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function More({
  name,
  location,
  picture,
  age,
  email,
  phone,
  cell,
  registered,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cleanedDate = new Date(registered.date).toLocaleDateString();
  const mailTo = 'mailto:'+email

    

  
  return (
    <>
      <Button className="button-info"  onClick={handleShow}>
        More Info
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header  className="modal-header">
          <Modal.Title>
            {name.title + ". " + name.first + " " + name.last + " " + age.age}
          </Modal.Title>
          <p className="modal-location">
            {location.street.number +
              " " +
              location.street.name +
              ", " +
              location.city +
              ", " +
              location.state +
              ", " +
              location.country}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="body-container">
            <div className="img-container">
              <img
                className="img"
                src={picture.large}
                alt={name.first + " " + name.last}
              />
            </div>
            <div className="contacts-container">
              <div className="contacts-element">
                <FontAwesomeIcon className="contacts-icon" icon={faEnvelope} />
                {email}
              </div>
              <div className="contacts-element">
                <FontAwesomeIcon className="contacts-icon" icon={faPhone} />
                {phone}
              </div>
              <div className="contacts-element">
                <FontAwesomeIcon
                  className="contacts-icon"
                  icon={faMobileScreen}
                />
                {cell}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <div className="register-date">Joined: {cleanedDate}</div>
          <div className="buttons">
            <Button className="button-close" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="button-close" variant="secondary" href={mailTo}>
              Send Mail
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default More;
