import { Card, Collapse, Divider, List, Typography } from "antd";
import { useParentQuery } from "../../../generated/graphql";

const { Panel } = Collapse;

const ParentOverall = () => {
  const { data, loading } = useParentQuery();

  return (
    <Card loading={loading}>
      <Typography.Title level={4}>Uczniowie</Typography.Title>
      <Collapse>
        {data?.parent.children.map((child) => (
          <Panel
            header={`${child.user.firstName} ${child.user.lastName}`}
            key={child.id}
          >
            <List
              size="small"
              header={<div>Obecności</div>}
              bordered
              dataSource={child?.attendances}
              renderItem={(attendance) => (
                <List.Item>
                  {attendance.lesson.name} - {attendance.type}
                </List.Item>
              )}
            />
            <Divider orientation="left" />
            <List
              size="small"
              header={<div>Oceny</div>}
              bordered
              dataSource={child?.grades}
              renderItem={(grade) => (
                <List.Item>
                  {grade.exam.name} - {grade.value}
                </List.Item>
              )}
            />
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
};

export default ParentOverall;
