import { useUsersQuery } from "../../generated/graphql";

const Dashboard = () => {
  const { data } = useUsersQuery();

  console.log(data);
  return <div>dashboard</div>;
};

export default Dashboard;
