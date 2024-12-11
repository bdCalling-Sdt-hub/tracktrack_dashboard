import PageHeading from "../../components/shared/PageHeading"
import UsernameImage from "../../components/shared/UsernameImage"
import { PaymentData } from "../../Types/DataTypes"
import { Table } from "antd";
//data example
const data: PaymentData[] = [
    {
        host: {
            name: "Giring Furqan",
            phoneNumber: "+99 248 525652321",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Giring Furqan",
            phoneNumber: "+99 248 525652321",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Boosters A/B on offers",
            address: "3890 Poplar Dr"
        },
        amount: "£120"
    },
    {
        host: {
            name: "John-W-BOSTON",
            phoneNumber: "+99 458 365652321",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "John-W-BOSTON",
            phoneNumber: "+99 458 365652321",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Track C/D Weekly Discount",
            address: "3605 Parker Rd"
        },
        amount: "£100"
    },
    {
        host: {
            name: "Yanto Jericho",
            phoneNumber: "+92 308 32572113",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Yanto Jericho",
            phoneNumber: "+92 308 32572113",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Weekend Race Discounts",
            address: "8585 Green Rd"
        },
        amount: "£150"
    },
    {
        host: {
            name: "Lukman Farhan",
            phoneNumber: "+98 654 89236547",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Lukman Farhan",
            phoneNumber: "+98 654 89236547",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Exclusive A/B Track",
            address: "775 Rolling Green Rd"
        },
        amount: "£140"
    },
    {
        host: {
            name: "Dimas Kamal",
            phoneNumber: "+91 987 6543210",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Dimas Kamal",
            phoneNumber: "+91 987 6543210",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Boosters E/F Special Offer",
            address: "8080 Railway Dr"
        },
        amount: "£110"
    },
    {
        host: {
            name: "Hari Danang",
            phoneNumber: "+90 123 4567890",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Hari Danang",
            phoneNumber: "+90 123 4567890",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Midweek Madness Tracks",
            address: "1234 Elm St"
        },
        amount: "£130"
    },
    {
        host: {
            name: "Alan Marcus",
            phoneNumber: "+93 789 6543210",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Alan Marcus",
            phoneNumber: "+93 789 6543210",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Boosters A/B on offers",
            address: "7529 E. Peace Rd"
        },
        amount: "£120"
    },
    {
        host: {
            name: "Giring Furqan",
            phoneNumber: "+99 248 525652321",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Giring Furqan",
            phoneNumber: "+99 248 525652321",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Early Bird Discounts",
            address: "3890 Poplar Dr"
        },
        amount: "£115"
    },
    {
        host: {
            name: "Lukman Farhan",
            phoneNumber: "+98 654 89236547",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Lukman Farhan",
            phoneNumber: "+98 654 89236547",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Track B/C Race Offer",
            address: "775 Rolling Green Rd"
        },
        amount: "£125"
    },
    {
        host: {
            name: "Yanto Jericho",
            phoneNumber: "+92 308 32572113",
            profile_image: "https://via.placeholder.com/150"
        },
        user: {
            name: "Yanto Jericho",
            phoneNumber: "+92 308 32572113",
            profile_image: "https://via.placeholder.com/150"
        },
        track: {
            trackName: "Weekend Special Discounts",
            address: "8585 Green Rd"
        },
        amount: "£140"
    }
];


const Payment = () => {
    //table column 
    const column = [
        { title: 'Host Name', dataIndex: 'host', key: 'host', render: (host: any) => <UsernameImage image={host?.profile_image} name={host?.name} email={host?.phoneNumber} /> },
        { title: 'User', dataIndex: 'user', key: 'user', render: (user: any) => <UsernameImage image={user?.profile_image} name={user?.name} email={user?.phoneNumber} /> },
        { title: 'Track Name', dataIndex: 'track', key: 'track', render: (track: any) => <UsernameImage name={track?.trackName} /> },
        { title: 'Price', dataIndex: 'amount', key: 'amount' },
        { title: 'Address', dataIndex: 'track', key: 'track', render: (track: any) => <UsernameImage name={track?.address} /> },
    ]
    return (
        <div className="bg-[var(--black-200)] p-2 rounded-md text-[var(--white-600)]">
            <PageHeading
                text="Payment"
            />
            <Table className="mt-2"
                dataSource={data as PaymentData[]}
                columns={column}
            />
        </div>
    )
}

export default Payment
