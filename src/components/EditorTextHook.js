import { Editor, EditorState } from 'draft-js';
import React from 'react';
import { useState } from 'react';

const EditorText = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());


    return (
        <div>
            <Editor editorState={editorState} onChange={(editorState) => setEditorState(editorState)} />
        </div>
    );
}

export default EditorText;