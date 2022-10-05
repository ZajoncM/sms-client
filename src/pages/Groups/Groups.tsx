import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import GroupList from "./GroupList/GroupList";

const Groups = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        onBack={() => navigate(-1)}
        title="Klasy"
        extra={[
          <Button key="1" onClick={() => navigate("create")}>
            Dodaj klasę
          </Button>,
        ]}
      />
      <GroupList />
    </>
  );
};

export default Groups;
