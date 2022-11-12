import { Card, Typography } from "antd";
import { useParentQuery } from "../../../generated/graphql";

const ParentOverall = () => {
  const { data } = useParentQuery();
  console.log(data);
  return (
    <Card>
      <Typography.Title level={4}>Uczniowie</Typography.Title>
    </Card>
  );
};

export default ParentOverall;
