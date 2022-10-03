import { Button, Card, Form, Input } from "antd";
import { api } from "../../../utils/axios";

export const LoginForm = () => {
  const onFinish = async (values: any) => {
    const { data } = await api.post("/auth/login", values);

    localStorage.setItem("token", data.access_token);

    console.log("Success:", data);
  };

  return (
    <Card title="Login" extra={<a href="#">Rejestracja --WIP--</a>}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
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
