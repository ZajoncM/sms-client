import { Card, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import CreateUserForm from "./CreateUserForm/CreateUserForm";

const CreateUser = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader onBack={() => navigate(-1)} title="Dodaj użytkownika" />

      <Card>
        <CreateUserForm />
      </Card>
    </>
  );
};

export default CreateUser;
