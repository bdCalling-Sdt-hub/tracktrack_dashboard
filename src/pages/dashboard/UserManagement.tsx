import { useState } from "react";
import { Table, message } from "antd"; import { useGetAllUsersQuery, useUpdateUserStatusMutation } from "../../Redux/api/usersApis";
import { UserDataType } from "../../Types/DataTypes";
import UsernameImage from "../../components/shared/UsernameImage";
import DropdownSelectButton from "../../components/shared/DropdownSelectButton";
import PageHeading from "../../components/shared/PageHeading";
import { IAuthId } from "./HostManagement";
import Search from "../../components/shared/Search";

const UserManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const { data, isLoading: isUserLoading } = useGetAllUsersQuery({ searchTerm, role: "USER", page });
    const [updateUserStatus, { isLoading: isUpdating }] = useUpdateUserStatusMutation();

    const users =
        data?.data?.map((user: any, i: any) => ({
            _id: user._id,
            name: user.name,
            profile_image: user.profile_image || `https://i.pravatar.cc/150?img=${i}`,
            email: user.email,
            address: user.address || "N/A",
            authId: {
                _id: user.authId?._id,
                isBlocked: user.authId?.isBlocked || false,
            },
        })) || [];

    const activeDeactivateHandler = async (authId: string, status: string) => {
        if (!authId) {
            message.error("Invalid user ID");
            return;
        }

        const isBlocked = status;
        try {
            await updateUserStatus({ authId, isBlocked }).unwrap();
            message.success(`User has been ${status === "no" ? "deactivated" : "activated"} successfully`);
        } catch (error) {
            console.error("Error updating user status:", error);
            message.error("Failed to update user status");
        }
    };

    const columns = [
        {
            title: "User Name",
            key: "name",
            dataIndex: "name",
            render: (name: string, record: UserDataType) => (
                <UsernameImage name={name} image={record?.profile_image} />
            ),
        },
        { title: "Email", key: "email", dataIndex: "email" },
        { title: "Address", key: "address", dataIndex: "address" },
        {
            title: "Status",
            key: "authId",
            dataIndex: "authId",
            render: (authId: IAuthId) => (
                <DropdownSelectButton
                    options={[
                        {
                            key: "1",
                            label: <p>Activate</p>,
                            value: "yes",
                        },
                        {
                            key: "2",
                            label: <p>Deactivate</p>,
                            value: "no",
                        },
                    ]}
                    text={authId?.isBlocked ? "Active" : "Deactivate"}
                    handler={(status) => activeDeactivateHandler(authId?._id, status)}
                />
            ),
        },
    ];

    return (
        <>
            <div className="between-center gap-2 mb-4">
                <PageHeading text="User Management" />
                <div className="end-center">
                    <Search value={searchTerm} setValue={setSearchTerm} />
                </div>
            </div>
            <Table
                loading={isUserLoading || isUpdating}
                dataSource={users}
                columns={columns}
                rowKey="_id"
                pagination={{
                    pageSize: 10,
                    total: data?.meta?.total || 0,
                    showSizeChanger: false,
                    onChange: (page) => setPage(page)
                }}
            />
        </>
    );
};

export default UserManagement;
