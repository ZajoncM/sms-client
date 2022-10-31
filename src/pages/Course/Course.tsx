import { Card, Col, List, PageHeader, Row, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { CourseFieldsFragment, useCourseQuery } from "../../generated/graphql";
import Exams from "./Exams/Exams";
import Lessons from "./Lessons/Lessons";

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
      <Row gutter={10}>
        <Col span="12">
          <Lessons />
        </Col>
        <Col span="12">
          <Exams />
        </Col>
      </Row>
    </>
  );
};

export default Course;
