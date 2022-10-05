import { Input, Button, Form, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  UpdateGroupInput,
  useGroupQuery,
  useStudentsQuery,
  useTeachersQuery,
  useUpdateGroupMutation,
} from "../../../../generated/graphql";

const { Option } = Select;

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateUser] = useUpdateGroupMutation({
    onCompleted: () => {
      navigate("/groups");
    },
  });
  const { data: teachersData, loading: teachersLoading } = useTeachersQuery();
  const { data: studentsData, loading: studentsLoading } = useStudentsQuery();

  const { data, loading } = useGroupQuery({
    variables: { id: Number(id) },
  });

  const onFinish = (groupDto: UpdateGroupInput) => {
    const semester = Number(groupDto.semester);

    updateUser({
      variables: {
        updateGroupInput: { ...groupDto, id: Number(id), semester },
      },
      refetchQueries: ["users"],
    });
  };

  if (loading) return <div>Loading...</div>;

  const educatorId = data?.group.educator?.id;
  const studentIds = data?.group.students.map(({ id }) => id);

  return (
    <Form
      name="updateUser"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      initialValues={{ ...data?.group, educatorId, studentIds }}
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
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateUserForm;
