import { Button, Drawer, Form, FormInstance, Input } from "antd";
import { useParams } from "react-router-dom";
import {
  LessonFieldsFragment,
  useCreateLessonMutation,
  useUpdateLessonMutation,
} from "../../../../generated/graphql";

type Props = {
  open: boolean;
  onClose: () => void;
  form: FormInstance;
};

const LessonDrawer = ({ open, onClose, form }: Props) => {
  const { id } = useParams();

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const [createLesson] = useCreateLessonMutation({
    refetchQueries: ["lessons"],
    onCompleted: handleClose,
  });

  const [updateLesson] = useUpdateLessonMutation({
    refetchQueries: ["lessons"],
    onCompleted: handleClose,
  });

  const onFinish = ({ name }: LessonFieldsFragment) => {
    if (!id) return;

    const lessonId = form.getFieldValue("id");

    if (!lessonId) {
      return createLesson({
        variables: { createLessonInput: { name, courseId: id } },
      });
    }

    updateLesson({
      variables: { updateLessonInput: { name, id: Number(lessonId) } },
    });
  };

  return (
    <Drawer
      size="large"
      title="Dodaj lekcje"
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

export default LessonDrawer;
