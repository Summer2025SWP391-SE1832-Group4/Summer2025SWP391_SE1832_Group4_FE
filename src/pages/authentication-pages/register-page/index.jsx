import { Link } from 'react-router-dom';
import './index.scss';
import { Form, Input } from 'antd';

const Register = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Call registration API here
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <span className="register-subtitle">Create a new account</span>

        <Form layout="vertical" className="register-form" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Invalid email format!' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item>
            <button  className="register-btn">
              Create Account
            </button>
          </Form.Item>
        </Form>

        <div className="register-links">
          <Link to="/login-page">Already have an account?</Link>
          <Link to="/forgotpassword-page">Forgot password</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
