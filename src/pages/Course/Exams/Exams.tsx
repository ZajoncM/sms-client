import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, List, Typography } from "antd";
import { CourseFieldsFragment } from "../../../generated/graphql";

const Exams = () => {
  return (
    <Card>
      <List<CourseFieldsFragment>
        size="large"
        header={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              Testy
            </Typography.Title>
            <Button icon={<PlusOutlined />} />
          </div>
        }
        bordered
        renderItem={(course) => (
          <List.Item onClick={() => {}} style={{ cursor: "pointer" }}>
            {course.name} ({course.group.name})
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Exams;
