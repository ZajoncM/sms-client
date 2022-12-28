import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/axios";
import { useApolloClient } from "@apollo/client";

export const LoginForm = () => {
  const navigate = useNavigate();
  const client = useApolloClient();

  const onFinish = async (values: any) => {
    const { data } = await api.post("/auth/login", values);
    localStorage.setItem("token", data.access_token);

    client.resetStore().then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <Card title="Login">
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Proszę wpisać Email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Hasło"
          name="password"
          rules={[{ required: true, message: "Proszę wpisać Hasło" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Zaloguj
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
