import { Input, Select, Button, Form } from "antd";
import {
  CourseFieldsFragment,
  CreateCourseInput,
  useTeachersQuery,
  useUpdateCourseMutation,
} from "../../../../generated/graphql";

const { Option } = Select;

type Props = {
  course: CourseFieldsFragment;
  groupId: string;
};

const Course = ({ course, groupId }: Props) => {
  const teacherId = course.teacher?.id;
  const [updateCourse] = useUpdateCourseMutation({ refetchQueries: ["group"] });

  const { data: teachersData, loading: teachersLoading } = useTeachersQuery();

  const onFinish = (courseDto: CreateCourseInput) => {
    updateCourse({
      variables: {
        id: Number(course.id),
        updateCourseInput: { ...courseDto, groupId },
      },
    });
  };

  return (
    <Form
      name="updateCourse"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      initialValues={{ ...course, teacherId }}
    >
      <Form.Item
        label="Nazwa"
        name="name"
        rules={[{ required: true, message: "Wpisz Nazwę" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="teacherId" label="Nauczyciel">
        <Select allowClear loading={teachersLoading}>
          {teachersData?.users.map(({ firstName, lastName, teacher }) => (
            <Option value={teacher?.id}>
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

export default Course;
