import { useState } from "react";
import PageHeading from "../../components/shared/PageHeading";
import Search from "../../components/shared/Search";
import { Radio, Table } from "antd";
import UsernameImage from "../../components/shared/UsernameImage";
import { useGetAllBookingsQuery } from "../../Redux/api/bookingApis";

// Tabs array
const Tabs = ["Track", "Event"];

export interface BookingHost {
    name?: string;
    email?: string;
    profile_image?: string;
    phoneNumber?: string;
}

export interface BookingUser {
    name?: string;
    email?: string;
    profile_image?: string;
    phoneNumber?: string;
}

interface Booking {
    _id: string;
    host?: BookingHost;
    user?: BookingUser;
    trackSlot?: { slotNo: string };
    eventSlot?: { slotNo: string };
    track?: { trackName: string; address: string };
    event?: { eventName: string; address: string };
    startDateTime: string;
    endDateTime: string;
    status: string;
    price: string;
}

const Booking = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [tab, setTab] = useState<string>(Tabs[0]);
    const { data, isLoading } = useGetAllBookingsQuery({ searchTerm, page });

    console.log(data);

    const bookingData = data?.data?.bookings.map((booking: Booking, i: number) => ({
        key: booking?._id,
        host: {
            name: booking?.host?.name,
            phoneNumber: booking?.host?.phoneNumber,
            profile_image: booking?.host?.profile_image || `https://i.pravatar.cc/150?img=${i}`,
        },
        user: {
            name: booking?.user?.name,
            phoneNumber: booking?.user?.phoneNumber,
            profile_image: booking?.user?.profile_image || `https://i.pravatar.cc/150?img=${i + 1}`,
        },
        slotNo: tab === "Track" ? booking?.trackSlot?.slotNo : booking?.eventSlot?.slotNo,
        name: tab === "Track" ? booking?.track?.trackName : booking?.event?.eventName,
        address: tab === "Track" ? booking?.track?.address : booking?.event?.address,
        startDateTime: booking?.startDateTime.split("T")[0],
        endDateTime: booking?.endDateTime.split("T")[0],
        status: booking?.status,
        price: booking?.price,
    }));

    // Table columns
    const columns = [
        {
            title: "Host",
            dataIndex: "host",
            key: "host",
            render: (host: BookingHost) => (
                <UsernameImage name={host?.name} email={host?.phoneNumber} image={host?.profile_image} />
            ),
        },
        {
            title: "User",
            dataIndex: "user",
            key: "user",
            render: (user: BookingUser) => (
                <UsernameImage name={user?.name} email={user?.phoneNumber} image={user?.profile_image} />
            ),
        },
        {
            title: tab === "Track" ? "Track Name" : "Event Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Slot Number",
            dataIndex: "slotNo",
            key: "slotNo",
        },
        {
            title: "Start Date",
            dataIndex: "startDateTime",
            key: "startDateTime",
        },
        {
            title: "End Date",
            dataIndex: "endDateTime",
            key: "endDateTime",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
    ];

    return (
        <>
            <div className="between-center gap-2 mb-4">
                <PageHeading text="Booking" />
                <div className="end-center">
                    <Search value={searchTerm} setValue={setSearchTerm} />
                </div>
            </div>
            <div className="bg-[var(--black-200)] p-2 rounded">
                <div className="start-center">
                    {Tabs.map((item) => (
                        <Radio
                            onChange={() => setTab(item)}
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
                    loading={isLoading}
                    dataSource={bookingData}
                    columns={columns}
                    pagination={{
                        pageSize: data?.data?.meta?.limit || 10,
                        total: data?.data?.meta?.total || 0,
                        showSizeChanger: false,
                        onChange: (page) => setPage(page),
                    }}
                />
            </div>
        </>
    );
};

export default Booking;
