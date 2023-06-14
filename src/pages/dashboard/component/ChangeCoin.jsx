import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Radio, Tooltip } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconError from "./IconError";
const optionsWithDisabled = [
  { label: "Tăng lên", value: 0 },
  { label: "Giảm đi", value: 1 },
];

export default function ChangeCoin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [value4, setValue4] = useState(0);
  const onChange4 = ({ target: { value } }) => {
    setValue4(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <Input
          icon={<IconError />}
          label="Tên người dùng"
          value={"Nguyễn test"}
        />
        <Input label="Số dư ví chính" />
        <Input icon={<IconError />} label="Số dư ví hoàn trả" />
        <Input
          icon={<IconError />}
          label="Tổng số tiền đặt cược vào nền tảng"
        />
        <Input label="Toàn bộ" />
        <Input label="Số dư mã hóa" />
        <Input label="Số tiền hoạt động" />
        <Input label="Số tiền hoạt động" />
        <Input label="Mô tả hoạt động" />
        <Input icon={<IconError />} label="Hoạt động lưu ý" />
        <Select icon={<IconError />} label="Các loại tiền">
          <Option>Việt nam (VND)</Option>
          <Option>Dolla (UST)</Option>
        </Select>
        <div className="flex items-center justify-start">
          <span className="mr-3">Số lượng các loại:</span>
          <Radio.Group
            options={optionsWithDisabled}
            onChange={onChange4}
            value={value4}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button className="mr-4">Lưu cài đặt</Button>
        <Button variant="outlined">Đặt lại</Button>
      </div>
    </form>
  );
}
