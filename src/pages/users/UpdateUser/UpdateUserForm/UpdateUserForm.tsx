import { Input, Button, Form } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  UpdateUserInput,
  useUpdateUserMutation,
  useUserQuery,
} from "../../../../generated/graphql";

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateUser] = useUpdateUserMutation({
    onCompleted: () => {
      navigate("/users");
    },
  });

  const { data, loading } = useUserQuery({
    variables: { user: { id: Number(id) } },
  });

  const onFinish = (userDto: UpdateUserInput) => {
    updateUser({
      variables: { updateUserInput: { ...userDto, id: Number(id) } },
      refetchQueries: ["users"],
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Form
      name="updateUser"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      initialValues={data?.user}
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateUserForm;
