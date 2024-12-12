import { useState } from "react"
import PageHeading from "../../components/shared/PageHeading"
import Search from "../../components/shared/Search"
import { Radio, Table } from "antd"
import { BookingTypes } from "../../Types/DataTypes"
import UsernameImage from "../../components/shared/UsernameImage"
// example data
const data = {
    "Track": [
        {
            "user": {
                "name": "Alice Johnson",
                "phoneNumber": "+1234567890",
                "profile_image": "https://via.placeholder.com/150"
            },
            "host": {
                "name": "Bob Smith",
                "phoneNumber": "+0987654321",
                "profile_image": "https://via.placeholder.com/150"
            },
            "trackSlot": {
                "slotNo": "T01"
            },
            "track": {
                "trackName": "Grand Speedway",
                "address": "45 jus ijnks"
            },
            "startDateTime": "2024-12-15T10:00:00Z",
            "endDateTime": "2024-12-15T12:00:00Z"
        },
        {
            "user": {
                "name": "Michael Brown",
                "phoneNumber": "+9988776655",
                "profile_image": "https://via.placeholder.com/150"
            },
            "host": {
                "name": "Samantha Green",
                "phoneNumber": "+4455667788",
                "profile_image": "https://via.placeholder.com/150"
            },
            "trackSlot": {
                "slotNo": "T12"
            },
            "track": {
                "trackName": "Desert Circuit",
                "address": "45 jus ijnks"
            },
            "startDateTime": "2024-12-16T09:00:00Z",
            "endDateTime": "2024-12-16T11:30:00Z"
        },
        {
            "user": {
                "name": "Sophia White",
                "phoneNumber": "+5678901234",
                "profile_image": "https://via.placeholder.com/150"
            },
            "host": {
                "name": "Daniel Adams",
                "phoneNumber": "+6789012345",
                "profile_image": "https://via.placeholder.com/150"
            },
            "trackSlot": {
                "slotNo": "T15"
            },
            "track": {
                "trackName": "Mountain Trail",
                "address": "45 jus ijnks"
            },
            "startDateTime": "2024-12-22T14:00:00Z",
            "endDateTime": "2024-12-22T16:30:00Z"
        }
    ] as BookingTypes[],
    "Event": [
        {
            "user": {
                "name": "Emily Davis",
                "phoneNumber": "+1122334455",
                "profile_image": "https://via.placeholder.com/150"
            },
            "host": {
                "name": "John Walker",
                "phoneNumber": "+5566778899",
                "profile_image": "https://via.placeholder.com/150"
            },
            "eventSlot": {
                "slotNo": "E05"
            },
            "event": {
                "eventName": "Music Fest 2024",
                "address": "45 jus ijnks"
            },
            "startDateTime": "2024-12-20T18:00:00Z",
            "endDateTime": "2024-12-20T22:00:00Z"
        },
        {
            "user": {
                "name": "Michael Brown",
                "phoneNumber": "+9988776655",
                "profile_image": "https://via.placeholder.com/150"
            },
            "host": {
                "name": "Samantha Green",
                "phoneNumber": "+4455667788",
                "profile_image": "https://via.placeholder.com/150"
            },
            "eventSlot": {
                "slotNo": "E09"
            },
            "event": {
                "eventName": "Tech Conference 2024",
                "address": "45 jus ijnks"
            },
            "startDateTime": "2024-12-18T13:00:00Z",
            "endDateTime": "2024-12-18T15:00:00Z"
        },
        {
            "user": {
                "name": "Olivia Martin",
                "phoneNumber": "+2345678901",
                "profile_image": "https://via.placeholder.com/150"
            },
            "host": {
                "name": "Chris Evans",
                "phoneNumber": "+3456789012",
                "profile_image": "https://via.placeholder.com/150"
            },
            "eventSlot": {
                "slotNo": "E12"
            },
            "event": {
                "eventName": "Sports Gala 2024",
                "address": "45 jus ijnks"
            },
            "startDateTime": "2024-12-25T16:00:00Z",
            "endDateTime": "2024-12-25T20:00:00Z"
        }
    ] as BookingTypes[]

}

//tabs array
const Tabs = ['Track', 'Event']
const Booking = () => {
    // search text
    const [searchTerm, setSearchTerm] = useState('')

    //pagination
    const [page, setPage] = useState(1)

    // tabs 
    const [tab, setTab] = useState(Tabs?.[0])

    // table columns
    const column = [
        { title: 'Host', Key: 'host', dataIndex: 'host', render: (host: any) => <UsernameImage name={host?.name} email={host?.phoneNumber} image={host?.profile_image} /> },
        { title: 'User', Key: 'user', dataIndex: 'user', render: (user: any) => <UsernameImage name={user?.name} email={user?.phoneNumber} image={user?.profile_image} /> },
        { title: tab == 'Track' ? 'Track Name' : 'Event Name', Key: tab == 'Track' ? 'track' : 'event', dataIndex: tab == 'Track' ? 'track' : 'event', render: (trackOrEvent: any) => <UsernameImage name={tab == 'Track' ? trackOrEvent?.trackName : trackOrEvent?.eventName} /> },
        { title: 'Slot Number', Key: tab == 'Track' ? 'trackSlot' : 'eventSlot', dataIndex: tab == 'Track' ? 'trackSlot' : 'eventSlot', render: (trackSlotOrEventSlot: any) => <UsernameImage name={tab == 'Track' ? trackSlotOrEventSlot?.slotNo : trackSlotOrEventSlot?.slotNo} /> },
        { title: 'Start Date', Key: 'startDateTime', dataIndex: 'startDateTime', render: (startDateTime: any) => <UsernameImage name={startDateTime?.split('T')?.[0]} /> },
        { title: 'End Date', Key: 'endDateTime', dataIndex: 'endDateTime', render: (endDateTime: any) => <UsernameImage name={endDateTime?.split('T')?.[0]} /> },
        { title: 'End Date', Key: 'endDateTime', dataIndex: 'endDateTime', render: (endDateTime: any) => <UsernameImage name={endDateTime?.split('T')?.[0]} /> },
        { title: 'Address', Key: tab == 'Track' ? 'track' : 'event', dataIndex: tab == 'Track' ? 'track' : 'event', render: (trackOrEvent: any) => <UsernameImage name={tab == 'Track' ? trackOrEvent?.address : trackOrEvent?.address} /> },
    ]
    return (
        <>
            <div className="between-center gap-2 mb-4">
                {/* heading and back button */}
                <PageHeading
                    text="Booking"
                />
                {/* search and add category button */}
                <div className="end-center">
                    <Search
                        value={searchTerm}
                        setValue={setSearchTerm}
                    />
                </div>
            </div>
            <div className="bg-[var(--black-200)] p-2 rounded">
                <div className="start-center">
                    {
                        Tabs?.map((item: string) =>
                            <Radio
                                onChange={(value) => setTab(item)}
                                className="text-[var(--white-600)]"
                                checked={item == tab}
                                value={item}
                                key={item}>
                                {item}
                            </Radio>)
                    }
                </div>
                <Table
                    dataSource={data[tab as keyof typeof data]}
                    columns={column}
                    pagination={{
                        pageSize: 10,
                        total: 255,
                        showSizeChanger: false,
                        onChange: (page) => setPage(page)
                    }}
                />
            </div>
        </>
    )
}


export default Booking
