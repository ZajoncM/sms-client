import { PageHeader } from "antd";
import { UserRoleEnum } from "../../generated/graphql";
import { useUserContext } from "../../providers/UserProvider";
import Courses from "./Courses/Courses";

const Dashboard = () => {
  const user = useUserContext();

  return (
    <>
      <PageHeader title={`Witaj ${user?.firstName}`} />
      {user?.role === UserRoleEnum.Teacher && <Courses />}
    </>
  );
};

export default Dashboard;
