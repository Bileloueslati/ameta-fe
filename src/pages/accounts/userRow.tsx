import dayjs from 'dayjs';
import { ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { http } from '../../lib/http';
import { User } from '../../types/api/user';

export default function UserRow({ user }: { user: User }) {
  const [isActive, setIsActive] = useState(user.isActive);

  const handleChange = async () => {
    setIsActive(!isActive);

    await http.put(`/users/${user.id}`, {
      isActive: !isActive
    });
  };

  return (
    <tr key={user.id}>
      <td>{dayjs(user.createdAt).format('DD/MM/YYYY')}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user?.compagny?.name || 'NA'}</td>
      <td>
        <ToggleSwitch onChange={handleChange} checked={isActive} label={''} />
      </td>
    </tr>
  );
}
