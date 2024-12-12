import { useState } from "react"
import { FeedbackDataType } from "../../Types/DataTypes"
import PageHeading from "../../components/shared/PageHeading"
import Search from "../../components/shared/Search"
import { Modal, Pagination } from "antd"
import { MdDelete } from "react-icons/md"
import { FaReply } from "react-icons/fa"
import ReplayModal from "../../components/FeedBack/ReplayModal"
import { RxCross2 } from "react-icons/rx"

// feedback data example 
const data: FeedbackDataType[] = [
    {
        "_id": "F001",
        "user": {
            "_id": "U001",
            "name": "Alice Johnson"
        },
        "review": "Great service! The experience was seamless and enjoyable.",
        "createdAt": "2024-12-01T10:00:00Z"
    },
    {
        "_id": "F002",
        "user": {
            "_id": "U002",
            "name": "Michael Brown"
        },
        "review": "The staff was very friendly, but the event started late.",
        "createdAt": "2024-12-03T15:30:00Z"
    },
    {
        "_id": "F003",
        "user": {
            "_id": "U003",
            "name": "Emily Davis"
        },
        "review": "Amazing track! Well-organized and clean facilities.",
        "createdAt": "2024-12-05T09:45:00Z"
    },
    {
        "_id": "F004",
        "user": {
            "_id": "U004",
            "name": "Sophia White"
        },
        "review": "The event was enjoyable, but the food options were limited.",
        "createdAt": "2024-12-07T12:00:00Z"
    },
    {
        "_id": "F005",
        "user": {
            "_id": "U005",
            "name": "Daniel Adams"
        },
        "review": "Fantastic experience! Will definitely recommend to others.",
        "createdAt": "2024-12-09T16:15:00Z"
    }
]
const Feedback = () => {
    // search text
    const [searchTerm, setSearchTerm] = useState('')

    //pagination
    const [page, setPage] = useState(1)

    //replay modal states
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="between-center gap-2 mb-4">
                {/* heading and back button */}
                <PageHeading
                    text="Feedback"
                />
                {/* search and add category button */}
                <div className="end-center">
                    <Search
                        value={searchTerm}
                        setValue={setSearchTerm}
                    />
                </div>
            </div>
            {/* map over feedbacks */}
            <div className="start-center flex-col gap-2 mb-4">
                {
                    data?.map((item: FeedbackDataType) => <div className="between-center gap-2 bg-[var(--black-200)] text-[var(--gray-600)] p-2 rounded" key={item?._id}>
                        <p className="w-[10%]">{item?.user?.name}</p>
                        <p className="text-left w-[50%]">{item?.review}</p>
                        <p className="w-[10%]">{item?.createdAt?.split('T')?.[0]}</p>
                        <button onClick={() => setOpen(true)} className="flex justify-center items-center text-[var(--orange-600)] border border-[var(--orange-600)] p-2 py-1 rounded gap-2">
                            <FaReply />  Pending
                        </button>
                        <MdDelete size={24} className="cursor-pointer" />
                    </div>)
                }
            </div>
            {/* pagination */}
            <Pagination
                pageSize={10}
                total={255}
                showSizeChanger={false}
                onChange={(page) => setPage(page)}
            />

            {/* replay feedback modal  */}

            <Modal
                open={open}
                centered
                footer={false}
                onCancel={() => setOpen(false)}
                closeIcon={<RxCross2 className="text-white" />}
            >
                <ReplayModal />
            </Modal>
        </>
    )
}

export default Feedback
