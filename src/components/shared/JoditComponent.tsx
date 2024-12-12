import { useRef } from 'react';
import JoditEditor from 'jodit-react';
import { JoditProps } from '../../Types/PageProps';

const JoditComponent = ({ content, setContent }: JoditProps) => {
    const editor = useRef(null);

    const config = {
        readonly: false,
        placeholder: 'Start typing...',
        height: 500, 
        toolbarButtonSize: 'small', 
        showCharsCounter: false,  
        showWordsCounter: false,
        showXPathInStatusbar: false, 
        buttons: ['bold', 'italic', 'underline', 'link', 'align', 'undo', 'redo'],
    };

    return (
        <div className='mt-6'>
            <JoditEditor
                ref={editor}
                value={content}
                //@ts-ignore
                config={config}
                onBlur={newContent => setContent(newContent)} // Update content on blur for performance
                onChange={newContent => { }} // Can remain empty as it's handled in onBlur
            />
        </div>
    );
};

export default JoditComponent;
