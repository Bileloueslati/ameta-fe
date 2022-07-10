import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { places } from '../../../data/places';
import UseAuth from '../../../hooks/useAuth';
import { http } from '../../../lib/http';
import { mutate } from 'swr';
import { toast } from 'react-toastify';

export default function NewSheetModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const { id: userId } = UseAuth();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm();

  const onSubmit = async (data: { [key: string]: string }): Promise<void> => {
    try {
      await http.post('/sheets', { ...data, creator: userId, lastModifier: userId });
      await mutate('/sheets');
      toast.success('Sheet successfully created');
      handleClose();
    } catch (e: any) {}
  };

  return (
    <>
      <Button onClick={handleShow}>
        <FontAwesomeIcon size="sm" icon={faPlus as IconProp} />
        <span className="ml-2">New sheet</span>
      </Button>

      <Modal size="4xl" show={show} onClose={handleClose}>
        <Modal.Header>
          <span className="font-gotham font-meidum">Create new sheet</span>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"
            onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel controlId="plate" label="Plate">
              <Form.Control
                isInvalid={Boolean(errors.plate)}
                type="text"
                placeholder="Plate"
                {...register('plate', { required: true })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="way" label="Way">
              <Form.Control
                isInvalid={Boolean(errors.way)}
                type="text"
                placeholder="Way"
                {...register('way', { required: true })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="from" label="From">
              <Form.Select aria-label="From" {...register('fromPlace', { required: true })}>
                {places.map((place, i) => (
                  <option key={i} value={place}>
                    {place}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="to" label="To">
              <Form.Select aria-label="To" {...register('toPlace', { required: true })}>
                {places.map((place, i) => (
                  <option key={i} value={place}>
                    {place}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="agent" label="Agent">
              <Form.Select aria-label="Agent" {...register('agent', { required: true })}>
                <option value="Lusocargo">Lusocargo</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="trailerOwner" label="Trailer owner">
              <Form.Select
                aria-label="Trailer owner"
                {...register('trailerOwner', { required: true })}>
                <option value="Atvyl">Atvyl</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="shipementDate" label="Shipement Date">
              <Form.Control
                isInvalid={Boolean(errors.way)}
                type="date"
                {...register('shipementDate', { required: true })}
              />
            </FloatingLabel>

            <div className="lg:col-span-2 mt-4">
              <div className="flex justify-center gap-x-6">
                <Button variant="outline-primary" onClick={handleClose}>
                  <span className="px-4">Cancel</span>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  <span className="px-4">Create</span>
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
