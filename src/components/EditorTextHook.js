import { Editor, EditorState } from 'draft-js';
import React from 'react';
import { useState } from 'react';

const EditorText = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div className="container">
            <div className="editorText">
                <div className="editor">
                    <Editor editorState={editorState} onChange={(editorState) => setEditorState(editorState)} />
                </div>
            </div>

        </div>
    );
}

export default EditorText;