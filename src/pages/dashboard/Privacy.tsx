import { useState } from "react";
import PageHeading from "../../components/shared/PageHeading";
import JoditComponent from "../../components/shared/JoditComponent";

const Privacy = () => {
  const [content, setContent] = useState("");

  const handleLogContent = () => {
    console.log("Content:", content);
  };

  return (
    <>
      {/* heading and back button */}
      <PageHeading text="Privacy and Policy" />
      <JoditComponent setContent={setContent} content={content} />

      {/* Button to log content */}
      <button
        onClick={handleLogContent}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
        className="max-w-48 sidebar-button-black"
      >
        Submit
      </button>
    </>
  );
};

export default Privacy;
