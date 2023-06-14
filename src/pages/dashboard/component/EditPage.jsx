import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Radio } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const optionsWithDisabled = [
  { label: "Nữ", value: 0 },
  { label: "Nam", value: 1 },
];
const optionsWithDisabled1 = [
  { label: "Bật", value: 0 },
  { label: "Tắt", value: 1 },
  { label: "Bắt đầu", value: 2 },
];
const optionsWithDisabled2 = [
  { label: "Có", value: 0 },
  { label: "Không", value: 1 },
];
const optionsWithDisabled3 = [
  { label: "Có", value: 0 },
  { label: "Không", value: 1 },
];
export default function EditPage() {
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
        <Input label="Tên người dùng" value={"Nguyễn test"} />
        <Input label="Mật khẩu" />
        <Input label="Mật khẩu gốc" />
        <Input label="Tên thật" />
        <Input label="email" />
        <Input label="SDT" />
        <Input label="Số QQ" />
        <Input label="Line" />
        <Select label="Tiền tệ">
          <Option>Việt nam (VND)</Option>
          <Option>Dolla (UST)</Option>
        </Select>
        <div className="flex items-center justify-start">
          <span className="mr-3">Giới tính:</span>
          <Radio.Group
            options={optionsWithDisabled}
            onChange={onChange4}
            value={value4}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <Input label="Cấp VIP" value={2} />
        <Input label="Cấp VIP" value={2} />
        <Input label="Mã mời" />
        <Input label="Mật khẩu rút tiền" />
        <Input label="Số dư ví chính" />
        <Input label="Số dư ví hoàn trả" />
        <Input label="Tổng số tiền đặt cược vào nền tảng" />
        <Input label="Số dư mã hóa" />
        <Input label="Tổng số vay" />
        <Input label="Đăng ký IP." />
        <Input label="Cấp VIP" />
        <div className="flex items-center justify-start">
          <span className="mr-3">Trạng thái:</span>
          <Radio.Group
            options={optionsWithDisabled1}
            onChange={onChange4}
            value={value4}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className="flex items-center justify-start">
          <span className="mr-3">Bật gợi ý đăng nhập hay không:</span>
          <Radio.Group
            options={optionsWithDisabled2}
            onChange={onChange4}
            value={value4}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className="flex items-center justify-start">
          <span className="mr-3">Tài khoản nội bộ hay không:</span>
          <Radio.Group
            options={optionsWithDisabled3}
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
