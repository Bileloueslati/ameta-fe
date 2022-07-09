import { Modal } from 'flowbite-react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { SheetT } from '../../types/api/sheet';

type Props = {
  show: boolean;
  setShow: (value: boolean) => void;
  sheet: SheetT;
};

export default function SheetViewModal({ show, setShow, sheet }: Props) {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onClose={handleClose} size="5xl">
      <Modal.Header>
        <span className="font-gotham font-medium">Sheet {sheet.id}</span>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="grid grid-cols-3 gap-x-6">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((el, i) => (
              <FloatingLabel key={i} controlId={el} label={el} className="mb-3">
                <Form.Control type="text" placeholder="ID" />
              </FloatingLabel>
            ))}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
