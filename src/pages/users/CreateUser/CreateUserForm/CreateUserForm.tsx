import { Input, Button, Form, Select } from "antd";
import { useNavigate } from "react-router-dom";
import {
  CreateUserInput,
  useCreateUserMutation,
  UserRoleEnum,
} from "../../../../generated/graphql";

const { Option } = Select;

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation({
    onCompleted: () => {
      navigate("/users");
    },
  });

  const onFinish = (userDto: CreateUserInput) => {
    createUser({
      variables: { createUserInput: userDto },
      refetchQueries: ["users"],
    });
  };

  const userRoles = Object.values(UserRoleEnum);

  return (
    <Form
      name="createUser"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Wpisz Email" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Imię"
        name="firstName"
        rules={[{ required: true, message: "Wpisz Imię" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nazwisko"
        name="lastName"
        rules={[{ required: true, message: "Wpisz Nazwisko" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Wpisz hasło" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="role" label="Rola" rules={[{ required: true }]}>
        <Select allowClear>
          {userRoles.map((role) => (
            <Option value={role}>{role}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Dodaj
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateUserForm;
