import React, { useState } from "react";
import { ReduxConnect } from "helpers/HOC";

const item = {
    weightOfDog: null,
    amountOfFood: null
};

const FeedingGuide = props => {
    const feedingGuide = props.product_state.item.feedingGuide;
    console.log("feedingGuide", feedingGuide);

    const onAddItem = (e, i) => {
        e.preventDefault();
        
        let list = [...feedingGuide];

        list.splice(i + 1, 0, item);

        props.product_actions.updateFeedingGuide(list);
    };

    const onRemoveItem = (e, i) => {
        e.preventDefault();

        props.product_actions.updateFeedingGuide( feedingGuide.filter( (item, index) => index != i ));
    };

    const onChange = (e, i) => {
        props.product_actions.updateFeedingGuide( feedingGuide.map( (item, index) => {
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
                        <label>Feeding Guide</label>
                    </div>
                </div>
            </div>
            { feedingGuide.map( (item, i) => {
                return (
                    <div key={`product_feeding_guide_${ i }`} className="form-row">
                        <div className="form-col c5">
                            <div className="form-item">
                                <input placeholder="Weight of Dog" type="text" id="weightOfDog" value={ item.weightOfDog } onChange={ e => onChange(e, i) } />
                            </div>
                        </div>
                        <div className="form-col c5">
                            <div className="form-item">
                                <input placeholder="Amount of Food" type="text" id="amountOfFood" value={ item.amountOfFood } onChange={ e => onChange(e, i) } />
                            </div>
                        </div>
                        <div className="form-col c2">
                            <div className="form-item field-rows-actions">
                                <a href="#" onClick={e => onAddItem(e, i)}>
                                    <i className="material-icons">add</i>
                                </a>
                                { feedingGuide.length > 1 && (
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

export default ReduxConnect(FeedingGuide, ["product"]);