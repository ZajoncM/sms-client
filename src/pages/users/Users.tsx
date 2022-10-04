import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList/UserList";

const Users = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        onBack={() => navigate(-1)}
        title="Użytkownicy"
        extra={[
          <Button key="1" onClick={() => navigate("create")}>
            Dodaj użytkownika
          </Button>,
        ]}
      />
      <UserList />
    </>
  );
};

export default Users;
