import { PageHeader } from "antd";
import { useUserContext } from "../../providers/UserProvider";

const Dashboard = () => {
  const user = useUserContext();

  return <PageHeader title={`Witaj ${user?.firstName}`} />;
};

export default Dashboard;
