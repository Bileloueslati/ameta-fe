import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import { http } from '../../lib/http';
import { Compagny } from '../../types/api/compagny';
import { Listing } from '../../types/api/listing';

export default function NewAccount() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const { data: compagnies } = useSWR<Listing<Compagny>>('/compagnies');

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm();

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      Object.assign(formData, { roles: [formData.role] });

      await http.post('/users', formData);

      mutate('/users');

      handleClose();
    } catch (e: any) {}
  };

  return (
    <>
      <Button onClick={handleShow}>
        <FontAwesomeIcon size="sm" icon={faPlus as IconProp} />
        <span className="ml-2">New account</span>
      </Button>

      <Modal size="4xl" show={show} onClose={handleClose}>
        <Modal.Header>
          <span className="font-gotham font-meidum">Create new account</span>
        </Modal.Header>
        <Modal.Body>
          <Form className="grid grid-cols-2 gap-x-4" onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control
                isInvalid={Boolean(errors.email)}
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="roles" label="Role">
              <Form.Select aria-label="Role" {...register('role')}>
                <option value="ROLE_ADMIN">ADMIN</option>
                <option value="ROLE_USER">USER</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="firstName" label="First name" className="mb-3">
              <Form.Control
                isInvalid={Boolean(errors.firstName)}
                type="text"
                placeholder="First name"
                {...register('firstName', { required: true })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="lastName" label="Last name" className="mb-3">
              <Form.Control
                isInvalid={Boolean(errors.lastName)}
                type="text"
                placeholder="Last name"
                {...register('lastName', { required: true })}
              />
            </FloatingLabel>

            <div className="col-span-2">
              <FloatingLabel controlId="password" label="Password" className="mb-3">
                <Form.Control
                  isInvalid={Boolean(errors.plainPassword)}
                  type="password"
                  placeholder="Password"
                  {...register('plainPassword', { required: true, minLength: 6 })}
                />
              </FloatingLabel>
            </div>

            {compagnies && compagnies['hydra:member'].length > 0 && (
              <div className="col-span-2">
                <FloatingLabel controlId="compagny" label="Compagny">
                  <Form.Select aria-label="Role" {...register('compagny')}>
                    {compagnies['hydra:member'].map((compagny) => (
                      <option key={compagny.id.toString()} value={compagny.id}>
                        {compagny.name}
                      </option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
              </div>
            )}

            <div className="col-span-2 mt-4">
              <Button type="submit" className="table mx-auto !px-8" disabled={isSubmitting}>
                Create
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
