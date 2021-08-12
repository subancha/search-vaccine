import React from "react";
import "./App.css";
import { Layout, Row } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Login from "./components/Login";
import Register from "./components/Register";
import DisplayMap from "./components/DisplayMap";

const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="body">
      <Layout>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"           
            style={{ padding: 0, backgroundColor: "#99D6EA" }}
          >
            <h2>Vaccine Map</h2>
            <Row>
            <Register />
            <Login />
            </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              //margin: "24px 16px",
              padding: 0,
              minHeight: "100%",
            }}
          >
            <DisplayMap />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
