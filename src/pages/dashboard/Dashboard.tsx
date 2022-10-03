import { Button, Layout } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
