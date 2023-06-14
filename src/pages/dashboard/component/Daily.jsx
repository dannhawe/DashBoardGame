import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Radio, Tooltip } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconError from "./IconError";
const optionsWithDisabled = [
  { label: "Tăng lên", value: 0 },
  { label: "Giảm đi", value: 1 },
];

export default function Daily() {
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
      <div className="grid grid-cols-1 gap-4 ">
        <Input
          icon={<IconError />}
          label="ID thành viên"
          value={"Nguyễn test"}
        />
        <Input label="Tên người dùng" />
        <Input icon={<IconError />} label="Liên kết đại lý PC" />
        <Input icon={<IconError />} label="Liên kết đại lý WAP" />
        <Input label="Ghi chú" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button className="mr-4">Lưu cài đặt</Button>
        <Button variant="outlined">Đặt lại</Button>
      </div>
    </form>
  );
}
