import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { http } from '../../lib/http';
import authActions from '../../store/auth/authAction';
import { UserAuthType } from '../../store/auth/authReducer';
import Spinner from 'react-bootstrap/Spinner';
import ForgetPasswordModal from '../../components/auth/forgetPasswordModal';

export default function SignIn() {
  const {
    handleSubmit,
    register,
    clearErrors,
    setError,
    formState: { isSubmitting, errors }
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clearCredentialError = () => {
    clearErrors('credentials');
  };

  const [attempts, setAttempts] = useState<number>(0);

  const maxAttempts = 3;

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      const { data } = await http.post<UserAuthType>('/login', formData);

      dispatch(authActions.login(data));

      navigate('/sheets');
    } catch (err: any) {
      setAttempts((attempts) => attempts + 1);

      setError('credentials', {
        message: err?.response?.data?.message || 'An error occurred',
        type: 'invalid credentials'
      });
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="lg:w-1/3 w-full mx-auto px-8">
        <div className="relative flex mb-4">
          <img
            src="/img/dark-logo.png"
            className="h-16 lg:h-20 dark:opacity-0 relative z-30 mx-auto"
            alt=""
          />
          <img
            src="/img/white-logo.png"
            className="h-16 lg:h-20 absolute inset-0 z-20 mx-auto"
            alt=""
          />
        </div>
        <div className="bg-white dark:bg-dark rounded-xl py-8 px-10 flex flex-col shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-primary font-bold font-gotham">Welcome Back !</h3>
            <h4 className="dark:text-slate-200">Sign in to continue to Ameta.</h4>
          </div>

          {maxAttempts > attempts ? (
            <>
              <ErrorMessage
                errors={errors}
                name="credentials"
                render={({ message }) => (
                  <div className="text-primary font-gotham font-medium text-center mb-3">
                    {message}
                  </div>
                )}
              />

              <Form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel controlId="username" label="Email" className="mb-3">
                  <Form.Control
                    isInvalid={!!errors.username}
                    type="email"
                    placeholder="Email"
                    {...register('username', { required: true })}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="password" label="Password" className="mb-3">
                  <Form.Control
                    isInvalid={!!errors.username}
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                  />
                </FloatingLabel>

                <Button
                  type="submit"
                  onClick={clearCredentialError}
                  className="bg-primary text-white px-6 py-2 rounded-lg"
                  disabled={isSubmitting}>
                  {isSubmitting && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="mr-2"
                    />
                  )}
                  <span>Login</span>
                </Button>
              </Form>
            </>
          ) : (
            <div className="text-red-600 font-gotham font-medium text-center">
              Login attempt limit reached
            </div>
          )}
        </div>
        <div className="relative mt-3">
          <div className="absolute inset-0 top-1/2 w-full h-[2px] bg-slate-200 z-20"></div>
          <div className="text-sm z-20 relative table mx-auto bg-slate-100 dark:text-slate-200 dark:bg-fullDark px-4">
            <ForgetPasswordModal />
          </div>
        </div>
      </div>
    </div>
  );
}
