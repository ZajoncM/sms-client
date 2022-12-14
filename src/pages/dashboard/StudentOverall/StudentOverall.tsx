import { Card, Collapse, Typography } from "antd";

import CourseDetails from "./CourseDetails/CourseDetails";
import CourseHeader from "./CourseHeader/CourseHeader";
import { useUserContext } from "../../../utils/ProtectedRoute";

const { Panel } = Collapse;

const StudentOverall = () => {
  const user = useUserContext();

  return (
    <Card>
      <Typography.Title level={4}>Twoje kursy</Typography.Title>
      <Collapse>
        {user?.courses.map((course) => (
          <Panel header={<CourseHeader course={course} />} key={course.id}>
            <CourseDetails course={course} />
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
};

export default StudentOverall;
