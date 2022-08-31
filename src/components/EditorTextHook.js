import { useState } from 'react';
import { convertFromRaw, convertToRaw, Editor, EditorState, RichUtils } from 'draft-js';
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
    const convertContentStateToJson = () => {
        const contentState = editorState.getCurrentContent();
        const raw = convertToRaw(contentState);
        return JSON.stringify(raw, null, 2);
    }
    const handleSaveContent = () => {
        let textJson = convertContentStateToJson();
        localStorage.setItem("draftEditorContentJson", textJson);
    }
    const loadContent = () => {
        const isExist = localStorage.getItem("draftEditorContentJson");
        return isExist ? JSON.parse(isExist) : null;
    }
    const setEditorContent = () => {
        let data = loadContent();
        if (data !== null) {
            let contentState = convertFromRaw(data);
            let newStateEditor = EditorState.createWithContent(contentState);
            setEditorState(newStateEditor);
        }
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
            <div className="btnSave">
                <button onClick={handleSaveContent}>Save Content</button>
                <button onClick={setEditorContent}>Load Content</button>
            </div>
            <p>Display ContentState:</p>
            <pre>{convertContentStateToJson()}</pre>
        </div>
    );
}

export default EditorText;