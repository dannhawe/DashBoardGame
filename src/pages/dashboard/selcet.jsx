"use client";

import React, { useState } from "react";

import { DatePicker, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Button, Input } from "@material-tailwind/react";

export default function Selcet11() {
  const [hide, setHide] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    } else {
      console.log("Clear");
    }
  };
  return (
    <div>
      <div className=" relative flex">
        <Input
          className="min-w-full  sm:min-w-[350px]"
          color="teal"
          label="Tên user"
        />
        <div className="ml-1 w-10 rounded-lg bg-blue-gray-200 px-2">
          <svg
            onClick={() => {
              setHide(!hide);
            }}
            className="h-full w-full cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </div>
        {hide && (
          <div className="absolute top-10 z-50 rounded-lg bg-blue-gray-50">
            <div className=" p-4">
              <div className="mb-3 flex items-center justify-center">
                <span className="mr-3 whitespace-nowrap">Thời gian: </span>
                <div>
                  <DatePicker.RangePicker
                    format="DD/MM/YYYY"
                    onChange={onRangeChange}
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center justify-center">
                <span className="mr-3 whitespace-nowrap">Trạng thái:</span>
                <div className="w-full">
                  <Select
                    placeholder="Chọn trạng thái"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    options={[
                      { value: 0, label: "Bật" },
                      { value: 1, label: "Tắt" },
                    ]}
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center justify-center">
                <span className="mr-3 whitespace-nowrap">Concept:</span>
                <div className="w-full">
                  <Select
                    placeholder="Chọn trạng thái"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    options={[
                      { value: 0, label: "Trực tuyến" },
                      { value: 1, label: "Onlline" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
