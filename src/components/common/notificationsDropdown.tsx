import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'flowbite-react';

export default function NotificationsDropdown() {
  return (
    <Dropdown
      label={
        <>
          <FontAwesomeIcon icon={faBell as IconProp} />
          <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center mx-auto text-[8px] absolute inset-x-0 -top-4">
            2
          </span>
        </>
      }>
      {Array.from({length: 4}).map((n, i) => (
        <Dropdown.Item key={i}>
          
          <span>LUSOCARGO sent you new Sheet</span>

        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
