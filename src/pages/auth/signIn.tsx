import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { http } from '../../lib/http';
import authActions from '../../store/auth/authAction';
import { UserAuthType } from '../../store/auth/authReducer';

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
            className="h-16 dark:opacity-0 relative z-30 mx-auto"
            alt=""
          />
          <img src="/img/white-logo.png" className="h-16 absolute inset-0 z-20 mx-auto" alt="" />
        </div>
        <div className="bg-white rounded-xl py-8 px-10 flex flex-col shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-primary font-bold font-gotham">Welcome Back !</h3>
            <h4>Sign in to continue to Ameta.</h4>
          </div>

          {maxAttempts > attempts && (
            <>
              <ErrorMessage
                errors={errors}
                name="credentials"
                render={({ message }) => (
                  <div className="bg-red-600 text-white px-2 py-3 text-center mb-3">{message}</div>
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
                  Login
                </Button>
              </Form>
            </>
          )}
        </div>
        <div className="text-xm mt-3 flex justify-end">Forget password ?</div>
      </div>
    </div>
  );
}
