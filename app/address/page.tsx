"use client";
import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
type SizeType = Parameters<typeof Form>[0]["size"];

const AddressPage: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "large",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div
      className="mb-8 flex w-[90%] flex-col items-center justify-center rounded-lg border
    border-[#d9d9d9] bg-white py-6 transition
    duration-500 ease-in-out hover:shadow-xl lg:min-h-[600px]
    lg:w-[600px] 
    "
    >
      <div className="mb-[20px] w-[90%] text-[20px]">编辑收货地址</div>
      <Form
        className="w-[90%]"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="国家">
          <Select size="large">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="收件人姓名">
          <Input
            placeholder="Full name"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>

        <Form.Item label="详细地址">
          <Input
            placeholder="Apartment,suite,unit,building,floor,etc."
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="城市">
          <Input placeholder="City" className=" rounded-lg border-[#d9d9d9]" />
        </Form.Item>

        <Form.Item label="省份">
          <Input
            placeholder="State/Province/Region"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="邮政编码">
          <Input
            placeholder="ZIP Code"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="身份证号（选填）">
          <Input
            placeholder="Citizen ID Number"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="收件人手机号">
          <Input
            placeholder="Phone Number"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>

        <div className="flex w-full justify-end">
          <Button className="mr-[20px]">取消</Button>
          <Button type="primary" className="bg-[#4096FF] text-white ">
            确认
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddressPage;
