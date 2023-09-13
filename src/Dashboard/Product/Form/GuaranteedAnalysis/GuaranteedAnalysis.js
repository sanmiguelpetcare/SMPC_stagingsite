import React, { useState } from "react";
import { ReduxConnect } from "helpers/HOC";

const item = {
    nutrients: null,
    amount: null
};

const GuaranteedAnalysis = props => {
    const guaranteedAnalysis = props.product_state.item.guaranteedAnalysis;

    const onAddItem = (e, i) => {
        e.preventDefault();
        
        let list = [...guaranteedAnalysis];

        list.splice(i + 1, 0, item);

        props.product_actions.updateGuaranteedAnalysis(list);
    };

    const onRemoveItem = (e, i) => {
        e.preventDefault();

        props.product_actions.updateGuaranteedAnalysis( guaranteedAnalysis.filter( (item, index) => index != i ));
    };

    const onChange = (e, i) => {
        props.product_actions.updateGuaranteedAnalysis( guaranteedAnalysis.map( (item, index) => {
            if(index === i) {
                return {
                    ...item,
                    [e.target.id]: e.target.value
                }
            }

            return item;
        }));
    };

    return (
        <>
            <div className="form-row">
                <div className="form-col c12">
                    <div className="form-item np mutiple-fields">
                        <label>Guaranteed Analysis</label>
                    </div>
                </div>
            </div>
            { guaranteedAnalysis.map( (item, i) => {
                return (
                    <div key={`product_feeding_guide_${ i }`} className="form-row">
                        <div className="form-col c5">
                            <div className="form-item">
                                <input placeholder="Nutrients" type="text" id="nutrients" value={ item.nutrients } onChange={ e => onChange(e, i) } />
                            </div>
                        </div>
                        <div className="form-col c5">
                            <div className="form-item">
                                <input placeholder="Amount" type="text" id="amount" value={ item.amount } onChange={ e => onChange(e, i) } />
                            </div>
                        </div>
                        <div className="form-col c2">
                            <div className="form-item field-rows-actions">
                                <a href="#" onClick={e => onAddItem(e, i)}>
                                    <i className="material-icons">add</i>
                                </a>
                                { guaranteedAnalysis.length > 1 && (
                                    <a href="#" onClick={e => onRemoveItem(e, i)}>
                                        <i className="material-icons">remove</i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ReduxConnect(GuaranteedAnalysis, ["product"]);