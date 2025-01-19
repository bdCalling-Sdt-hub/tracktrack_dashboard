import React from "react";
import UsernameImage from "../shared/UsernameImage";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { PaymentData, User, Event } from "../../Types/DataTypes";
import { PaymentTableProps } from "../../Types/PageProps";
import { useGetAllPaymentQuery } from "../../Redux/api/paymentApis";

const PaymentTable: React.FC<PaymentTableProps> = ({
  data,
  pagination,
  tab = "track",
  searchTerm,
}) => {
  const { data: paymentData, isLoading: payLo } = useGetAllPaymentQuery({
    businessType: tab,
    page: pagination,
    searchTerm,
  });

  if (payLo) {
    return <p>Loading...</p>;
  }

  const paymentDataInformation: PaymentData[] =
    paymentData?.data?.result?.map((payment: Payment) => ({
      key: payment._id,
      host: {
        name: "Host Placeholder",
        profile_image: "https://via.placeholder.com/150",
        phoneNumber: "0000000000",
      },
      user: {
        name: payment?.user?.name || "N/A",
        profile_image: payment?.user?.profile_image,
        phoneNumber: payment?.user?.phoneNumber || "N/A",
      },
      track: {
        trackName: tab === "Track" ? "Sample Track" : null,
        address: "Sample Address",
      },
      event: {
        eventName: payment?.event?.eventName || "N/A",
      },
      amount: payment.amount,
      status: payment.status,
    })) || [];

  const columns: ColumnsType<PaymentData> = [
    {
      title: "Host Name",
      dataIndex: "host",
      key: "host",
      render: (host) => (
        <UsernameImage
          image={host?.profile_image}
          name={host?.name}
          email={host?.phoneNumber}
        />
      ),
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <UsernameImage
          image={user?.profile_image}
          name={user?.name}
          email={user?.phoneNumber}
        />
      ),
    },
    {
      title: tab === "track" ? "Track Name" : "Event Name",
      dataIndex: tab === "track" ? "track" : "event",
      key: "trackOrEvent",
      render: (data) => (
        <UsernameImage
          name={tab === "track" ? data?.trackName || "N/A" : data?.eventName}
        />
      ),
    },
    { title: "Price", dataIndex: "amount", key: "amount" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <UsernameImage name={status} />,
    },
  ];

  return (
    <Table
      className="mt-2"
      dataSource={paymentDataInformation}
      columns={columns}
      pagination={pagination}
    />
  );
};

export default PaymentTable;
