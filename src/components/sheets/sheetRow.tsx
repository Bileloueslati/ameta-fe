import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { SheetT } from '../../types/api/sheet';
import Date from '../common/date';
import SheetHeaderModal from './sheetHeaderModal';
import SheetViewModal from './sheetViewModal';

export default function SheetRow({ sheet }: { sheet: SheetT }) {
  const [showHeader, setShowHeader] = useState(false);

  const [show, setShow] = useState(false);

  const handleShowHeader = () => setShowHeader(true);

  const handleShow = () => setShow(true);

  return (
    <>
      <tr>
        <td>
          <span className="text-[11px]">{sheet.reference}</span>
        </td>
        <td>
          <Date date={sheet.createdAt} />
        </td>
        <td className="flex flex-col gap-y-1">
          <span className="uppercase">{sheet.creator?.compagny?.name}</span>
          <span className="capitalize">{sheet.creator.fullName}</span>
        </td>
        <td>
          <Date date={sheet.shipementDate} />
        </td>
        <td>{sheet.plate}</td>
        <td>{sheet.way}</td>
        <td>AyvylRef</td>
        <td className="flex flex-col gap-y-1">
          <span className="uppercase">{sheet.lastModifier?.compagny?.name}</span>
          <span className="capitalize">{sheet.lastModifier.fullName}</span>
        </td>
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

      <SheetHeaderModal {...{ showHeader, setShowHeader, sheet }} />

      <SheetViewModal {...{ show, setShow, sheet }} />
    </>
  );
}
