import { PageHeader } from "antd";
import { UserRoleEnum } from "../../generated/graphql";
import Courses from "./Courses/Courses";
import ParentOverall from "./ParentOverall/ParentOverall";
import StudentOverall from "./StudentOverall/StudentOverall";
import { useUserContext } from "../../utils/ProtectedRoute";

const Dashboard = () => {
  const user = useUserContext();
  return (
    <>
      <PageHeader title={`Witaj ${user?.firstName}`} />
      {user?.role === UserRoleEnum.Teacher && <Courses />}
      {user?.role === UserRoleEnum.Student && <StudentOverall />}
      {user?.role === UserRoleEnum.Parent && <ParentOverall />}
    </>
  );
};

export default Dashboard;
