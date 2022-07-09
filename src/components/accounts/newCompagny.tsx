import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { countryListAlpha3 } from '../../data/countries';
import { http } from '../../lib/http';

export default function NewCompagny() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const countries = Object.entries(countryListAlpha3);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm();

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      await http.post('/compagnies', formData);
      mutate('/compagnies');
      handleClose();
    } catch (e: any) {}
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <FontAwesomeIcon size="sm" icon={faPlus as IconProp} />
        <span className="ml-2">New Compagny</span>
      </Button>

      <Modal size="4xl" show={show} onClose={handleClose}>
        <Modal.Header>
          <span className="font-gotham font-meidum">Create new Compagny</span>
        </Modal.Header>
        <Modal.Body>
          <Form className="grid grid-cols-2 gap-x-4" onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel controlId="name" label="Name" className="mb-3">
              <Form.Control
                isInvalid={Boolean(errors.name)}
                type="text"
                placeholder="Name"
                {...register('name', { required: true })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="country" label="Country" className="mb-3">
              <Form.Select aria-label="Country" {...register('country')}>
                {countries.map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>

            <div className="col-span-2">
              <FloatingLabel controlId="address" label="Address">
                <Form.Control
                  as="textarea"
                  placeholder="Compagny Address"
                  style={{ height: '100px' }}
                  {...register('address')}
                />
              </FloatingLabel>
            </div>

            <div className="col-span-2 mt-4">
              <Button type="submit" className="table mx-auto" disabled={isSubmitting}>
                <span className="px-4">Create</span>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
