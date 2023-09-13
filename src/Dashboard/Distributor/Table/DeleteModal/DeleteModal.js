import React from "react";

const DeleteModal = props => {
    return (
        <div className="delete-modal">
            <div className="content">
                <div className="header">
                    <h4>{ props.title ? props.title : "Deleting item" }</h4>
                    <a href="#" onClick={ props.onClose }>
                        <i className="material-icons">close</i>
                    </a>
                </div>
                <p>Are you sure you want to delete this item?</p>
                <div className="actions">
                    <button onClick={ props.onDelete }>Delete</button>
                    <button onClick={ props.onClose }>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;