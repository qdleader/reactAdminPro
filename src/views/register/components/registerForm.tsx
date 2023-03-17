import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Login } from "../../../http/interface";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import {  registerApi } from "../../../http/modules/login";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);

    // 登录
    const onFinish = async (loginForm: Login.ReqLoginForm) => {
        try {
            setLoading(true);
            // const { data } = await loginApi(loginForm);
            const { data } = await registerApi(loginForm);
            message.success("注册成功！");
            // navigate('/home');
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    const goLogin = () => {
        navigate('/login');
    }
    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 5 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
            autoComplete="off"
        >
            <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
                <Input placeholder="用户名" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
                <Input.Password autoComplete="new-password" placeholder="密码" prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item className="login-btn">
                <Button
                    onClick={goLogin}
                >
                    返回登录
                </Button>
                <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
