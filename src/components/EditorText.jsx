import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const EditorText = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

    const config =
    {
        placeholder: 'Start typings...'
    };
	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { console.log(newContent)}}
            className="editor-text"
		/>
	);
};

export default EditorText