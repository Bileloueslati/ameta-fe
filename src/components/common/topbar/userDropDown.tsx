import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'flowbite-react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import authActions from '../../../store/auth/authAction';

export default function UserDropDown() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Dropdown
      label={
        <>
          <FontAwesomeIcon icon={faUser as IconProp} />
        </>
      }>
      <Dropdown.Item>
        <Button onClick={logout}>
          <span className="dark:text-white">Logout</span>
        </Button>
      </Dropdown.Item>
    </Dropdown>
  );
}
