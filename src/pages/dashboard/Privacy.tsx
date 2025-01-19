import { useState, useEffect } from "react";
import { notification } from "antd";
import PageHeading from "../../components/shared/PageHeading";
import JoditComponent from "../../components/shared/JoditComponent";
import {
  useGetPrivecyPolicyQuery,
  usePostPrivecyPolicyMutation,
} from "../../Redux/api/termsConditionsApis copy";

const Terms = () => {
  const [content, setContent] = useState("");
  const { data, isLoading } = useGetPrivecyPolicyQuery({});
  const [setDescription, { isLoading: isSubmitting }] =
    usePostPrivecyPolicyMutation();

  useEffect(() => {
    if (data?.data?.description) {
      setContent(data.data.description);
    }
  }, [data]);

  const handleLogContent = async () => {
    try {
      await setDescription({ description: content }).unwrap();
      notification.success({
        message: "Success",
        description: "Terms & Conditions updated successfully!",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to update Terms & Conditions. Please try again.",
      });
    }
  };

  if (isLoading) {
    return <p>..loading</p>;
  }

  return (
    <>
      {/* heading and back button */}
      <PageHeading text="Privacy & Policy" />
      <JoditComponent setContent={setContent} content={content} />

      {/* Button to log content */}
      <button
        onClick={handleLogContent}
        disabled={isSubmitting}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
        className="max-w-48 sidebar-button-black"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};

export default Terms;
