import { Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { If, Then, Else } from 'react-if';

export default function ForgetPasswordModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const hide = () => setShow(false);

  const [email, setEmail] = useState<null | string>(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    setEmail(data.email);
  };

  useEffect(() => {
    if (!show) {
      reset();
    }
  }, [show, reset]);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Forget password ?
      </Button>

      <Modal show={show} onClose={hide}>
        <Modal.Header>
          <span className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
            Reset password
          </span>
          <span className="text-[0.9rem] text-gray-500 block">
            You will receive an e-mail to with instructions to reset your password shortly.
          </span>
        </Modal.Header>

        <Modal.Body>
          <If condition={isSubmitSuccessful}>
            <Then>
              <p className="font-gotham font-medium text-lg text-center">
                We just sent you an email to <span className="font-bold">{email}</span> to reset
                your password.
              </p>
            </Then>

            <Else>
              <Form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel controlId="username" label="Email" className="mb-3">
                  <Form.Control
                    isInvalid={Boolean(errors.email)}
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                  />
                </FloatingLabel>
                <div className="flex justify-center">
                  <Button
                    variant="outline-primary"
                    type="submit"
                    className="inline-flex"
                    disabled={isSubmitting}>
                    <span>Send email</span>
                  </Button>
                </div>
              </Form>
            </Else>
          </If>
        </Modal.Body>
      </Modal>
    </>
  );
}
