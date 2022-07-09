import NewAccount from '../../components/accounts/newAccount';
import NewCompagny from '../../components/accounts/newCompagny';
import Card from '../../components/common/card';
import DefaultLayout from '../../components/layouts/defaultLayout';

export default function Accounts() {
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
              <th>Compagny</th>
              <th>Email</th>
              <th>Country</th>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(new Array(10)).map((_, i) => (
              <tr key={i}>
                <td>03/09/2021</td>
                <td>LUSOCARGO</td>
                <td>contact@lusocargo.com</td>
                <td>Spain</td>
                <td>5</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </DefaultLayout>
  );
}
