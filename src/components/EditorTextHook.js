import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { FaBold, FaItalic, FaUnderline, FaCode } from "react-icons/fa";

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
                <div>
                    <button onClick={() => handleFormatText("bold")}><FaBold /></button>
                    <button onClick={() => handleFormatText("italic")}><FaItalic /></button>
                    <button onClick={() => handleFormatText("underline")}><FaUnderline /></button>
                    <button onClick={() => handleFormatText("code")}><FaCode /></button>
                </div>
                <div className="editor">
                    <Editor
                        editorState={editorState}
                        onChange={(editorState) => setEditorState(editorState)}
                        handleKeyCommand={handleFormatText}
                        placeholder="Input your text..."
                    />
                </div>
            </div>

        </div>
    );
}

export default EditorText;