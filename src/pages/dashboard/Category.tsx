import { useState } from "react";
import {
  useDeleteCategoriesMutation,
  useGetAllCategoriesQuery,
} from "../../Redux/api/categoryApis";
import { message, Modal, Popconfirm, Table } from "antd";
import UsernameImage from "../../components/shared/UsernameImage";
import { MdDelete } from "react-icons/md";
import PageHeading from "../../components/shared/PageHeading";
import { FaPlus } from "react-icons/fa";
import CategoryAddModal from "../../components/CategoryPage/CategoryAddModal";
import Search from "../../components/shared/Search";
interface Category {
  name: string;
  category_image: string;
  _id: string;
}
const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, refetch } = useGetAllCategoriesQuery({
    searchTerm,
    page,
  });
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoriesMutation();

  const categories: Category[] =
    data?.data?.category?.map(
      (category: Category): Category => ({
        name: category?.name,
        category_image: category?.category_image,
        _id: category?._id,
      })
    ) || [];
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleCategoryDelete = async (categoryId: string) => {
    console.log(categoryId);

    try {
      await deleteCategory({ categoryId }).unwrap();
      message.success("Category deleted successfully.");
      refetch();
    } catch (error) {
      console.error("Failed to delete category:", error);
      message.error("Failed to delete category.");
    }
  };

  const columns = [
    { title: "Category Name", key: "name", dataIndex: "name" },
    {
      title: "Category Image",
      key: "category_image",
      dataIndex: "category_image",
      render: (category_image: string) => (
        <UsernameImage image={category_image} />
      ),
    },
    {
      title: "Actions",
      key: "_id",
      dataIndex: "_id",
      render: (_id: string) => (
        <Popconfirm
          title="Confirm Deletion"
          description="Are you sure you want to delete this category?"
          onConfirm={() => handleCategoryDelete(_id)}
          onCancel={() => console.log("Cancelled")}
          okText="Yes"
          cancelText="No"
        >
          <MdDelete className="cursor-pointer text-red-500 text-2xl" />
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <div className="between-center gap-2 mb-4">
        {/* Heading and back button */}
        <PageHeading text="Category" />
        {/* Search and add category button */}
        <div className="end-center">
          <Search value={searchTerm} setValue={setSearchTerm} />
          <button
            onClick={() => setCategoryModalOpen(true)}
            style={{
              maxWidth: "220px",
              justifyContent: "center",
              height: "44px",
            }}
            className="sidebar-button-black whitespace-nowrap"
          >
            Add New Category <FaPlus />
          </button>
        </div>
      </div>
      {/* Category table */}
      <Table
        loading={isLoading || isDeleting}
        columns={columns}
        dataSource={categories}
        rowKey="_id"
        pagination={{
          pageSize: data?.data?.meta?.limit || 10,
          total: data?.data?.meta?.total || 0,
          showSizeChanger: false,
          onChange: (page) => setPage(page),
        }}
      />
      {/* Category Add Modal */}
      <Modal
        open={categoryModalOpen}
        onCancel={() => setCategoryModalOpen(false)}
        footer={false}
        centered
      >
        <CategoryAddModal closeModal={() => setCategoryModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Category;
