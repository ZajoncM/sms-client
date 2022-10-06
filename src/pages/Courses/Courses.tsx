import { useCoursesQuery } from "../../generated/graphql";
import { useUserContext } from "../../providers/UserProvider";

const Courses = () => {
  const currentUser = useUserContext();

  const { data, loading } = useCoursesQuery({
    variables: { courseDto: { teacherId: currentUser?.teacher?.id } },
  });

  console.log(data);

  return <div>test</div>;
};

export default Courses;
