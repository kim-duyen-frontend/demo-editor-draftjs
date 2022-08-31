import { Editor, EditorState, RichUtils } from 'draft-js';
import React from 'react';
import { useState } from 'react';

const EditorText = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleFormatText = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return true;
        }
        return false;
    }
    return (
        <div className="container">
            <div className="editorText">
                <div className="editor">
                    <Editor
                        editorState={editorState}
                        onChange={(editorState) => setEditorState(editorState)}
                        handleKeyCommand={handleFormatText}
                    />
                </div>
            </div>

        </div>
    );
}

export default EditorText;