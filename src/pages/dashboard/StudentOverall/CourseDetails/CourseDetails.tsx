import { Row, Col } from "antd";
import { CourseDetailsFieldsFragment } from "../../../../generated/graphql";
import StudentExams from "./StudentExmas/StudentExams";
import StudentLessons from "./StudentLessons/StudentLessons";

type Props = {
  course: CourseDetailsFieldsFragment;
};

const CourseDetails = ({ course }: Props) => {
  return (
    <Row>
      <Col span={12}>
        <StudentLessons lessons={course.lessons} />
      </Col>
      <Col span={12}>
        <StudentExams exams={course.exams} />
      </Col>
    </Row>
  );
};

export default CourseDetails;
