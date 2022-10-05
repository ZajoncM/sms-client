import { Card, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import UpdateUserForm from "./UpdateUserForm/UpdateUserForm";

const UpdateUser = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader onBack={() => navigate(-1)} title="Edytuj użytkownika" />

      <Card>
        <UpdateUserForm />
      </Card>
    </>
  );
};

export default UpdateUser;
