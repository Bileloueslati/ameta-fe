import { Dispatch, SetStateAction } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { Compagny } from '../../types/api/compagny';
import { Listing } from '../../types/api/listing';
import Card from '../common/card';
import qs from 'qs';
import { removeEmptyProperties } from '../../helper/fc';

type Props = {
  swrKey: string;
  setSwrKey: Dispatch<SetStateAction<string>>;
};

export default function UsersFilter({ swrKey, setSwrKey }: Props) {
  const { handleSubmit, register, reset } = useForm();

  const { data: compagnies } = useSWR<Listing<Compagny>>('/compagnies');

  const onSubmit = (data: { [key: string]: string }) => {
    const filledData = removeEmptyProperties(data);

    const qsSearch = qs.stringify(filledData);

    setSwrKey((key) => `/users?${qsSearch}`);
  };

  const resetForm = () => {
    setSwrKey('/users');

    reset();
  };

  return (
    <Card>
      <Card.Header title="Filter Users" />
      <Card.Body>
        <Form className="grid grid-cols-4 gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel controlId="compangy" label="Compangy">
            <Form.Select aria-label="Compangy" {...register('compagny')}>
              {compagnies &&
                compagnies['hydra:member'].map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel controlId="firstName" label="First name">
            <Form.Control type="text" placeholder="First name" {...register('firstName')} />
          </FloatingLabel>

          <FloatingLabel controlId="lastName" label="Last name">
            <Form.Control type="text" placeholder="Last name" {...register('lastName')} />
          </FloatingLabel>

          <FloatingLabel controlId="email" label="Email">
            <Form.Control type="text" placeholder="Email" {...register('email')} />
          </FloatingLabel>

          <div className="lg:col-span-4 flex justify-center gap-x-6">
            <Button variant="outline-primary" onClick={resetForm}>
              Reset
            </Button>
            <Button type="submit">Search</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
