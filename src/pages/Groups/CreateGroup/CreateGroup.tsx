import { Card, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import CreateGroupForm from "./CreateGroupForm/CreateGroupForm";

const CreateGroup = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader onBack={() => navigate(-1)} title="Dodaj klasę" />

      <Card>
        <CreateGroupForm />
      </Card>
    </>
  );
};

export default CreateGroup;
