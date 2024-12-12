import { Table } from "antd"
import { UserDataType } from "../../Types/DataTypes"
import UsernameImage from "../../components/shared/UsernameImage"
import DropdownSelectButton from "../../components/shared/DropdownSelectButton"
// example data 
const userData: UserDataType[] = [
    {
        "_id": "64e7f6a5d7b14c12a8ef1234",
        "name": "John Doe",
        "profile_image": "https://placehold.co/400",
        "email": "johndoe@example.com",
        "address": "123 Main Street, Springfield, USA",
        "authId": {
            "_id": "b9d2e5f6a7c84b9a12cd4567",
            "isBlocked": false
        }
    },
    {
        "_id": "74f9e7c6d8a25f13b9fe5678",
        "name": "Jane Smith",
        "profile_image": "https://placehold.co/400",
        "email": "janesmith@example.com",
        "address": "456 Elm Street, Metropolis, USA",
        "authId": {
            "_id": "c1f2g3h4i5j6k7l8m9n01234",
            "isBlocked": true
        }
    },
    {
        "_id": "85g0h1i2j3k45l67m8n9o123",
        "name": "Alice Johnson",
        "profile_image": "https://placehold.co/400",
        "email": "alicejohnson@example.com",
        "address": "789 Oak Avenue, Gotham, USA",
        "authId": {
            "_id": "d2e3f4g5h6i7j8k9l0123456",
            "isBlocked": false
        }
    },
    {
        "_id": "96i0j1k2l3m45n67o8p9q234",
        "name": "Robert Brown",
        "profile_image": "https://placehold.co/400",
        "email": "robertbrown@example.com",
        "address": "321 Maple Road, Star City, USA",
        "authId": {
            "_id": "e3f4g5h6i7j8k9l012345678",
            "isBlocked": true
        }
    },
    {
        "_id": "07k8l9m0n1o23p45q6r7s890",
        "name": "Emily Davis",
        "profile_image": "https://placehold.co/400",
        "email": "emilydavis@example.com",
        "address": "654 Pine Lane, Central City, USA",
        "authId": {
            "_id": "f4g5h6i7j8k9l01234567890",
            "isBlocked": false
        }
    }
]
const UserManagement = () => {
    // column 
    const column = [
        { title: 'User Name', key: 'name', dataIndex: 'name', render: (name: string, record: UserDataType) => <UsernameImage name={name} image={record?.profile_image} /> },
        { title: 'Email', key: 'email', dataIndex: 'email' },
        { title: 'Address', key: 'address', dataIndex: 'address' },
        {
            title: 'Status', key: 'authId', dataIndex: 'authId', render: (authId: any, record: UserDataType) => <DropdownSelectButton
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
    // active deactivate handler 
    const activeDeactivateHandler = (status: String) => {
        console.log(status)
    }
    return (
        <div className="">
            <Table
                dataSource={userData}
                columns={column}
            />
        </div>
    )
}

export default UserManagement
