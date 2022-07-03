import { Button, FloatingLabel, Form } from "react-bootstrap";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="lg:w-1/3 mx-auto">
        <img
          src="/img/atvyl-logo.jpg"
          className="block mx-auto mb-6 h-16"
          alt=""
        />
        <div className="bg-white rounded-xl py-8 px-10 flex flex-col shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-primary font-bold font-gotham">
              Welcome Back !
            </h3>
            <h4>Sign in to continue to Ometa.</h4>
          </div>

          <Form className="flex flex-col justify-center">
            <FloatingLabel controlId="username" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
