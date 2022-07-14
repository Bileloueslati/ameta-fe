import { Dispatch } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Card from '../common/card';
import qs from 'qs';

type Props = {
  setSwrKey: Dispatch<string>;
};

export default function SheetsFilter({ setSwrKey }: Props) {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data: { [key: string]: string }) => {
    const filledData = Object.fromEntries(Object.entries(data).filter(([_, v]) => Boolean(v)));

    const qsSearch = qs.stringify(filledData);

    setSwrKey(`/sheets?${qsSearch}`);
  };

  const resetForm = () => {
    setSwrKey('/sheets');

    reset();
  };

  return (
    <Card>
      <div className="flex justify-between items-center pb-3 border-b mb-8 border-slate-100 dark:border-slate-700">
        <h2 className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
          Filter sheets
        </h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-x-6">
          <FloatingLabel controlId="type" label="Type">
            <Form.Select aria-label="Type" {...register('type')}>
              <option value="1">Import</option>
              <option value="2">Export</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel controlId="id" label="ID" className="mb-3">
            <Form.Control type="text" placeholder="ID" {...register('reference')} />
          </FloatingLabel>

          <FloatingLabel controlId="plate" label="Plate" className="mb-3">
            <Form.Control type="text" placeholder="Plate" {...register('plate')} />
          </FloatingLabel>

          <FloatingLabel controlId="way" label="Way" className="mb-3">
            <Form.Control type="text" placeholder="Way" {...register('way')} />
          </FloatingLabel>

          <div className="col-span-1 col-start-4 flex justify-end mt-3">
            <div className="lg:col-span-4 flex justify-center gap-x-6">
              <Button variant="outline-primary" onClick={resetForm}>
                Reset
              </Button>
              <Button type="submit">Search</Button>
            </div>
          </div>
        </div>
      </Form>
    </Card>
  );
}
