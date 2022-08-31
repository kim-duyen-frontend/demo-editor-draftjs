import { Editor, EditorState, RichUtils } from 'draft-js';
import React, { Component } from 'react';

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
                    <div className="editor">
                        <Editor editorState={editorState} onChange={this.onChange} handleKeyCommand={this.handleFormatText.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorText;