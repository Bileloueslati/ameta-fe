import { ErrorMessage } from '@hookform/error-message';
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

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      const { data } = await http.post<UserAuthType>('/login', formData);

      dispatch(authActions.login(data));

      navigate('/sheets');
    } catch (err: any) {
      setError('credentials', {
        message: err?.response?.data?.message || 'An error occurred',
        type: 'invalid credentials'
      });
    }
  };
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="lg:w-1/3 w-full mx-auto px-8">
        <img src="/img/atvyl-logo.jpg" className="block mx-auto mb-6 h-16" alt="" />
        <div className="bg-white rounded-xl py-8 px-10 flex flex-col shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-primary font-bold font-gotham">Welcome Back !</h3>
            <h4>Sign in to continue to Ameta.</h4>
          </div>

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
        </div>
      </div>
    </div>
  );
}
