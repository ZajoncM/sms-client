import { List } from "antd";
import { LessonFieldsFragment } from "../../../../../generated/graphql";
import { useUserContext } from "../../../../../providers/UserProvider";

type Props = {
  lessons: LessonFieldsFragment[];
};

const lessonTypes = {
  PRESENT: "obecny",
  ABSENT: "nieobecny",
};

const StudentLessons = ({ lessons }: Props) => {
  const user = useUserContext();
  const myLessons = lessons.map((lesson) => ({
    ...lesson,
    attendance: lesson.attendances.find(
      (attendance) => attendance.student.id === user?.student?.id
    ),
  }));

  return (
    <List
      size="small"
      header={<div>Obecności</div>}
      bordered
      itemLayout="horizontal"
      dataSource={myLessons}
      renderItem={(lesson) => (
        <List.Item>
          <List.Item.Meta title={lesson.name} />
          <div> {lessonTypes[lesson.attendance?.type!]}</div>
        </List.Item>
      )}
    />
  );
};

export default StudentLessons;
