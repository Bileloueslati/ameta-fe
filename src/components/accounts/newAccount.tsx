import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import UseAuth from '../../hooks/useAuth';
import { http } from '../../lib/http';
import { Compagny } from '../../types/api/compagny';
import { Listing } from '../../types/api/listing';
import { toast } from 'react-toastify';
import { User } from '../../types/api/user';

type Props = {
  swrKey: string;
};

export default function NewAccount({ swrKey }: Props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const { isSuperAdmin, compagny } = UseAuth();

  const { data: compagnies } = useSWR<Listing<Compagny>>('/compagnies');

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm();

  const onSubmit = async (formData: { [key: string]: string | number }) => {
    try {
      if (isSuperAdmin) {
        Object.assign(formData, { roles: [formData.role] });
      }

      if (!isSuperAdmin && compagny) {
        formData.compagny = compagny.id;
      }

      const { data: user } = await http.post<User>('/users', formData);

      mutate(swrKey);

      toast.success(`User ${user.firstName} successfully created`);

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
          <Form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
              controlId="email"
              label="Email"
              className={`${!isSuperAdmin ? 'col-span-2' : ''}`}>
              <Form.Control
                isInvalid={Boolean(errors.email)}
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
              />
            </FloatingLabel>

            {isSuperAdmin && (
              <FloatingLabel controlId="roles" label="Role">
                <Form.Select aria-label="Role" {...register('role')}>
                  <option value="ROLE_ADMIN">ADMIN</option>
                  <option value="ROLE_USER">USER</option>
                </Form.Select>
              </FloatingLabel>
            )}

            <FloatingLabel controlId="firstName" label="First name">
              <Form.Control
                isInvalid={Boolean(errors.firstName)}
                type="text"
                placeholder="First name"
                {...register('firstName', { required: true })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="lastName" label="Last name">
              <Form.Control
                isInvalid={Boolean(errors.lastName)}
                type="text"
                placeholder="Last name"
                {...register('lastName', { required: true })}
              />
            </FloatingLabel>

            <div className="col-span-2">
              <FloatingLabel controlId="password" label="Password">
                <Form.Control
                  isInvalid={Boolean(errors.plainPassword)}
                  type="password"
                  placeholder="Password"
                  {...register('plainPassword', { required: true, minLength: 6 })}
                />
              </FloatingLabel>
            </div>

            {isSuperAdmin && compagnies && compagnies['hydra:member'].length > 0 && (
              <div className="col-span-2">
                <FloatingLabel controlId="compagny" label="Compagny">
                  <Form.Select aria-label="Role" {...register('compagny', { required: true })}>
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
