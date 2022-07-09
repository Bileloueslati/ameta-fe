import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import Card from '../common/card';
import SheetRow from './sheetRow';

export default function AllSheets() {
  return (
    <>
      <Card>
        <div className="flex justify-between items-center pb-3 border-b mb-8 border-slate-100 dark:border-slate-700">
          <h2 className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
            All sheets
          </h2>
          <div>
            <Button>
              <FontAwesomeIcon size="sm" icon={faPlus as IconProp} />
              <span className="ml-2">New sheet</span>
            </Button>
          </div>
        </div>

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
            {Array.from(new Array(10)).map((_, i) => (
              <SheetRow key={i} />
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
