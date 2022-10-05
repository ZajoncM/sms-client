import { Input, Button, Form, Select } from "antd";
import { useNavigate } from "react-router-dom";
import {
  CreateGroupInput,
  useCreateGroupMutation,
  UserRoleEnum,
  useStudentsQuery,
  useTeachersQuery,
} from "../../../../generated/graphql";

const { Option } = Select;

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [createGroup] = useCreateGroupMutation({
    onCompleted: () => {
      navigate("/groups");
    },
  });
  const { data: teachersData, loading: teachersLoading } = useTeachersQuery();
  const { data: studentsData, loading: studentsLoading } = useStudentsQuery();

  const onFinish = (groupDto: CreateGroupInput) => {
    console.log(groupDto);

    const { semester } = groupDto;

    createGroup({
      variables: {
        createGroupInput: { ...groupDto, semester: Number(semester) },
      },
      refetchQueries: ["groups"],
    });
  };

  return (
    <Form
      name="createUser"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Nazwa"
        name="name"
        rules={[{ required: true, message: "Wpisz Nazwę" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Semestr"
        name="semester"
        rules={[{ required: true, message: "Wpisz Semestr" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name="educatorId"
        label="Wychowawca"
        rules={[{ required: true }]}
      >
        <Select allowClear loading={teachersLoading}>
          {teachersData?.users.map(({ firstName, lastName, teacher }) => (
            <Option value={teacher?.id}>
              {firstName} {lastName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="studentIds"
        label="Uczniowie"
        rules={[{ required: true }]}
      >
        <Select allowClear mode="multiple" loading={studentsLoading}>
          {studentsData?.users.map(({ firstName, lastName, student }) => (
            <Option value={student?.id}>
              {firstName} {lastName}
            </Option>
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
