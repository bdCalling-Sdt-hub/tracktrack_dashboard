
import UsernameImage from '../shared/UsernameImage'
import { Table } from 'antd'
import { PaymentData } from '../../Types/DataTypes'
import { PaymentTableProps } from '../../Types/PageProps'

const PaymentTable = ({ data, pagination, tab = 'Track' }: PaymentTableProps) => {
    const column = [
        { title: 'Host Name', dataIndex: 'host', key: 'host', render: (host: any) => <UsernameImage image={host?.profile_image} name={host?.name} email={host?.phoneNumber} /> },
        { title: 'User', dataIndex: 'user', key: 'user', render: (user: any) => <UsernameImage image={user?.profile_image} name={user?.name} email={user?.phoneNumber} /> },
        { title: tab === 'Track' ? 'Track Name' : 'Event Name', dataIndex: tab === 'Track' ?'track':'event', key: 'track', render: (trackOrEvent: any) => <UsernameImage name={tab === 'Track' ?trackOrEvent?.trackName:trackOrEvent?.eventName} /> },
        { title: 'Price', dataIndex: 'amount', key: 'amount' },
        { title: 'Address', dataIndex: 'track', key: 'track', render: (track: any) => <UsernameImage name={track?.address} /> },
        { title: 'Status', dataIndex: 'status', key: 'status', render: (status: any) => <UsernameImage name={status} /> },
    ]
    return (
        <>
            <Table className="mt-2"
                dataSource={data as PaymentData[]}
                columns={column}
                pagination={pagination}
            />
        </>
    )
}

export default PaymentTable
