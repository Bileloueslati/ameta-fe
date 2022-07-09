import DefaultLayout from '../../components/layouts/defaultLayout';
import AllSheets from '../../components/sheets/allSheets';
import SheetsFilter from '../../components/sheets/sheetsFilter';

export default function Sheets() {
  return (
    <DefaultLayout>
      <div className='mb-6'><SheetsFilter /></div>
      <AllSheets />
    </DefaultLayout>
  );
}
