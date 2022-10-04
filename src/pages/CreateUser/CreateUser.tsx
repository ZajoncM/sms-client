import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  return <PageHeader onBack={() => navigate(-1)} title="Dodaj użytkownika" />;
};

export default CreateUser;
