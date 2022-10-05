import { Card, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import UpdateUserForm from "./UpdateGroupForm/UpdateGroupForm";

const UpdateUser = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader onBack={() => navigate(-1)} title="Edytuj klasę" />

      <Card>
        <UpdateUserForm />
      </Card>
    </>
  );
};

export default UpdateUser;
