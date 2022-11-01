import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, List, Typography } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ExamFieldsFragment, useExamsQuery } from "../../../generated/graphql";
import { createCtx } from "../../../utils/createCtx";
import ExamDrawer from "./ExamDrawer/ExamDrawer";

export const [useExams, ExamsProvider] = createCtx<ExamFieldsFragment[]>();

const Exams = () => {
  const { id } = useParams();
  const [newExam, setNewExam] = useState(false);
  const { data, loading } = useExamsQuery({
    variables: { examDto: { courseId: id } },
  });
  const [form] = Form.useForm<ExamFieldsFragment>();

  return (
    <ExamsProvider value={data?.exams}>
      <Card>
        <List<ExamFieldsFragment>
          size="large"
          header={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Testy
              </Typography.Title>
              <Button
                icon={<PlusOutlined />}
                onClick={() => setNewExam(true)}
              />
            </div>
          }
          bordered
          dataSource={data?.exams}
          loading={loading}
          renderItem={(exam) => (
            <List.Item
              onClick={() => {
                form.setFieldsValue(exam);
                setNewExam(true);
              }}
              style={{ cursor: "pointer" }}
            >
              {exam.name}
            </List.Item>
          )}
        />
        <ExamDrawer
          onClose={() => setNewExam(false)}
          open={newExam}
          form={form}
        />
      </Card>
    </ExamsProvider>
  );
};

export default Exams;
