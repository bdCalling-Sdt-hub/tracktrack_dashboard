import { MdDelete } from "react-icons/md"
import UsernameImage from "../../components/shared/UsernameImage"
import { CategoryData } from "../../Types/PageProps"
import { Input, Modal, Popconfirm, Table } from "antd"
import PageHeading from "../../components/shared/PageHeading"
import { useState } from "react"
import { FaPlus, FaSearch } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import Search from "../../components/shared/Search"
import CategoryAddModal from "../../components/CategoryPage/CategoryAddModal"

//category dummy data 
const data: CategoryData[] = [
    { name: 'Boosters A/B on offers', category_image: "https://via.placeholder.com/150", _id: '1' },
    { name: 'Boosters A/B on offers', category_image: "https://via.placeholder.com/150", _id: '2' },
    { name: 'Boosters A/B on offers', category_image: "https://via.placeholder.com/150", _id: '3' },
    { name: 'Boosters A/B on offers', category_image: "https://via.placeholder.com/150", _id: '4' },
]
const Category = () => {
    // states 
    // search text
    const [searchTerm, setSearchTerm] = useState('')

    // category add modal
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    //table columns 
    const columns = [
        { title: 'Category name', key: 'name', dataIndex: 'name' },
        { title: 'Category Image', key: 'category_image', dataIndex: 'category_image', render: (category_image: string) => <UsernameImage image={category_image} /> },
        {
            title: 'Actions', key: '_id', dataIndex: '_id', render: (_id: string) => <Popconfirm
                title="Confirm Deletion"
                description="Are you sure you want to delete this category?"
                onConfirm={() => handleCategoryDelete(_id)}
                onCancel={() => console.log("Cancelled")}
                okText="Yes"
                cancelText="No"
            >
                <MdDelete className="cursor-pointer text-red-500 text-2xl" />
            </Popconfirm>
        },
    ]

    // handlers 
    // category delete handler
    const handleCategoryDelete = (_id: string) => {
        console.log(_id)
    }


    return (
        <>
            <div className="between-center gap-2 mb-4">
                {/* heading and back button */}
                <PageHeading
                    text="Category"
                />
                {/* search and add category button */}
                <div className="end-center">
                    <Search
                        value={searchTerm}
                        setValue={setSearchTerm}
                    />
                    <button
                        onClick={() => setCategoryModalOpen(true)}
                        style={{
                            maxWidth: '220px',
                            justifyContent: 'center',
                            height: '44px'
                        }}
                        className="sidebar-button-black whitespace-nowrap">
                        Add New Category <FaPlus />
                    </button>
                </div>
            </div>
            {/* category table */}
            <Table
                columns={columns}
                dataSource={data}
            />
            {/* Category Add Modal  */}
            <Modal
                open={categoryModalOpen}
                onCancel={() => setCategoryModalOpen(false)}
                footer={false}
                centered
            >
                <CategoryAddModal
                    closeModal={() => setCategoryModalOpen(false)}
                />
            </Modal>
        </>
    )
}

export default Category
