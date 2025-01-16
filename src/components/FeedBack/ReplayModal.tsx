import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import {
  useGerSingleFeedbackQuery,
  useSendFeedbackMutation,
} from "../../Redux/api/feedBackApis";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
interface ReplayModalProps {
  feedbackId: string | null;
}

const ReplayModal = ({ feedbackId }: ReplayModalProps) => {
  const [value, setValue] = useState("");
  const [sendFeedBack, { isLoading: isReply }] = useSendFeedbackMutation();
  const { data, isLoading } = useGerSingleFeedbackQuery({ id: feedbackId });

  if (isLoading) {
    return <p>..laoding</p>;
  }
  console.log(data?.data?.userName);
  const { userName, feedback } = data?.data;
  const feedBackHandle = async (id: string, replay: string) => {
    if (!id) {
      message.error("Invalid feedback ID");
      return;
    }
    if (!replay) {
      message.error("Reply cannot be empty");
      return;
    }

    try {
      await sendFeedBack({ id, replay }).unwrap();
      message.success("Reply sent successfully");
    } catch (error) {
      console.error("Error sending feedback:", error);
      message.error("Failed to send reply");
    }
  };

  return (
    <div className="bg-[var(--black-600)] p-4 rounded-md">
      <p className="text-2xl text-[var(--gray-600)]">Feedback Replay</p>

      <p className="text-lg text-[var(--gray-600)] my-1">
        Feedback form: {userName}
      </p>
      <p className="text-base text-[var(--gray-600)] p-2">{feedback}</p>

      <p className="text-lg text-[var(--gray-600)] mb-1">Your Reply :</p>
      <TextArea
        style={{
          resize: "none",
          height: "200px",
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="center-center mt-3">
        <button
          onClick={() => feedBackHandle(feedbackId || "", value)}
          style={{
            justifyContent: "center",
            width: "100px",
          }}
          className="sidebar-button-orange"
          disabled={!value.trim()}
        >
          {isReply ? (
            <Spin indicator={<LoadingOutlined spin />} size="small" />
          ) : (
            "Send"
          )}
        </button>
      </div>
    </div>
  );
};

export default ReplayModal;
