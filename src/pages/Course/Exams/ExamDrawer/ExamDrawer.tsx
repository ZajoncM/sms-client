import { Button, Drawer, Form, FormInstance, Input, Select } from "antd";
import { useParams } from "react-router-dom";
import {
  ExamFieldsFragment,
  useCreateExamMutation,
  useUpdateExamMutation,
} from "../../../../generated/graphql";
import Grades from "./Grades/Grades";

const { Option } = Select;

type Props = {
  open: boolean;
  onClose: () => void;
  form: FormInstance;
};

const ExamDrawer = ({ open, onClose, form }: Props) => {
  const { id } = useParams();
  const examId = form.getFieldValue("id");

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const [createExam] = useCreateExamMutation({
    refetchQueries: ["exams"],
    onCompleted: handleClose,
  });

  const [updateExam] = useUpdateExamMutation({
    refetchQueries: ["exams"],
    onCompleted: handleClose,
  });

  const onFinish = ({ name, weight }: ExamFieldsFragment) => {
    if (!id) return;

    if (!examId) {
      return createExam({
        variables: {
          createExamInput: { name, weight: Number(weight), courseId: id },
        },
      });
    }

    updateExam({
      variables: {
        updateExamInput: { name, weight: Number(weight), id: Number(examId) },
      },
    });
  };

  return (
    <Drawer
      size="large"
      title={examId ? "Edytuj test" : "Dodaj test"}
      placement="right"
      onClose={handleClose}
      open={open}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Nazwa"
          name="name"
          rules={[{ required: true, message: "Nazwa wymagana" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="weight" label="Waga" rules={[{ required: true }]}>
          <Select allowClear>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Dodaj
          </Button>
        </Form.Item>
      </Form>
      {examId && <Grades examId={examId} />}
    </Drawer>
  );
};

export default ExamDrawer;
