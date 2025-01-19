import { useState } from "react";
import PageHeading from "../../components/shared/PageHeading";
import Search from "../../components/shared/Search";
import { Table } from "antd";
import UsernameImage from "../../components/shared/UsernameImage";
import { useGetAllPaymentInfoQuery } from "../../Redux/api/paymentApis";

const SrtipeInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllPaymentInfoQuery({ searchTerm, page });
  console.log(data);

  const hosts =
    data?.data.result?.map((host, index) => ({
      _id: host?._id,
      name: host?.host?.name || "N/A",
      profile_image:
        host?.host?.profile_image || `https://i.pravatar.cc/150?img=${index}`,
      email: host?.host?.email || "N/A",
      address: host?.host?.address || "N/A",
      phoneNumber: host?.host?.phoneNumber || "N/A",
      stripe_account_id: host?.stripe_account_id || "N/A",
      bank_account_no_last4: host?.bank_account_no_last4 || "N/A",
      routing_no: host?.routing_no || "N/A",
      createdAt: host?.createdAt,
      updatedAt: host?.updatedAt,
    })) || [];

  const column = [
    {
      title: "Host",
      key: "host",
      dataIndex: "name",
      render: (name, record) => (
        <UsernameImage
          name={name}
          email={record?.email}
          image={record?.profile_image}
        />
      ),
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Phone Number",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      title: "Stripe Account ID",
      key: "stripe_account_id",
      dataIndex: "stripe_account_id",
    },
    {
      title: "Bank Account Last 4",
      key: "bank_account_no_last4",
      dataIndex: "bank_account_no_last4",
    },
    {
      title: "Routing No.",
      key: "routing_no",
      dataIndex: "routing_no",
    },
  ];

  return (
    <>
      <div className="between-center gap-2 mb-4">
        <PageHeading text="Host Management" />
        <div className="end-center">
          <Search value={searchTerm} setValue={setSearchTerm} />
        </div>
      </div>
      <div className="bg-[var(--black-200)] p-2 rounded">
        <Table
          loading={isLoading}
          dataSource={hosts}
          columns={column}
          pagination={{
            pageSize: 10,
            total: data?.meta?.total || 0,
            showSizeChanger: false,
            onChange: (page) => setPage(page),
          }}
        />
      </div>
    </>
  );
};

export default SrtipeInfo;
