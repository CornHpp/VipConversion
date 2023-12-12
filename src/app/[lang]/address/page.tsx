"use client";
import useTranslation from "next-translate/useTranslation";
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
  const { t } = useTranslation("common");

  return (
    <div
      className="mb-8 flex w-[90%] flex-col items-center justify-center rounded-lg border
    border-[#d9d9d9] bg-white py-6 transition
    duration-500 ease-in-out hover:shadow-xl lg:min-h-[600px]
    lg:w-[600px] 
    "
    >
      <div className="mb-[20px] w-[90%] text-[20px]">{t("address.title")}</div>
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
        <Form.Item label={t("address.country")}>
          <Select size="large">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={t("address.name")}>
          <Input
            placeholder="Full name"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>

        <Form.Item label={t("address.address")}>
          <Input
            placeholder="Apartment,suite,unit,building,floor,etc."
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label={t("address.city")}>
          <Input placeholder="City" className=" rounded-lg border-[#d9d9d9]" />
        </Form.Item>

        <Form.Item label={t("address.city")}>
          <Input
            placeholder="State/Province/Region"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label={t("address.code")}>
          <Input
            placeholder="ZIP Code"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label={t("address.IdNumber")}>
          <Input
            placeholder="Citizen ID Number"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>
        <Form.Item label={t("address.phone")}>
          <Input
            placeholder="Phone Number"
            className=" rounded-lg border-[#d9d9d9]"
          />
        </Form.Item>

        <div className="flex w-full justify-end">
          <Button className="mr-[20px]">{t("address.cancel")}</Button>
          <Button type="primary" className="bg-[#4096FF] text-white ">
            {t("address.submit")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddressPage;
