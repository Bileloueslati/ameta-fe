import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Card from '../common/card';

export default function SheetsFilter() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: { [key: string]: string }) => {
    const filledData = Object.fromEntries(Object.entries(data).filter(([_, v]) => Boolean(v)));

    console.log(filledData)

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
            <Form.Control type="text" placeholder="ID" {...register('id')} />
          </FloatingLabel>

          <FloatingLabel controlId="plate" label="Plate" className="mb-3">
            <Form.Control type="text" placeholder="Plate" {...register('plate')} />
          </FloatingLabel>

          <FloatingLabel controlId="way" label="Way" className="mb-3">
            <Form.Control type="text" placeholder="Way" {...register('way')} />
          </FloatingLabel>

          <div className="col-span-1 col-start-4 flex justify-end mt-3">
            <Button type="submit">
              <FontAwesomeIcon icon={faSearch as IconProp} />
              <span className="ml-2">Search</span>
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
