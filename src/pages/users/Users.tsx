import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import DashboardTemplate from "../../templates/DashboardTemplate/DashboardTemplate";
import UserList from "./UserList/UserList";

const Users = () => {
  const navigate = useNavigate();

  return (
    <DashboardTemplate>
      <PageHeader
        onBack={() => navigate(-1)}
        title="Użytkownicy"
        extra={[<Button key="1">Dodaj użytkownika</Button>]}
      />
      <UserList />
    </DashboardTemplate>
  );
};

export default Users;
