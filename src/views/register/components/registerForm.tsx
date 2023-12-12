import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Input, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Login } from "../../../http/interface";
import { UserOutlined, LockOutlined, CloseCircleOutlined,MailOutlined } from "@ant-design/icons";
import {  registerApi, registerCodeApi } from "../../../http/modules/login";
import '../index.less'
const RegisterForm = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const [countdown, setCountdown] = useState(60);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    // let timer: number | NodeJS.Timer | null = null
    // 登录
    const onFinish = async (loginForm: Login.ReqRegisterForm) => {
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


    const getCode = async () => {
        const email =  form.getFieldsValue();
       await  registerCodeApi(email)
        timerRef.current = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
           
        }, 1000);
    };
    useEffect(() => {
        if (countdown === 0) {
            setCountdown(60);
            clearInterval(timerRef.current as NodeJS.Timeout);
        }
    },[countdown])
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
            <Form.Item name="email" rules={[{ required: true, message: "请输入邮箱" }]}>
                <Input placeholder="请输入邮箱" prefix={<MailOutlined />}/>
            </Form.Item>
            <Form.Item name="code" rules={[{ required: true, message: "验证码" }]}>
            <Row >
                <Col span={"16"}
                >
                <Input placeholder="请输入验证码"  />
                </Col>
                <Col span={"4"}>
                <Button
                className="codeBtn"
                    onClick={countdown === 60 ?() => getCode():undefined}
                >
                    {countdown === 60 ?'获取验证码':countdown}
                </Button>
                </Col>
            </Row>
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
