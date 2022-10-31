import { Button, Drawer, Form, FormInstance, Input } from "antd";
import { useParams } from "react-router-dom";
import {
  ExamFieldsFragment,
  useCreateExamMutation,
  useUpdateExamMutation,
} from "../../../../generated/graphql";

type Props = {
  open: boolean;
  onClose: () => void;
  form: FormInstance;
};

const ExamDrawer = ({ open, onClose, form }: Props) => {
  const { id } = useParams();
  const lessonId = form.getFieldValue("id");

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

  const onFinish = ({ name }: ExamFieldsFragment) => {
    if (!id) return;

    if (!lessonId) {
      return createExam({
        variables: { createExamInput: { name, courseId: id } },
      });
    }

    updateExam({
      variables: { updateExamInput: { name, id: Number(lessonId) } },
    });
  };

  return (
    <Drawer
      size="large"
      title={lessonId ? "Edytuj test" : "Dodaj test"}
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Dodaj
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ExamDrawer;
