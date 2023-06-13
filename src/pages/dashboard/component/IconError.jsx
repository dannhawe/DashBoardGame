import { Tooltip } from "antd";
import React from "react";

export default function IconError() {
  return (
    <Tooltip title="Bắt buộc">
      <span className="cursor-pointer text-base text-red-700">*</span>
    </Tooltip>
  );
}
