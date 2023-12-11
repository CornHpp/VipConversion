import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  products: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Grades",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Bronze",
    products: "Cups, hats, mouse pads ",
  },
  {
    key: "2",
    name: "Silver",
    products:
      "Cups, hats, mouse pads, T-shirts, gloves, water bottles, USB flash drives",
  },
  {
    key: "3",
    name: "Gold",
    products:
      "Cups, hats, mouse pads, T-shirts, gloves, scarves, cups, kettles, USB flash drives",
  },
  {
    key: "4",
    name: "Platinum",
    products:
      "ups, hats, mouse pads, T-shirts, gloves, scarves, cups, kettles, USB flash drives, mice, keyboards",
  },
  {
    key: "5",
    name: "Diamond",
    products:
      "Cup, hat, mouse pad, T-shirt, gloves, scarf, water bottle, USB flash drive, mouse, keyboard, headphones, watch, smartphone",
  },
  {
    key: "6",
    name: "Elite",
    products:
      "Cups, hats, mouse pads, T-shirts, gloves, scarves, water bottles, USB flash drives, mice, keyboards, headphones, watches, smartphones, tablets",
  },
];

const LevelTabel: React.FC = () => (
  <Table columns={columns} dataSource={data} bordered pagination={false} />
);

export default LevelTabel;
