import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './index.scss';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [form] = Form.useForm();

    return (
        <div className="register-page">
            <div className="register-container">
                <h1 className="register-title">Tạo Tài Khoản</h1>
                <div className="register-form-wrapper">
                    <Form
                        form={form}
                        name="register"
                        layout="vertical"
                        className="register-form"
                    >
                        <div className="form-columns">
                            <div className="form-column">
                                <Form.Item
                                    label="Tên người dùng"
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên của bạn' }]}
                                >
                                    <Input
                                        size="large"
                                        prefix={<UserOutlined />}
                                        placeholder="e.g. elonmusk"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Địa chỉ email"
                                    name="email"
                                    rules={[{ required: true, message: 'Email không được bỏ trống' }]}
                                >
                                    <Input
                                        size="large"
                                        prefix={<MailOutlined />}
                                        placeholder="e.g. elon@tesla.com"
                                    />
                                </Form.Item>
                            </div>

                            <div className="form-column">
                                <Form.Item
                                    label="Tên đầy đủ"
                                    name="fullname"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ của bạn' }]}
                                >
                                    <Input
                                        size="large"
                                        prefix={<UserOutlined />}
                                        placeholder="e.g. Elon Musk"
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
                                        placeholder="Tạo mật khẩu mạnh"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block className="register-button">
                                Đăng Ký
                            </Button>
                        </Form.Item>

                        <div className="register-links">
                            <Link to="/login-page">Bạn đã có tài khoản?</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
