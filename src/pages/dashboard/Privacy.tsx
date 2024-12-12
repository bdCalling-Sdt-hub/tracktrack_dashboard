import { useState } from "react";
import PageHeading from "../../components/shared/PageHeading";
import JoditComponent from "../../components/shared/JoditComponent";

const Privacy = () => {
    const [content, setContent] = useState('');
    return (
        <>
            {/* heading and back button */}
            <PageHeading
                text="Privacy and Policy"
            />
            <JoditComponent
                setContent={setContent}
                content={content}
            />
        </>
    )
}

export default Privacy
