import React from "react";
import "./style.css";
import { Button, DatePicker, DatePickerProps, Form, FormProps, Input, Select } from "antd";

type FieldType = {
  sodienthoai?: string;
  password?: string;
  email?: string;
  name?: string;
  ngaysinh: Date;
  gioitinh?: string;

};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Login = () => {
  const [isFormDangKy, setIsFormDangKy] = React.useState(true);
  return (
    <>
      <div className="LoginBody">
        <h1>ĐĂNG NHẬP / ĐĂNG KÝ</h1>
        <div className="BackgroundWhite">
          <div className="ContentContainer">
            <div className="DangNhapContainer">
              <h1>Đăng nhập</h1>
              <div className="FormContainer">
                <div className="FormContent">
                  <Form
                    name="DangNhap"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 1000 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <span>Số điện thoại</span>
                    <Form.Item<FieldType>
                      label=""
                      name="sodienthoai"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        style={{ width: 650, height: 47, marginTop: 10 }}
                      />
                    </Form.Item>

                    <span>Mật khẩu</span>
                    <Form.Item<FieldType>
                      label=""
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        style={{ width: 650, height: 47, marginTop: 10 }}
                      />
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 16 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          backgroundColor: "#000000",
                          height: 40,
                          marginTop: 10,
                        }}
                      >
                        ĐĂNG NHẬP
                      </Button>
                    </Form.Item>
                  </Form>
                  <a href="">Bạn quên mật khẩu?</a>
                </div>
              </div>
            </div>
            <div className="DangKyContainer">
              <h1>Khách hàng mới</h1>
              <div className="FormContainer">
                <div className="FormContent">
                  {(!isFormDangKy && (
                    <div>
                      <Form
                        name="DangKy"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 1000 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <span>Số điện thoại</span>
                        <Form.Item<FieldType>
                          label=""
                          name="sodienthoai"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Input
                            style={{ width: 650, height: 47, marginTop: 10 }}
                          />
                        </Form.Item>


                        <span>Email</span>
                        <Form.Item<FieldType>
                          label=""
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your email",
                            },
                          ]}
                        >
                          <Input
                            style={{ width: 650, height: 47, marginTop: 10 }}
                          />
                        </Form.Item>

                        <span>Tên của bạn</span>
                        <Form.Item<FieldType>
                          label=""
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your name!",
                            },
                          ]}
                        >
                          <Input
                            style={{ width: 650, height: 47, marginTop: 10 }}
                          />
                        </Form.Item>

                        <span>Ngày sinh</span>
                        <Form.Item<FieldType>
                          label=""
                          name="ngaysinh"
                          rules={[
                            {
                              required: true,
                              message: "Please input your date!",
                            },
                          ]}
                        >
                          <DatePicker style={{ width: 650, height: 47, marginTop: 10 }} onChange={onChange} />

                        </Form.Item>


                        <span>Giới tính</span>
                        <Form.Item<FieldType>
                          label=""
                          name="sodienthoai"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Select
                            defaultValue=""
                            style={{ width: 650, height: 47, marginTop: 10 }}
                            onChange={handleChange}
                            options={[
                              { value: 'Nam', label: 'Nam' },
                              { value: 'Nữ', label: 'Nữ' },
                              { value: 'Khác', label: 'Khác' },

                            ]}
                          />

                        </Form.Item>

                        <span>Mật khẩu</span>
                        <Form.Item<FieldType>
                          label=""
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password
                            style={{ width: 650, height: 47, marginTop: 10 }}
                          />
                        </Form.Item>

                        <span>Nhập lại Mật khẩu</span>
                        <Form.Item<FieldType>
                          label=""
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password
                            style={{ width: 650, height: 47, marginTop: 10 }}
                          />
                        </Form.Item>


                        <Form.Item wrapperCol={{ span: 16 }}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                              backgroundColor: "#000000",
                              height: 40,
                              marginTop: 10,
                            }}
                          >
                            ĐĂNG KÝ
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  )) || (
                      <div>
                        <p>Ưu đãi 15% Khách hàng mới</p>
                        <p>
                          Đăng ký ngay tài khoản để nhận ưu đãi 15% dành cho Khánh
                          hàng mới và tích điểm - đổi quà cũng như nhận các ưu đã
                          sinh nhật dành riêng cho bạn đến từ UNDER
                        </p>
                        <Button
                          type="primary"
                          onClick={() => setIsFormDangKy(!isFormDangKy)}
                          style={{
                            backgroundColor: "#000000",
                            height: 40,
                            marginTop: 10,
                            width: 180,
                          }}
                        >
                          TẠO TÀI KHOẢN MỚI
                        </Button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Login;
