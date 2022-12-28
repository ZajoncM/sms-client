import { Card, List, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import {
  CourseFieldsFragment,
  useCoursesQuery,
} from "../../../generated/graphql";
import { useUserContext } from "../../../utils/ProtectedRoute";

const Courses = () => {
  const currentUser = useUserContext();
  const navigate = useNavigate();

  const { data, loading } = useCoursesQuery({
    variables: { courseDto: { teacherId: currentUser?.teacher?.id } },
  });

  return (
    <Card>
      <List<CourseFieldsFragment>
        size="large"
        header={
          <Typography.Title level={4} style={{ margin: 0 }}>
            Twoje kursy
          </Typography.Title>
        }
        bordered
        loading={loading}
        dataSource={data?.courses}
        renderItem={(course) => (
          <List.Item
            onClick={() => {
              navigate(`/courses/${course.id}`);
            }}
            style={{ cursor: "pointer" }}
          >
            {course.name} ({course.group.name})
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Courses;
