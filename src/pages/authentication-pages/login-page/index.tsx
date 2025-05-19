import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [form] = Form.useForm();

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Chào Mừng Bạn Đã Trở Lại</h1>
        <div className="login-form-wrapper">
          <Form
            form={form}
            name="login"
            layout="vertical"
            className="login-form"
          >
            <Form.Item
              label="Địa chỉ email của bạn"
              name="email"
              rules={[{ required: true, message: 'Email không được bỏ trống' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="e.g. elon@gmail.com"
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu của bạn"
              name="password"
              rules={[{ required: true, message: 'Mật khẩu không được bỏ trống' }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                placeholder="e.g. ilovemangools123"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="login-button">
                Đăng Nhập
              </Button>
            </Form.Item>

            <div className="login-links">
              <Link to="/register-page">Chưa có tài khoản?</Link>
              <Link to="#">Quên mật khẩu?</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
