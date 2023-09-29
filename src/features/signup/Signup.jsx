import { Form, useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import CheckBox from '../../ui/CheckBox';
import Button from '../../ui/Button';
import { useState } from 'react';
import GoogleAuthButton from '../../ui/GoogleAuthButton';

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-2 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <Form className="flex flex-col rounded-3xl px-5 py-5 shadow-md">
          <h1 className="mb-3 text-lg font-medium">Sign Up</h1>
          <Input labelText="Full name" name="fullname" />
          <Input labelText="Email" type="email" name="email" />
          <Input
            labelText="Password"
            type={!showPassword ? 'password' : 'text'}
            name="password"
          />
          <Input
            labelText="Confirm password"
            type={!showPassword ? 'password' : 'text'}
            name="confirmPassword"
          />
          <CheckBox
            labelText="Show password?"
            name="showPassword"
            value={showPassword ? 'on' : 'off'}
            onChange={() => setShowPassword((value) => !value)}
          />
          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <span className="mb-3">
                Already have <br />
                an account?
              </span>
              <Button
                type="secondary-small"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
              >
                Log In
              </Button>
            </div>
            <span className="ml-2"></span>
            <Button type="primary">Sign Up</Button>
          </div>
          <span className="mx-auto mt-2">or</span>
          <GoogleAuthButton />
        </Form>
      </div>
    </div>
  );
}

export default Signup;
