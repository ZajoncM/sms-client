import { Tabs } from "antd";
import {
  CourseFieldsFragment,
  useCreateCourseMutation,
  useRemoveCourseMutation,
} from "../../../../generated/graphql";

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
      items={courses.map(({ id, name }) => {
        return {
          label: name,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
    />
  );
};

export default Courses;
