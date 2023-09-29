import { useState } from 'react';
import Button from '../../ui/Button';
import CheckBox from '../../ui/CheckBox';
import GoogleAuthButton from '../../ui/GoogleAuthButton';
import Input from '../../ui/Input';
import { Form, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-[75dvh] items-center justify-center">
      <div className="w-full max-w-lg">
        <Form className="flex flex-col rounded-3xl px-5 py-5 shadow-md">
          <h1 className="mb-3 text-lg font-medium">Log In</h1>
          <Input labelText="Email" name="email" type="text" />
          <Input
            labelText="Password"
            name="password"
            type={!showPassword ? 'password' : 'text'}
          />
          <CheckBox
            labelText="Show password?"
            name="showPassword"
            value={showPassword ? 'on' : 'off'}
            onChange={() => setShowPassword((value) => !value)}
          />
          <div className="mt-12 flex items-center justify-between">
            <div>
              <Button
                type="secondary-small"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                Forgot Password
              </Button>
              <span className="ml-2"></span>
              <Button type="secondary-small" to="/signup">
                Sign Up
              </Button>
            </div>
            <Button type="primary">Log In</Button>
          </div>
          <span className="mx-auto mt-2">or</span>
          <GoogleAuthButton />
        </Form>
      </div>
    </div>
  );
}

export default Login;
