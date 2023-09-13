import React from "react"
import HeroImage from "../../assets/media/nc-protect/NC_Protect_Asset.png"
import Subscribe from "../../common/cta/Subscribe"
import Request from "config/API"
import DistributorModal from "./DistributorModal"
import DistributionLocation from "common/distribution-location/DistributionLocation"
import { ReduxConnect } from "helpers/HOC";
import ListItem from "./ListItem/ListItem";

const Products = props => {
    const [modalStatus, setModalstatus] = React.useState(false)

    const handleOpenModal = function() {
        setModalstatus(true);
    };

    console.log("sample")

    const handleClosemodal = function() {
        setModalstatus(false);
    };

    React.useEffect(() => {
        handleOpenModal()
        onFetch();
    }, []);

    const onFetch = () => {
        props.common_actions.updateLoading(true);

        Request().get("/product", { inStock: true })
            .then(response => {
                props.fe_product_actions.updateList( response.data );
                props.common_actions.updateLoading( false );
            })
    };
    
    return(
        <div>
            <DistributorModal />
            <div className="products">
                {/* {props.fe_distributioner_state.distributor == null ? <></> : props.fe_distributioner_state.distributor != null && !modalStatus ? <DistributionLocation modalStatus={modalStatus} handleOpenModal={handleOpenModal}/> : <></>} */}
                {/* {props.fe_distributioner_state.distributor == null ? <></> : <DistributionLocation modalStatus={modalStatus} handleOpenModal={handleOpenModal}/>} */}
                <div className="products-banner-section">
                    <div className="container">
                        <div className="products-banner-content-container">
                            <img src={HeroImage} />
                            <div className="banner-info-container">
                                <div className="heading-container">
                                    <h1 className="heading-container">Have your peace of mind</h1>
                                </div>
                                <div className="sub-heading-container">
                                <p className="sub-heading-container">We take the hassle out of feeding your dog by regularly delivering fresh, healthy food right to their front door. Life can be so unpredictable - that's why our subscription based program includes emergency insurance!</p>
                                </div>
                                <Subscribe />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-section">
                    <div className="container">
                        <div className="product-section-main-container">
                            <div className="product-section-heading-container">
                                <h2>Premium Dog Food</h2>
                                <p>100% complete {`&`} balanced nutrition suitable for all breeds</p>
                            </div>
                            <div className="product-content-main-container">
                                {/* <div className="filter-container">
                                    <div className="filter-heading">
                                        <p>Filter By:</p>
                                        <div className="light-weight-dogfood filter-category-container">
                                            <input
                                            />
                                        </div>
                                        <div className="heavy-weight-dogfood filter-category-container">

                                        </div>
                                        <div className="disinfectant filter-category-container">

                                        </div>
                                        <div className="premium filter-category-container">

                                        </div>
                                    </div>
                                    <div className="filter-accordion">
                                        
                                    </div>
                                </div> */}
                                <div className="product-content-container">
                                    <div className="sort-container">

                                    </div>
                                    <div className="product-list-mapping-container">
                                        {console.log("props.fe_product_state.list", props.fe_product_state.list)}
                                        { (props.fe_product_state.list || []).map( product => <ListItem item={ product } /> ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Products, ["fe_product", "fe_distributioner"]);