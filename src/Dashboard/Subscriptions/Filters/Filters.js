import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";

import Dropdown from "Dashboard/Common/Dropdown/Dropdown";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Filters = props => {
    const filters = props.product_state.filters;
    const onFilter = async ( key, value ) => {
        await props.product_actions.updateFilter([{ field: key, value }]);

        const data = {
            filters: {
                category: filters.category ? filters.category.value : null, 
                weight: filters.weight ? filters.weight.value : null,
                isInStock: filters.isInStock ? filters.isInStock.value : null,
                [key]: value ? value.value : value
            }
        };

        Request().post("/product/filtered", data)
            .then( response => {
                props.product_actions.updateList( response.data );
            });
    };

    return (
        <>
            <div className="filter collections">
                <Dropdown 
                    label="Collections:"
                    placeholder="All Products"
                    value={ filters.category }
                    options={[
                        { value: "dogfood", label: "Dog Food" },
                        { value: "premium", label: "Premium" },
                        { value: "disinfectant", label: "Disinfectant" },
                    ]}
                    onChange={ value => onFilter( "category", value ) }
                />
            </div>
            <div className="filter weight">
                <Dropdown 
                    label="Weight:"
                    placeholder="Select Weight"
                    value={ filters.weight }
                    options={[
                        { value: "1.3 kg", label: "1.3kg" },
                        { value: "5 kg", label: "5 kg" },
                        { value: "10 kg", label: "10 kg" },
                        { value: "20 kg", label: "20 kg" }
                    ]}
                    onChange={ value => onFilter( "weight", value )}
                />
            </div>
            <div className="filter in-stock">
                <Dropdown 
                    label="In Stock:"
                    placeholder="Select"
                    value={ filters.isInStock }
                    options={[
                        { value: true, label: "In Stock" },
                        { value: false, label: "Out of Stock" }
                    ]}
                    onChange={ value => onFilter( "isInStock", value )}
                />
            </div>
        </>
    )
}

export default ReduxConnect(Filters, ["product"]);