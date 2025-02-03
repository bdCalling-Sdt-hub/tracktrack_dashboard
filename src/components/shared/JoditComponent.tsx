import { useRef } from "react";
import JoditEditor from "jodit-react";
import { JoditProps } from "../../Types/PageProps";

const JoditComponent = ({ content, setContent }: JoditProps) => {
  const editor = useRef(null);



  return (
    <div className="mt-6">
      <JoditEditor
        ref={editor}
        value={content}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default JoditComponent;
