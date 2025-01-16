import { useState } from "react";
import { FeedbackDataType } from "../../Types/DataTypes";
import PageHeading from "../../components/shared/PageHeading";
import Search from "../../components/shared/Search";
import { message, Modal, Pagination, Popconfirm } from "antd";
import { MdDelete } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import ReplayModal from "../../components/FeedBack/ReplayModal";
import { RxCross2 } from "react-icons/rx";
import {
  useDeleteFeedbackMutation,
  useGetTotalFeedBackQuery,
} from "../../Redux/api/feedBackApis";

const Feedback = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Typed searchTerm state
  const [page, setPage] = useState<number>(1); // Typed page state
  const [selectedFeedbackId, setSelectedFeedbackId] = useState<string | null>(
    null
  );
  const {
    data: feedBackData,
    isLoading: feedBackLoading,
    refetch,
  } = useGetTotalFeedBackQuery({ searchTerm, page });
  const [deleteFeedback, { isLoading: isDeleting }] =
    useDeleteFeedbackMutation();
  const [open, setOpen] = useState<boolean>(false); // Typed modal state

  if (feedBackLoading || isDeleting) {
    return <p>...loading</p>;
  }

  const feedbacks = feedBackData?.data?.result || [];

  const handleCategoryDelete = async (id: string) => {
    try {
      await deleteFeedback({ id }).unwrap();
      message.success("Category deleted successfully.");
      refetch();
    } catch (error) {
      console.error("Failed to delete category:", error);
      message.error("Failed to delete category.");
    }
  };

  const handleReplyClick = (id: string) => {
    setSelectedFeedbackId(id); // Store the selected feedback ID
    setOpen(true); // Open the modal
  };

  return (
    <>
      <div className="between-center gap-2 mb-4">
        {/* Page Heading */}
        <PageHeading text="Feedback" />

        {/* Search Component */}
        <div className="end-center">
          <Search value={searchTerm} setValue={setSearchTerm} />
        </div>
      </div>

      {/* Feedback List */}
      <div className="start-center flex-col gap-2 mb-4">
        {feedbacks?.map((item: FeedbackDataType) => (
          <div
            className="between-center gap-2 bg-[var(--black-200)] text-[var(--gray-600)] p-2 rounded"
            key={item._id}
          >
            <p className="w-[10%]">{item.userName}</p>
            <p className="text-left w-[50%]">{item.feedback}</p>
            <p className="w-[10%]">{item.createdAt?.split("T")?.[0]}</p>
            <button
              onClick={() => handleReplyClick(item._id)} // Pass item._id to handleReplyClick
              className="flex justify-center items-center text-[var(--orange-600)] border border-[var(--orange-600)] p-2 py-1 rounded gap-2"
            >
              <FaReply /> Pending
            </button>

            <Popconfirm
              title="Confirm Deletion"
              description="Are you sure you want to delete this category?"
              onConfirm={() => handleCategoryDelete(item._id)}
              onCancel={() => console.log("Cancelled")}
              okText="Yes"
              cancelText="No"
            >
              {isDeleting ? (
                "deleting"
              ) : (
                <MdDelete className="cursor-pointer text-red-500 text-2xl" />
              )}
            </Popconfirm>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        pageSize={feedBackData?.data?.meta?.limit || 10}
        total={feedBackData?.data?.meta?.total || 0}
        showSizeChanger={false}
        onChange={(page) => setPage(page)}
      />

      {/* Replay Feedback Modal */}
      <Modal
        open={open}
        centered
        footer={false}
        onCancel={() => setOpen(false)}
        closeIcon={<RxCross2 className="text-white" />}
      >
        <ReplayModal feedbackId={selectedFeedbackId} />
      </Modal>
    </>
  );
};

export default Feedback;
