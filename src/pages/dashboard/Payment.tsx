import { useState } from "react";
import PaymentTable from "../../components/PaymentPage/PaymentTable";
import PageHeading from "../../components/shared/PageHeading"
import { PaymentData } from "../../Types/DataTypes"
import { Radio } from "antd";
//data example
const data = {
    Track: [
        {
            user: {
                name: "Alice Johnson",
                phoneNumber: "+1234567890",
                profile_image: "https://via.placeholder.com/150"
            },
            host: {
                name: "Bob Smith",
                phoneNumber: "+0987654321",
                profile_image: "https://via.placeholder.com/150"
            },
            track: {
                trackName: "Grand Speedway",
                address: "45 jus ijnks"
            },
            amount: "£120",
            status: "success"
        },
        {
            user: {
                name: "Michael Brown",
                phoneNumber: "+9988776655",
                profile_image: "https://via.placeholder.com/150"
            },
            host: {
                name: "Samantha Green",
                phoneNumber: "+4455667788",
                profile_image: "https://via.placeholder.com/150"
            },
            track: {
                trackName: "Desert Circuit",
                address: "89 Sunset Blvd"
            },
            amount: "$100",
            status: "pending"
        },
        {
            user: {
                name: "Sophia White",
                phoneNumber: "+5678901234",
                profile_image: "https://via.placeholder.com/150"
            },
            host: {
                name: "Daniel Adams",
                phoneNumber: "+6789012345",
                profile_image: "https://via.placeholder.com/150"
            },
            track: {
                trackName: "Mountain Trail",
                address: "12 Rocky Rd"
            },
            amount: "€90",
            status: "failed"
        }
    ] as PaymentData[] ,
    Event: [
        {
            user: {
                name: "Emily Davis",
                phoneNumber: "+1122334455",
                profile_image: "https://via.placeholder.com/150"
            },
            host: {
                name: "John Walker",
                phoneNumber: "+5566778899",
                profile_image: "https://via.placeholder.com/150"
            },
            event: {
                eventName: "Music Fest 2024",
                address: "20 Melodic Lane"
            },
            amount: "£200",
            status: "success"
        },
        {
            user: {
                name: "Michael Brown",
                phoneNumber: "+9988776655",
                profile_image: "https://via.placeholder.com/150"
            },
            host: {
                name: "Samantha Green",
                phoneNumber: "+4455667788",
                profile_image: "https://via.placeholder.com/150"
            },
            event: {
                eventName: "Tech Conference 2024",
                address: "45 Silicon St"
            },
            amount: "$300",
            status: "success"
        },
        {
            user: {
                name: "Olivia Martin",
                phoneNumber: "+2345678901",
                profile_image: "https://via.placeholder.com/150"
            },
            host: {
                name: "Chris Evans",
                phoneNumber: "+3456789012",
                profile_image: "https://via.placeholder.com/150"
            },
            event: {
                eventName: "Sports Gala 2024",
                address: "78 Stadium Rd"
            },
            amount: "€250",
            status: "success"
        }
    ]as PaymentData[]
};

const Tabs = ['Track', 'Event']
const Payment = () => {
    //table column 
    const [tab, setTab] = useState(Tabs?.[0])
    return (
        <div className="bg-[var(--black-200)] p-2 rounded-md text-[var(--white-600)]">
            <PageHeading
                text="Payment"
            />
            <div className="start-center mt-3 ml-2">
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
            <PaymentTable
                data={data[tab as keyof typeof data]}
                tab={tab}
                pagination={{
                    pageSize: 10,
                    total: 100,
                    showSizeChanger: false,
                    onChange: (page) => console.log(page)
                }}
            />
        </div>
    )
}

export default Payment
