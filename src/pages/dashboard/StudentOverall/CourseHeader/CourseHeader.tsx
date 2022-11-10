import { Progress } from "antd";
import { CourseDetailsFieldsFragment } from "../../../../generated/graphql";
import { useUserContext } from "../../../../providers/UserProvider";

type Props = {
  course: CourseDetailsFieldsFragment;
};

const CourseHeader = ({ course }: Props) => {
  const { exams } = course;
  const user = useUserContext();
  const allGrades = exams.flatMap(({ grades }) => [...grades]);

  const myGrades = allGrades
    .filter(({ student }) => student.id === user?.student?.id)
    .map(({ value }) => value);

  const average = myGrades.reduce((a, b) => a + b, 0) / myGrades.length;

  const averagePercent = (average * 100) / 6;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{course.name} </span>
      <Progress
        type="circle"
        percent={averagePercent}
        format={() => (average ? average.toPrecision(3) : 0)}
        width={30}
      />
    </div>
  );
};

export default CourseHeader;
