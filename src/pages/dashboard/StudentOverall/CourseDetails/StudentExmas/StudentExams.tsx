import { List } from "antd";
import { ExamFieldsFragment } from "../../../../../generated/graphql";
import { useUserContext } from "../../../../../providers/UserProvider";

type Props = {
  exams: ExamFieldsFragment[];
};

const StudentExams = ({ exams }: Props) => {
  const user = useUserContext();
  const myExams = exams.map((exam) => ({
    ...exam,
    grade: exam.grades.find((grade) => grade.student.id === user?.student?.id),
  }));

  return (
    <List
      size="small"
      header={<div>Egzaminy</div>}
      bordered
      dataSource={myExams}
      renderItem={(exam) => (
        <List.Item>
          <List.Item.Meta title={exam.name} />
          <div>{exam.grade?.value}</div>
        </List.Item>
      )}
    />
  );
};

export default StudentExams;
