import { Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { LoginForm } from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <Layout>
      <Content>
        <Row style={{ minHeight: "100vh" }} align="middle">
          <Col span={24} lg={{ span: 8, offset: 8 }}>
            <LoginForm />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
