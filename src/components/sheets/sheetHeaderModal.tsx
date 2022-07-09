import { Modal } from 'flowbite-react';
import { SheetT } from '../../types/api/sheet';

type Props = {
  showHeader: boolean;
  setShowHeader: (value: boolean) => void;
  sheet: SheetT;
};

export default function SheetHeaderModal({ showHeader, setShowHeader, sheet }: Props) {
  const handleClose = () => setShowHeader(false);

  return (
    <Modal show={showHeader} onClose={handleClose}>
      <Modal.Header>
        <span className="font-gotham font-medium">Sheet {sheet.id}</span>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
}
