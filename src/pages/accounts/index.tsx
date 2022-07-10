import useSWR from 'swr';
import NewAccount from '../../components/accounts/newAccount';
import NewCompagny from '../../components/accounts/newCompagny';
import Card from '../../components/common/card';
import DefaultLayout from '../../components/layouts/defaultLayout';
import UseAuth from '../../hooks/useAuth';
import { Listing } from '../../types/api/listing';
import { Users } from '../../types/api/user';
import Unauthorised from '../errors/unauthorised';
import UserRow from './userRow';
import { If, Then } from 'react-if';
import UsersFilter from '../../components/accounts/usersFilter';
import { useState } from 'react';

export default function Accounts() {
  const { id, isSuperAdmin, isAdmin, compagny } = UseAuth();

  const defaultKey = isSuperAdmin ? '/users' : `/users?compagny=${compagny?.id}`;

  const [swrKey, setSwrKey] = useState<string>(defaultKey);

  const { data } = useSWR<Listing<Users>>(swrKey);

  if (!isAdmin) return <Unauthorised />;

  return (
    <DefaultLayout>
      <If condition={isSuperAdmin}>
        <Then>
          <div className="mb-6">
            <UsersFilter {...{ swrKey, setSwrKey }} />
          </div>
        </Then>
      </If>

      <Card>
        <div className="flex justify-between items-center pb-3 border-b mb-8 border-slate-100 dark:border-slate-700">
          <h2 className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
            All accounts
          </h2>
          <div className="flex gap-x-6">
            {isSuperAdmin && <NewCompagny />}

            <NewAccount swrKey={swrKey} />
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
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data['hydra:member']
                .filter((user) => user.id !== id)
                .map((user) => <UserRow key={user.id.toString()} user={user} />)}
          </tbody>
        </table>
      </Card>
    </DefaultLayout>
  );
}
