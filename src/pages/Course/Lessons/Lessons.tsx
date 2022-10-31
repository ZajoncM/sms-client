import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, List, Space, Typography } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  LessonFieldsFragment,
  useLessonsQuery,
} from "../../../generated/graphql";
import LessonDrawer from "./LessonDrawer/LessonDrawer";

const Lessons = () => {
  const { id } = useParams();
  const [newLesson, setNewLesson] = useState(false);
  const { data, loading } = useLessonsQuery({
    variables: { lessonDto: { courseId: id } },
  });
  const [form] = Form.useForm<LessonFieldsFragment>();

  return (
    <Card>
      <List<LessonFieldsFragment>
        size="large"
        header={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              Lekcje
            </Typography.Title>
            <Button
              icon={<PlusOutlined />}
              onClick={() => setNewLesson(true)}
            />
          </div>
        }
        bordered
        dataSource={data?.lessons}
        loading={loading}
        renderItem={(lesson) => (
          <List.Item
            onClick={() => {
              form.setFieldsValue(lesson);
              setNewLesson(true);
            }}
            style={{ cursor: "pointer" }}
          >
            {lesson.name}
          </List.Item>
        )}
      />
      <LessonDrawer
        onClose={() => setNewLesson(false)}
        open={newLesson}
        form={form}
      />
    </Card>
  );
};

export default Lessons;
