import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const PageHeading = ({ text, content }: { text: string, content?: string }) => {
    const navigate = useNavigate();
    return (
        <div className="start-center gap-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{text}</title>
                <meta name="description" content={content || ''} />
            </Helmet>
            <button className="text-[var(--white-600)] bg-[var(--black-600)] p-2 rounded-md text-2xl" onClick={() => navigate(-1)}>
                <IoMdArrowBack />
            </button>
            <p className="text-lg font-medium text-[var(--white-600)]">{text}</p>
        </div>
    );
};

export default PageHeading;
