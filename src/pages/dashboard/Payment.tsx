import React, { useState } from "react";
import { Table, Radio } from "antd";
import PageHeading from "../../components/shared/PageHeading";
import Search from "../../components/shared/Search";
import { useGetAllPaymentQuery } from "../../Redux/api/paymentApis";
import { ColumnsType } from "antd/es/table";
import UsernameImage from "../../components/shared/UsernameImage";

const Tabs = ["track", "event"] as const;

interface Host {
  name: string;
  profile_image: string;
  phoneNumber: string;
}

interface User {
  name: string;
  profile_image: string;
  phoneNumber: string;
}

interface Track {
  trackName?: string | null;
  address?: string;
  eventName?: string | null;
}

interface Event {
  trackName?: string | null;
  eventName: string | null;
}

export interface PaymentData {
  _id: string;
  host: Host;
  user?: User | null;
  track?: Track | null;
  event?: Event | null;
  businessType: string;
  isPromotion: boolean;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Payment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tab, setTab] = useState<(typeof Tabs)[number]>("track");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: paymentData, isLoading: payLo } = useGetAllPaymentQuery({
    businessType: tab,
    page: currentPage,
    searchTerm,
  });

  const paymentDataInformation: PaymentData[] =
    paymentData?.data?.result?.map(
      (payment: PaymentData): PaymentData => ({
        _id: payment._id,
        host: {
          name: payment?.host?.name || "N/A",
          profile_image: payment?.host?.profile_image,
          phoneNumber: payment?.host?.phoneNumber || "N/A",
        },
        user: payment?.isPromotion
          ? null
          : {
              name: payment?.user?.name || "N/A",
              profile_image: payment?.user?.profile_image || "",
              phoneNumber: payment?.user?.phoneNumber || "N/A",
            },
        track:
          tab === "track"
            ? {
                trackName: "Sample Track",
                address: "Sample Address",
              }
            : null,
        event:
          tab === "event"
            ? {
                eventName: payment?.event?.eventName || "N/A",
              }
            : null,
        businessType: payment.businessType || "N/A",
        isPromotion: payment?.isPromotion === true ? true : false,
        amount: payment.amount || 0,
        status: payment.status || "N/A",
        createdAt: payment.createdAt,
        updatedAt: payment.updatedAt,
      })
    ) || [];

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
      render: (user: User | null, record: PaymentData) =>
        record.isPromotion && !record.user ? (
          <span>N/A</span>
        ) : (
          <UsernameImage
            image={user?.profile_image || ""}
            name={user?.name || "N/A"}
            email={user?.phoneNumber || "N/A"}
          />
        ),
    },
    {
      title: tab === "track" ? "Track Name" : "Event Name",
      dataIndex: tab === "track" ? "track" : "event",
      key: "trackOrEvent",
      render: (data: Track | Event | null) =>
        tab === "track" ? (
          <UsernameImage name={data?.trackName || "N/A"} />
        ) : (
          <UsernameImage name={data?.eventName || "N/A"} />
        ),
    },
    {
      title: "Price",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Promotion Status",
      dataIndex: "isPromotion",
      key: "promote",
      render: (isPromotion: boolean) =>
        isPromotion ? <span>Promoted</span> : <span>N/A</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <UsernameImage name={status} />,
    },
  ];

  if (payLo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-[var(--black-200)] p-2 rounded-md text-[var(--white-600)]">
      <PageHeading text="Payment" />
      <div className="end-center">
        <Search value={searchTerm} setValue={setSearchTerm} />
      </div>
      <div className="start-center mt-3 ml-2">
        {Tabs.map((item) => (
          <Radio
            onChange={() => {
              setTab(item);
              setCurrentPage(1);
            }}
            className="text-[var(--white-600)]"
            checked={item === tab}
            value={item}
            key={item}
          >
            {item}
          </Radio>
        ))}
      </div>
      <Table
        className="mt-2"
        dataSource={paymentDataInformation}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: 10,
          total: paymentData?.data?.meta?.total || 0,
          showSizeChanger: false,
          onChange: (page) => setCurrentPage(page),
        }}
      />
    </div>
  );
};

export default Payment;
