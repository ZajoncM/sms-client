import { Layout, Button, Menu } from "antd";
import { Header, Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";

type Props = PropsWithChildren;

const DashboardTemplate = ({ children }: Props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        theme="light"
      >
        <NavMenu />
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200, minHeight: "100vh" }}
      >
        <Header
          style={{
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Button type="primary" onClick={logout}>
            Wyloguj
          </Button>
        </Header>
        <Content style={{ padding: 20 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardTemplate;
