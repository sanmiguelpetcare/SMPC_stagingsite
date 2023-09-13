import React, { useState, useEffect} from "react";
import _ from "lodash";
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const FieldEditor = props => {
    const [state, setState] = useState({
        isValueLoaded: false,
        editorState: EditorState.createEmpty()
    });

    useEffect((prevProps) => {
        setState({
                ...state,
                isValueLoaded: true,
                editorState: EditorState.createWithContent( ContentState.createFromBlockArray( convertFromHTML( props.value ? props.value : "" ) ) )
            });
    }, []);

    const onChange = () => {
        if( props.onChange ) {
            props.onChange( { target: { name: props.name, value: draftToHtml( convertToRaw( state.editorState.getCurrentContent() ) ) } } );
        }
    }

    const onEditorStateChange = ( editorState ) => {
        setState({
            editorState
        });
    }
    
    return (
        <Editor
            editorState={ state.editorState }
            onChange={ onChange }
            toolbar={{
                options: ['blockType', 'inline', 'list', 'textAlign', 'link', 'history'],
                inline: {
                    options: ['bold', 'italic', 'underline', 'strikethrough']
                },
                link: {
                    options: ['link']
                }
            }}
            onEditorStateChange={ onEditorStateChange }
        />
    )
}

FieldEditor.defaultProps = {
    value: ""
}

export default FieldEditor;