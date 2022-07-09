import dayjs from 'dayjs';
import useSWR from 'swr';
import NewAccount from '../../components/accounts/newAccount';
import NewCompagny from '../../components/accounts/newCompagny';
import Card from '../../components/common/card';
import DefaultLayout from '../../components/layouts/defaultLayout';
import { Listing } from '../../types/api/listing';
import { Users } from '../../types/api/user';

export default function Accounts() {
  const { data } = useSWR<Listing<Users>>('/users');

  return (
    <DefaultLayout>
      <Card>
        <div className="flex justify-between items-center pb-3 border-b mb-8 border-slate-100 dark:border-slate-700">
          <h2 className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
            All accounts
          </h2>
          <div className="flex gap-x-6">
            <NewCompagny />
            <NewAccount />
          </div>
        </div>
        <table className="datatable">
          <thead>
            <tr>
              <th>Created On</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Compagny</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data['hydra:member'].map((user) => (
                <tr key={user.id}>
                  <td>{dayjs(user.createdAt).format('DD/MM/YYYY')}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user?.compagny?.name || 'NA'}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Card>
    </DefaultLayout>
  );
}
