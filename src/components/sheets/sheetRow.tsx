import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SheetHeaderModal from './sheetHeaderModal';
import SheetViewModal from './sheetViewModal';

export default function SheetRow() {
  const [showHeader, setShowHeader] = useState(false);

  const [show, setShow] = useState(false);

  const handleShowHeader = () => setShowHeader(true);

  const handleShow = () => setShow(true);

  return (
    <>
      <tr>
        <td>S2017.110</td>
        <td>03/09/2021</td>
        <td>LUSOCARGO</td>
        <td>09/2022</td>
        <td>CA-158-VM</td>
        <td>South Bound</td>
        <td>M220257</td>
        <td>LUSOCARGO</td>
        <td>
          <ul className="list-inline flex gap-x-5">
            <li>
              <Button variant="link" onClick={handleShow}>
                <FontAwesomeIcon icon={faEye as IconProp} />
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={handleShowHeader}>
                <FontAwesomeIcon icon={faPen as IconProp} />
              </Button>
            </li>

            <li>
              <FontAwesomeIcon icon={faPrint as IconProp} />
            </li>
          </ul>
        </td>
      </tr>

      <SheetHeaderModal {...{ showHeader, setShowHeader, sheet: { id: 'S2017.110' } }} />

      <SheetViewModal {...{ show, setShow, sheet: { id: 'S2017.110' } }} />
    </>
  );
}
