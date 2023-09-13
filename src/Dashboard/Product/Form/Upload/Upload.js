import React, { useState, useEffect } from "react";
import { ReduxConnect } from "helpers/HOC";

const Upload = props => {
    const inputRef = React.createRef();
    const singleInputRef = React.createRef();
    const uploaded = props.product_state.item.form.images.value;

    const [ selected, setSelected ] = useState(null);

    useEffect(() => {
        if( inputRef.current ) {
            inputRef.current.value = "";
        }
    }, [uploaded]);

    const onChange = (e) => {
        const files = Array.prototype.slice.call(e.target.files);

        console.log("files_01", files)
        if(files.length > 0) {
            props.product_actions.updateField([
                {
                    field: "images",
                    key: "value",
                    value: [
                        ...uploaded, 
                        ...files.filter(f => uploaded.map(u => u.name).indexOf(f.name) === -1)
                    ]
                }
            ]);
        }
    }

    const onSingleChange = e => {
        props.product_actions.updateField([
            {
                field: "images",
                key: "value",
                value: uploaded.map((f, i) => {
                    if( selected === i ) {
                        return e.target.files[0];
                    }

                    return f;
                })
            }
        ]);
    }

    const onButtonClick = () => {
        if( inputRef.current ) {
            inputRef.current.click();

            console.log("inputRef.current", inputRef.current)
        }
    }

    const onRemoveImage = i => {
        console.log(uploaded);
        props.product_actions.updateField([
            {
                field: "images",
                key: "value",
                value: uploaded.map((f, index) => {
                    if( f.id ) {
                        if( index === i ) {
                            return {
                                ...f,
                                isRemoved: true
                            }
                        }

                        return f;
                    } else {
                        if( index === i ) {
                            return {
                                ...f,
                                isRemoved: true,
                                isNew: true
                            }
                        }

                        return f;
                    }
                }).filter( f => {
                    if( f.isNew && f.isRemoved ) {
                        return false;
                    }

                    return true;
                })
            }
        ]);
    }

    const onEditImage = i => {
        setSelected( i );

        if( singleInputRef.current ) {
            singleInputRef.current.click();
        }
    };

    return (
        <div className="form-item uploads clearfix">
            { uploaded.filter( f => !f.isRemoved ).length > 0 && <input type="file" ref={ singleInputRef } onChange={ onSingleChange } accept=".png, .jpg, .jpeg, .svg, .gif, .webp" style={{ display: "none" }} /> }
            <div className="form-upload">
                { uploaded.filter( f => !f.isRemoved ).map( (file, i) => (
                    <div key={`uploaded_img_${ i }_${ file.id ? file.id : file.name }`} className="uploaded-image" style={{ backgroundImage: `url(${ file.id ? `/files/${ file.name }` : URL.createObjectURL(file) })` }}>
                        <div className="actions">
                            <button onClick={ () => onEditImage(i) }>
                                <i className="material-icons">
                                    edit
                                </i>
                            </button>
                            <button onClick={ () => onRemoveImage(i) }>
                                <i className="material-icons">
                                    close
                                </i>
                            </button>
                        </div>
                    </div>
                ) ) }
                { uploaded.filter( f => !f.isRemoved ).length < 9 && (
                    <div className="btn-upload" onClick={ onButtonClick }>
                        <i className="material-icons">
                            add_a_photo
                        </i>
                        <span>Add new image</span>
                        <input type="file" multiple ref={ inputRef } onChange={ onChange } accept=".png, .jpg, .jpeg, .svg, .gif, .webp" style={{ display: "none" }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReduxConnect(Upload, ["product"]);