import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { FaBold, FaItalic, FaUnderline, FaCode } from "react-icons/fa";

class EditorText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onChange = (editorState) => {
            this.setState({ editorState })
        }
    }
    handleFormatText(command) {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    render() {
        const { editorState } = this.state;

        return (
            <div className="container">
                <div className="editorText">
                    <div>
                        <button onClick={() => this.handleFormatText("bold")}><FaBold /></button>
                        <button onClick={() => this.handleFormatText("italic")}><FaItalic /></button>
                        <button onClick={() => this.handleFormatText("underline")}><FaUnderline /></button>
                        <button onClick={() => this.handleFormatText("code")}><FaCode /></button>
                    </div>
                    <div className="editor">
                        <Editor
                            editorState={editorState}
                            onChange={this.onChange}
                            handleKeyCommand={this.handleFormatText.bind(this)}
                            placeholder="Input your text..."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorText;