import { Button, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";

const Register = () => {
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
        className="register-btn"
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={showModal}
      >
        Register
      </Button>

      <Modal
        className="register-md"
        visible={isModalVisible}
        footer={null}
        title="สมัครสมาชิก"
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
            label="Firstname"
            name="first name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="Lastname"
            name="last name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="Username"
            name="user name"
            rules={[
              { required: true, message: "Please input your user name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="Tel"
            name="tel"
            rules={[
              {
                required: true,
                message: "Please input your telephone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Row justify="center">
            <Form.Item>
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
export default Register;
