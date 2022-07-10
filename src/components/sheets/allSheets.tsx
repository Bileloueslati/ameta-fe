import useSWR from 'swr';
import UseAuth from '../../hooks/useAuth';
import { Listing } from '../../types/api/listing';
import { SheetT } from '../../types/api/sheet';
import Card from '../common/card';
import NewSheetModal from './crud/newSheetModal';
import SheetRow from './sheetRow';

export default function AllSheets() {
  const { isSuperAdmin } = UseAuth();

  const { data: sheets } = useSWR<Listing<SheetT>>('/sheets');

  if (!sheets) return null;

  return (
    <>
      <Card>
        <div className="flex justify-between items-center pb-3 border-b mb-8 border-slate-100 dark:border-slate-700">
          <h2 className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
            All sheets
          </h2>

          {!isSuperAdmin && (
            <div>
              <NewSheetModal />
            </div>
          )}
        </div>

        {sheets['hydra:member'].length ? (
          <table className="datatable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created On</th>
                <th>Creator</th>
                <th>Shippement date</th>
                <th>Plate</th>
                <th>Way</th>
                <th>Atvyl REF</th>
                <th>Last modifier</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sheets['hydra:member'].map((sheet) => (
                <SheetRow sheet={sheet} key={sheet.id.toString()} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="dark:text-slate-200 text-center font-medium">No sheet found</div>
        )}
      </Card>
    </>
  );
}
