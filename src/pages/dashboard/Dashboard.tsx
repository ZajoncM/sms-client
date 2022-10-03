import { Button, Layout } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserContext } from "../../providers/UserProvider";

const Dashboard = () => {
  const currentUser = useUserContext();
  const navigate = useNavigate();

  if (!currentUser) return <Navigate to="/" />;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Button type="primary" onClick={logout}>
          Wyloguj
        </Button>
      </Header>
      <Layout>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
