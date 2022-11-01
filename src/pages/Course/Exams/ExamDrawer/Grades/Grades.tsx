import { List, Typography, Rate } from "antd";
import {
  UserFieldsFragment,
  useCreateGradeMutation,
} from "../../../../../generated/graphql";
import { useCourse } from "../../../Course";
import { useExams } from "../../Exams";

type StudentField = {
  id: string;
  user: UserFieldsFragment;
};

type Props = {
  examId: string;
};

const Grades = ({ examId }: Props) => {
  const course = useCourse();
  const exams = useExams();
  const exam = exams.find(({ id }) => id === examId);
  const [createGrade] = useCreateGradeMutation({
    refetchQueries: ["exams"],
  });
  const { students } = course.group;

  const setDefaultGrade = (id: string) => {
    const foundAttendance = exam?.grades.find(
      ({ student }) => student?.id === id
    );

    return foundAttendance?.value || 0;
  };

  return (
    <>
      <List<StudentField>
        header={
          <Typography.Title level={5} style={{ margin: 0 }}>
            Oceny
          </Typography.Title>
        }
        bordered
        dataSource={students}
        renderItem={({ id, user }) => (
          <List.Item key={id}>
            <List.Item.Meta
              title={
                <div>
                  {user.firstName} {user.lastName}
                </div>
              }
            />
            <Rate
              defaultValue={setDefaultGrade(id)}
              character={({ index }) => <span>{index! + 1}</span>}
              count={6}
              onChange={(value) => {
                createGrade({
                  variables: {
                    createGradeInput: { examId, studentId: id, value },
                  },
                });
              }}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Grades;
