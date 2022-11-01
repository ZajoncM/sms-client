import { Button, Drawer, Form, FormInstance, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useParams } from "react-router-dom";
import {
  LessonFieldsFragment,
  useCreateLessonMutation,
  useUpdateLessonMutation,
} from "../../../../generated/graphql";
import { useCourse } from "../../Course";
import Attendances from "./Attendances/Attendances";

type Props = {
  open: boolean;
  onClose: () => void;
  form: FormInstance;
};

const LessonDrawer = ({ open, onClose, form }: Props) => {
  const { id } = useParams();
  const lessonId = form.getFieldValue("id");

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

  const onFinish = ({ name, description }: LessonFieldsFragment) => {
    if (!id) return;

    if (!lessonId) {
      return createLesson({
        variables: { createLessonInput: { name, description, courseId: id } },
      });
    }

    updateLesson({
      variables: {
        updateLessonInput: { name, description, id: Number(lessonId) },
      },
    });
  };

  return (
    <Drawer
      size="large"
      title={lessonId ? "Edytuj lekcje" : "Dodaj lekcje"}
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
        layout="vertical"
      >
        <Form.Item
          label="Nazwa"
          name="name"
          rules={[{ required: true, message: "Nazwa wymagana" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Opis" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lessonId ? "Edytuj" : "Dodaj"}
          </Button>
        </Form.Item>
      </Form>

      {lessonId && <Attendances lessonId={lessonId} />}
    </Drawer>
  );
};

export default LessonDrawer;
