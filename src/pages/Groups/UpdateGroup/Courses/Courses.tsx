import { Tabs } from "antd";
import {
  CourseFieldsFragment,
  useCreateCourseMutation,
  useRemoveCourseMutation,
} from "../../../../generated/graphql";
import Course from "../Course/Course";

type Props = {
  courses: CourseFieldsFragment[];
  groupId: string;
};

const Courses = ({ courses, groupId }: Props) => {
  const [createCourse] = useCreateCourseMutation({ refetchQueries: ["group"] });
  const [removeCourse] = useRemoveCourseMutation({ refetchQueries: ["group"] });

  const onEdit = (id: string, action: "add" | "remove") => {
    if (action === "add") {
      return createCourse({
        variables: { createCourseInput: { name: "Pusty", groupId } },
      });
    }
    removeCourse({ variables: { id: Number(id) } });
  };

  return (
    <Tabs
      type="editable-card"
      onEdit={onEdit}
      items={courses.map((course) => {
        return {
          label: course.name,
          key: course.id,
          children: <Course course={course} groupId={groupId} />,
        };
      })}
    />
  );
};

export default Courses;
