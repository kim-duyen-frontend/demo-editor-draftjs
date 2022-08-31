import { Editor, EditorState } from 'draft-js';
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
    render() {
        const { editorState } = this.state;
        return (
            <div className="container">
                <div className="editorText">
                    <div className="editor">
                        <Editor editorState={editorState} onChange={this.onChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorText;