"use client";
import React, { useState } from "react";
import { countries } from "@/lib/countries";
import { Button, Form, Input, Select } from "antd";
type SizeType = Parameters<typeof Form>[0]["size"];

const Address: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "large",
  );

  const options = countries.map((country) => {
    return {
      value: country.name,
      label: country.name,
    };
  });

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div
      className="mb-8 flex w-[90%] flex-col items-center justify-center rounded-lg border
    border-[#d9d9d9] bg-white py-6 transition
    duration-500 ease-in-out hover:shadow-xl lg:min-h-[600px]
    lg:w-[600px] 
    "
    >
      <div className="mb-[20px] w-[90%] text-[20px]">address manage</div>
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
        <Form.Item label="Select Country">
          <Select
            defaultValue="China"
            onChange={handleChange}
            options={options}
          />
        </Form.Item>
        <Form.Item label="Name">
          <Input
            placeholder="Full name"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>

        <Form.Item label="Address">
          <Input
            placeholder="Apartment,suite,unit,building,floor,etc."
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="City">
          <Input placeholder="City" className=" rounded-lg border-[#d9d9d9]" />
        </Form.Item>

        <Form.Item label="Province">
          <Input
            placeholder="State/Province/Region"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="Zip">
          <Input
            placeholder="ZIP Code"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="Citizen ID Number">
          <Input
            placeholder="Citizen ID Number"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            placeholder="Phone Number"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>

        <div className="flex w-full justify-end">
          <Button className="mr-[20px]">Cancel</Button>
          <Button type="primary" className="bg-[#4096FF] text-white ">
            Add address
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Address;
