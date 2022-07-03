import { Modal } from "flowbite-react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";

export default function NewAccount() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>
        <FontAwesomeIcon size="sm" icon={faPlus as IconProp} />
        <span className="ml-2">New account</span>
      </Button>

      <Modal size="4xl" show={show} onClose={() => setShow(false)}>
        <Modal.Header>
          <span className="font-gotham font-meidum">Create new account</span>
        </Modal.Header>
        <Modal.Body>
          <Form className="grid grid-cols-2 gap-x-4">
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel
              controlId="compagny"
              label="Compagny"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Compagny" />
            </FloatingLabel>

            <FloatingLabel controlId="phone" label="Phone" className="mb-3">
              <Form.Control type="text" placeholder="Phone" />
            </FloatingLabel>

            <FloatingLabel controlId="country" label="Country" className="mb-3">
              <Form.Control type="text" placeholder="Country" />
            </FloatingLabel>

            <div className="col-span-2">
              <Button type="submit" className="table mx-auto">
                <span className="px-4">Create</span>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
