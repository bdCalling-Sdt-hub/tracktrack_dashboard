import { useState } from "react"
import PageHeading from "../../components/shared/PageHeading"
import Search from "../../components/shared/Search"
import {  Table } from "antd"
import { HostDataTypes } from "../../Types/DataTypes"
import UsernameImage from "../../components/shared/UsernameImage"
import DropdownSelectButton from "../../components/shared/DropdownSelectButton"
// example data
const data: HostDataTypes[] = [
    {
        user: {
            name: "Bob Smith",
            email: "shaharulsiyam@gmail.com",
            profile_image: "https://via.placeholder.com/150",
            address: "123 Main Street, Springfield, USA",
            authId: {
                isBlocked: false
            }
        },
        totalTrack: "5",
        totalEvent: "10"
    },
    {
        user: {
            name: "Alice Johnson",
            email: "shaharulsiyam@gmail.com",
            profile_image: "https://via.placeholder.com/150",
            address: "456 Elm Street, Metropolis, USA",
            authId: {
                isBlocked: false
            }
        },
        totalTrack: "8",
        totalEvent: "6"
    },
    {
        user: {
            name: "Samantha Green",
            email: "shaharulsiyam@gmail.com",
            profile_image: "https://via.placeholder.com/150",
            address: "789 Oak Avenue, Gotham, USA",
            authId: {
                isBlocked: true
            }
        },
        totalTrack: "3",
        totalEvent: "12"
    },
    {
        user: {
            name: "Daniel Adams",
            email: "shaharulsiyam@gmail.com",
            profile_image: "https://via.placeholder.com/150",
            address: "321 Maple Road, Star City, USA",
            authId: {
                isBlocked: false
            }
        },
        totalTrack: "10",
        totalEvent: "15"
    },
    {
        user: {
            name: "Chris Evans",
            email: "shaharulsiyam@gmail.com",
            profile_image: "https://via.placeholder.com/150",
            address: "654 Pine Lane, Central City, USA",
            authId: {
                isBlocked: false
            }
        },
        totalTrack: "7",
        totalEvent: "9"
    }
];

const HostManagement = () => {
    // search text
    const [searchTerm, setSearchTerm] = useState('')

    //pagination
    const [page, setPage] = useState(1)

    // tabs 

    // table columns
    const column = [
        { title: 'Host', Key: 'user', dataIndex: 'user', render: (user: any) => <UsernameImage name={user?.name} email={user?.phoneNumber} image={user?.profile_image} /> },
        { title: 'Email', Key: 'user', dataIndex: 'user', render: (user: any) => <UsernameImage name={user?.email} /> },
        { title: 'Total Event', Key: 'totalEvent', dataIndex: 'totalEvent' },
        { title: 'Total Track', Key: 'totalTrack', dataIndex: 'totalTrack' },
        { title: 'Address', Key: 'user', dataIndex: 'user', render: (user: any) => <UsernameImage name={user?.address} /> },
        {
            title: 'Status', key: 'authId', dataIndex: 'authId', render: (authId: any, record: HostDataTypes) => <DropdownSelectButton
                options={[
                    {
                        key: '1',
                        label: <p>Active</p>,
                        value: 'active'
                    },
                    {
                        key: '2',
                        label: <p>Deactivate</p>,
                        value: 'deactivate'
                    }
                ]}
                text={authId?.isBlocked ? "Deactivate" : 'Active'}
                handler={activeDeactivateHandler}
            />
        },
    ]

    // handler 
    // active deactivate host
    const activeDeactivateHandler = (status: String) => {
        console.log(status)
    }
    return (
        <>
            <div className="between-center gap-2 mb-4">
                {/* heading and back button */}
                <PageHeading
                    text="Host Management"
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
                <Table
                    dataSource={data || []}
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

export default HostManagement
