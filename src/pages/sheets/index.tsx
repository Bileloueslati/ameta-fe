import DefaultLayout from '../../components/layouts/defaultLayout';
import AllSheets from '../../components/sheets/allSheets';

export default function Sheets() {
  return (
    <DefaultLayout>
      <div className="gap-y-8 flex flex-col">
      <AllSheets />
      </div>
    </DefaultLayout>
  );
}
