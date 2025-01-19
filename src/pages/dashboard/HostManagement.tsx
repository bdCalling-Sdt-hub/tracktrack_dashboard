import { useState } from "react";
import PageHeading from "../../components/shared/PageHeading";
import Search from "../../components/shared/Search";
import { message, Table } from "antd";
import UsernameImage from "../../components/shared/UsernameImage";
import DropdownSelectButton from "../../components/shared/DropdownSelectButton";
import {
  useGetAllHostQuery,
  useUpdateUserStatusMutation,
} from "../../Redux/api/usersApis";
export interface IAuthId {
  _id: string;
  isBlocked: boolean;
}
export interface Ihost {
  _id: string;
  name: string;
  profile_image: string;
  email: string;
  address: string;
  authId: IAuthId;
}
// example data
const HostManagement = () => {
  // search text
  const [searchTerm, setSearchTerm] = useState("");

  //pagination
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllHostQuery({
    searchTerm,
    role: "HOST",
    page,
  });
  console.log(data);

  const hosts =
    data?.data?.map((host: any, index: number) => ({
      _id: host._id,
      name: host?.authId?.name,
      profile_image:
        host.profile_image || `https://i.pravatar.cc/150?img=${index}`,
      email: host.email,
      address: host.address || "N/A",
      authId: {
        _id: host.authId?._id || null,
        isBlocked: host.authId?.isBlocked || false,
      },
    })) || [];

  // table columns
  const column = [
    {
      title: "Host",
      key: "host",
      dataIndex: "name",
      render: (name: string, record: Ihost) => (
        <UsernameImage
          name={name}
          email={record.email}
          image={record.profile_image}
        />
      ),
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Status",
      key: "authId",
      dataIndex: "authId",
      render: (authId: IAuthId) => (
        <DropdownSelectButton
          options={[
            {
              key: "1",
              label: <p>Block</p>,
              value: "yes",
            },
            {
              key: "2",
              label: <p>Unblock</p>,
              value: "no",
            },
          ]}
          text={authId?.isBlocked ? "Blocked" : "Unblocked"}
          handler={(status) => activeDeactivateHandler(authId?._id, status)}
        />
      ),
    },
  ];

  const [updateUserStatus, { isLoading: isUpdating }] =
    useUpdateUserStatusMutation();

  const activeDeactivateHandler = async (authId: any, status: any) => {
    if (!authId) {
      message.error("Invalid user ID");
      return;
    }
    console.log(status);

    const isBlocked = status;
    try {
      await updateUserStatus({ authId, isBlocked }).unwrap();
      message.success(
        `User has been ${
          status === "no" ? "deactivated" : "activated"
        } successfully`
      );
    } catch (error) {
      console.error("Error updating user status:", error);
      message.error("Failed to update user status");
    }
  };

  return (
    <>
      <div className="between-center gap-2 mb-4">
        {/* heading and back button */}
        <PageHeading text="Host Management" />
        {/* search and add category button */}
        <div className="end-center">
          <Search value={searchTerm} setValue={setSearchTerm} />
        </div>
      </div>
      <div className="bg-[var(--black-200)] p-2 rounded">
        <Table
          loading={isLoading || isUpdating}
          dataSource={hosts || []}
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

export default HostManagement;
