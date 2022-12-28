import { List, Segmented, Typography } from "antd";
import {
  AttendanceTypeEnum,
  useCreateAttendanceMutation,
  UserFieldsFragment,
} from "../../../../../generated/graphql";
import { lessonTypes } from "../../../../Dashboard/StudentOverall/CourseDetails/StudentLessons/StudentLessons";
import { useCourse } from "../../../Course";
import { useLessons } from "../../Lessons";

type StudentField = {
  id: string;
  user: UserFieldsFragment;
};

type Props = {
  lessonId: string;
};

const Attendances = ({ lessonId }: Props) => {
  const course = useCourse();
  const lessons = useLessons();
  const lesson = lessons.find(({ id }) => id === lessonId);
  const [createAttendance] = useCreateAttendanceMutation({
    refetchQueries: ["lessons"],
  });
  const { students } = course.group;

  const attendanceTypes = Object.values(AttendanceTypeEnum);

  const test = attendanceTypes.map((value) => lessonTypes[value]);

  const setDefaultAttendance = (id: string) => {
    const foundAttendance = lesson?.attendances.find(
      ({ student }) => student?.id === id
    );

    return foundAttendance?.type || AttendanceTypeEnum.Absent;
  };

  return (
    <>
      <List<StudentField>
        size="large"
        header={
          <Typography.Title level={5} style={{ margin: 0 }}>
            Obecność
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
            <Segmented
              defaultValue={setDefaultAttendance(id)}
              onChange={(value) => {
                const type = value as AttendanceTypeEnum;
                createAttendance({
                  variables: {
                    createAttendanceInput: { lessonId, studentId: id, type },
                  },
                });
              }}
              options={test}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Attendances;
