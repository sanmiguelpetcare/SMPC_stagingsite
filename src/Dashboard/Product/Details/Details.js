import React from "react";
import numeral from "numeral";
import moment from "moment";
import { ReduxConnect } from "helpers/HOC";
import draftToHtml from 'draftjs-to-html';
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';

const Details = props => {
    const selected = props.product_state.item.selected;

    console.log("selected from deetails", selected)

    return (
        <div className="modal-root product-details">
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
                    <div className="product-name">
                        <h4>{ selected.name }</h4>
                        <p><span>{ selected.isInStock ? "In stock" : "Out of stock" }</span></p>
                    </div>
                    <div className="product-details">
                        <h5>Primary Details</h5>
                        <p><strong>Category:</strong> { selected.category }</p>
                        <p><strong>Weight:</strong> { selected.weight }</p>
                    </div>
                    <div className="product-price">
                        <h5>Price</h5>
                        <p><strong>Price:</strong> ₱{ numeral( selected.price ).format( "0,0.00" ) }</p>
                        <p><strong>Discount:</strong> { selected.discountType === "peso" ? "₱" : "" }{ selected.discount || 0 }{ selected.discountType === "percent" ? "%" : "" }</p>
                    </div>
                    <div className="product-description">
                        <h5>Desription</h5>
                        <div dangerouslySetInnerHTML={{__html: selected.description || "N/A" }} />
                        <h5>Ingredients:</h5>
                        <div dangerouslySetInnerHTML={{__html: selected.ingredients || "N/A" }} />
                    </div>
                    <div className="product-feeding-guide">
                        <h5>Feeding Guide</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Weight of Dog</th>
                                    <th>Amount of Food</th>
                                </tr>
                            </thead>
                            <tbody>
                                { selected.feedingGuide.length > 0 && selected.feedingGuide.map( f => (
                                    <tr>
                                        <td>{ f.weightOfDog }</td>
                                        <td>{ f.amountOfFood }</td>
                                    </tr>
                                ) ) }
                                { selected.feedingGuide.length === 0 && (
                                    <tr>
                                        <td colSpan={2}>No results found.</td>
                                    </tr>
                                ) }
                            </tbody>
                        </table>
                    </div>
                    <div className="product-guaranteed">
                        <h5>Guaranteed Analysis</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nutrients</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                { selected.guaranteedAnalysis.length > 0 && selected.guaranteedAnalysis.map( f => (
                                    <tr>
                                        <td>{ f.nutrients }</td>
                                        <td>{ f.amount }</td>
                                    </tr>
                                ) ) }
                                { selected.guaranteedAnalysis.length === 0 && (
                                    <tr>
                                        <td colSpan={2}>No results found.</td>
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

export default ReduxConnect(Details, ["product"]);