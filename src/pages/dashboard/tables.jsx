import { Card, CardHeader, Typography, Input } from "@material-tailwind/react";
import {} from "@heroicons/react/24/outline";
import { DatePicker, Drawer, Table, Tooltip } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import EditPage from "./component/EditPage";
import ChangeCoin from "./component/ChangeCoin";
import Daily from "./component/Daily";
import PhanPhoiDaiLy from "./component/PhanPhoiDaiLy";
const isMobile = window.innerWidth < 500;
export function Tables() {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Số dư ví chính",
      width: 100,
      dataIndex: "money",
      key: "amoneyge",
      sorter: (a, b) => a.money - b.money,
      sortDirections: ["descend"],
    },
    {
      title: "Số dư ví hoàn trả",
      dataIndex: "money2",
      key: "1",
      width: 100,
      sorter: (a, b) => a.money2 - b.money2,
      sortDirections: ["descend"],
    },
    {
      title: "Đăng ký IP.",
      dataIndex: "ip",
      key: "2",
      width: 150,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "3",
      width: 100,
      sorter: (a, b) => a.status.length - b.status.length,
    },

    {
      title: "Tài khoản nội bộ ",
      dataIndex: "account",
      key: "4",
      width: 100,
      sorter: (a, b) => a.account.length - b.account.length,

      onFilter: (value, record) => record.account.indexOf(value) === 0,
    },
    {
      title: "Ngôn ngữ/Tiền tệ",
      dataIndex: "nn",
      key: "5",
      width: 150,
    },
    {
      title: "Đại lý/cấp trên",
      dataIndex: "dl",
      key: "6",
      width: 150,
    },
    {
      title: "Trực tuyến",
      dataIndex: "tt",
      key: "7",
      width: 100,
      sorter: (a, b) => a.tt.length - b.tt.length,
    },
    {
      title: "Địa chỉ IP lần cuối đăng nhập.",
      dataIndex: "iplast",
      key: "8",
    },
    {
      title: "Cài đặt thời gian",
      dataIndex: "setting",
      key: "9",
    },

    {
      title: "Action",
      key: "action",
      fixed: isMobile ? "" : "right",
      width: 150,
      render: () => (
        <div className="grid grid-cols-3 gap-1">
          <span
            onClick={() => {
              handleDataRender("Chỉnh sửa", <EditPage />, "70%");
            }}
            className="flex-center  cursor-pointer rounded-md bg-gray-200 p-1"
          >
            <Tooltip title="Chỉnh sửa">
              <EditOutlined className="text-blue-600" />
            </Tooltip>
          </span>
          <span
            onClick={() => {
              handleDataRender("Thay đổi số dư", <ChangeCoin />, "70%");
            }}
            className="flex-center  cursor-pointer rounded-md bg-gray-200 p-1"
          >
            <Tooltip title="Thay đổi số dư">
              <MoneyCollectOutlined className="text-yellow-800" />
            </Tooltip>
          </span>
          <span
            onClick={() => {
              handleDataRender("Phân phối đại lý", <Daily />, "40%");
            }}
            className="flex-center  cursor-pointer rounded-md bg-gray-200 p-1"
          >
            <Tooltip title="Phân phối đại lý">
              <UpCircleOutlined className="text-green-700" />
            </Tooltip>
          </span>
          <span
            onClick={() => {
              handleDataRender("Thiết lập  đại lý", <PhanPhoiDaiLy />, "40%");
            }}
            className="flex-center  cursor-pointer rounded-md bg-gray-200 p-1"
          >
            <Tooltip title=" Thiết lập đại lý">
              <SettingOutlined className="text-black" />
            </Tooltip>
          </span>
          <span className="flex-center  cursor-pointer rounded-md bg-gray-200 p-1">
            <Tooltip title="Xóa bỏ">
              <DeleteOutlined className="text-red-700" />
            </Tooltip>
          </span>
        </div>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      money: 10.003 + i,
      money2: 12.003 + i,
      ip: `37.19.205.233 ${i}`,
      status: i % 2 === 0 ? "Online" : "Offline",
      account: i % 2 === 0 ? "Không" : "Có",
      nn: "Viet Nam",
      dl: i % 2 === 0 ? "Không" : `Edward ${i}`,
      tt: i % 2 === 0 ? "online" : "offline",
      iplast: `37.19.205.233 ${i}`,
      setting: `	2023-06-12 02:07:20`,
    });
  }
  const [openModal, setOpenModal] = useState(false);
  const [dataRender, setDataRender] = useState({
    title: "",
    component: <></>,
    width: "70%",
  });
  const handleDataRender = (title, component, width) => {
    setDataRender({
      component,
      title,
      width,
    });
    setOpenModal(true);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Danh sách thành viên
          </Typography>
        </CardHeader>
        <div className=" mx-4 block justify-between sm:flex">
          <div className="mb-3 max-w-2xl">
            <Input label="Username" />
          </div>
        </div>
        <div className="overflow-x-scroll px-0 pt-0 pb-2">
          <Table
            className="h-2/3"
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1500,
              y: 430,
            }}
          />
        </div>
      </Card>
      {openModal && (
        <Drawer
          title={dataRender.title}
          placement="right"
          width={isMobile ? "100%" : dataRender.width}
          onClose={() => {
            setOpenModal(false);
          }}
          open={openModal}
        >
          {dataRender.component}
        </Drawer>
      )}
    </div>
  );
}

export default Tables;
