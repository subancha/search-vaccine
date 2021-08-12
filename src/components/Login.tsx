import React, { useState } from "react";
import { Modal, Form, Input, Button, Row } from "antd";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Button
        className="login-btn"
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={showModal}
      >
        Login
      </Button>
      <Modal
        className="login-md"
        visible={isModalVisible}
        footer={null}
        title="เข้าสู่ระบบ"
        onCancel={handleCancel}
      >
        <Form
          name="basic"
        //   labelCol={{ span: 8 }}
        //   wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
          labelCol={{ span: 5 }}
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
          labelCol={{ span: 5 }}
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

        <Row justify="center">
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
        </Form>
      </Modal>
    </>
  );
};
export default Login;
