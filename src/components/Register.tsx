import { Button, Form, Input, Modal, Row } from "antd";
import React, { useRef, useState } from "react";
import axios from "axios";
//import { Fetch } from "../tools/fetch";
import { typeNewUser } from "../tools/dataType";

const Register = () => {
  // const { TextArea } = Input;
  // const user = useRef<any>();
  // const password = useRef<any>();
  // const firstname = useRef<any>();
  // const lastname = useRef<any>();
  // const email = useRef<any>();
  // const telnum = useRef<any>();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form]=Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addNewUserHandler = async (data:typeNewUser) => {

    try {

      const res = await axios.post(
        "http://localhost:4000/api/users",
        JSON.stringify(data),
        { headers: { "Content-Type": "application/json" } }
      );
      if(res){
        Modal.success({
          content: 'save successfully!',
        });
        form.resetFields();
        setIsModalVisible(false);
      }
    } catch (error) {
      Modal.error({
        content: 'duplicate information!',
      });
    }
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
        title="Register"
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          //   labelCol={{ span: 8 }}
          //   wrapperCol={{ span: 16 }}
           //initialValues={{ remember: true }}
           onFinish={addNewUserHandler}
           form={form}
        >
          <Form.Item
            labelCol={{ span: 5 }}
            label="Firstname"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="Lastname"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="Username"
            name="username"
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            label="TelNum"
            name="telNum"
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
