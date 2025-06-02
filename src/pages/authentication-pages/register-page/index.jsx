import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { Form, Input } from 'antd';
import { toast } from 'react-toastify';
import { register } from '../../../apis/authenticationApi/registerApi';

const Register = () => {

   const navigate = useNavigate();

  const onFinish = async(values) => {
    try {
       const valuesWithDefaultId ={roleId:5,...values }
       const response = await register(valuesWithDefaultId)
       toast.success(response.data.message)
       navigate("/login-page")
    } catch (error) {
      toast.error(error.response.data.message)
    } 

    
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <span className="register-subtitle">Create a new account</span>





        <Form layout="vertical" className="register-form" onFinish={onFinish}>
           
           <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: 'Please enter your username!' },
              { type: 'username', message: 'Invalid username format!' },
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
         
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
            label="Fullname"
            name="fullName"
            rules={[
              { required: true, message: 'Please enter your fullname!' },
              { type: 'fullname', message: 'Invalid fullname format!' },
            ]}
          >
            <Input placeholder="Enter your fullname" />
          </Form.Item>

          <Form.Item
            label="PhoneNumber"
            name="phoneNumber"
            rules={[
              { required: true, message: 'Please enter your phoneNumber!' },
              { type: 'phoneNumber', message: 'Invalid phoneNumber format!' },
            ]}
          >
            <Input placeholder="Enter your phoneNumber" />
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
