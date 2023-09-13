import React from "react";
import { ReduxConnect } from "helpers/HOC";

const Details = props => {
    const selected = props.member_state.item.selected;
    const types = {
        member: "Member",
        guest: "Guest"
    }

    return (
        <div className="modal-root members-form">
            <div className="overlay"></div>
            <div className="modal-panel">
                <div className="modal-header">
                    <div className="cntner">
                        <a href="#" onClick={ props.onCloseModal }>
                            <i className="material-icons">
                                arrow_back
                            </i>
                            Back
                        </a>
                        <div className="actions">
                            {/* <button className="bttn save" onClick={ onSubmit }>Save Product</button> */}
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="member-name">
                        <div className="initials">{ `${ selected.firstName.charAt(0) }${ selected.lastName.charAt(0) }` }</div>
                        <h4>{ `${ selected.firstName } ${ selected.lastName }` }</h4>
                        <span>{ types[selected.type] }</span>
                    </div>
                    <div className="member-contacts">
                        <p><strong>Email Address:</strong> { selected.email }</p>
                        <p><strong>Phone Number:</strong> { selected.phone }</p>
                        <p><strong>Address:</strong> { selected.address1 } { selected.address2 } { selected.brgy } { selected.city } { selected.province } { selected.zip }</p>
                    </div>
                    <div className="member-babies">
                        <h5>Furbabies</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Breed</th>
                                    <th>Birthday</th>
                                </tr>
                            </thead>
                            <tbody>
                                { selected.furbabies.length > 0 && selected.furbabies.map( f => (
                                    <tr>
                                        <td>{ f.name }</td>
                                        <td>{ f.breed }</td>
                                        <td>{ f.birthday }</td>
                                    </tr>
                                ) ) }
                                { selected.furbabies.length === 0 && (
                                    <tr>
                                        <td colSpan={3}>No results found.</td>
                                    </tr>
                                ) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Details, ["member"]);