import { Card, List, PageHeader, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { CourseFieldsFragment, useCourseQuery } from "../../generated/graphql";

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useCourseQuery({ variables: { id: Number(id) } });

  if (loading) return <div>loading</div>;

  return (
    <>
      <PageHeader
        onBack={() => navigate(-1)}
        title={`${data?.course.name} (${data?.course.group.name} - semestr ${data?.course.group.semester})`}
      />
      <Card>
        <List<CourseFieldsFragment>
          size="large"
          header={
            <Typography.Title level={4} style={{ margin: 0 }}>
              Lekcje
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
      <Card>
        <List<CourseFieldsFragment>
          size="large"
          header={
            <Typography.Title level={4} style={{ margin: 0 }}>
              Testy
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
    </>
  );
};

export default Course;
