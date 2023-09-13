import React from "react";
import { ReduxConnect } from "helpers/HOC";
import moment from "moment";
import Request from "config/API";
import emailjs from '@emailjs/browser';
import { bankDetails } from "../../../distributorObjectStructure";


const ReviewDetails = props => {
    const fields = props.fe_checkout_state.item.form;
    const user = props.fe_user_state.loggedUser;

    const [distributorBankDetails, setDistributorBankDetails] = React.useState([])

    React.useEffect(() => {
        if( localStorage.getItem( "distributor" ) ) {
            const distributor = localStorage.getItem( "distributor" ).split( "|" );
    
            const city = distributor[5].split(",");
            const province = distributor[6].split(",");
            const zipCode = distributor[7].split(",");
            const town = distributor[3].split(",");
    
            const distributor4adda = bankDetails.adda.zipCode.find(item => item == zipCode[0])
            const distributorNma = bankDetails.arlu.zipCode.find(item => item == zipCode[0])
            const distributorBellamor = bankDetails.bellmanor.zipCode.find(item => item == zipCode[0])
            const distributorMdls = bankDetails.febc.zipCode.find(item => item == zipCode[0])
            const distributorArlu = bankDetails.mdls.zipCode.find(item => item == zipCode[0])
            const distributorFebc = bankDetails.nma.zipCode.find(item => item == zipCode[0])
    
            if(distributor4adda) {
                setDistributorBankDetails(bankDetails.adda.email)
            } else  if(distributorNma) {
                setDistributorBankDetails(bankDetails.nma.email)
            } else  if(distributorBellamor) {
                setDistributorBankDetails(bankDetails.bellmanor.email)
            } else  if(distributorMdls) {
                setDistributorBankDetails(bankDetails.mdls.email)
            } else  if(distributorArlu) {
                setDistributorBankDetails(bankDetails.arlu.email)
            } else  if(distributorFebc) {
                setDistributorBankDetails(bankDetails.febc.email)
            }
        }

        console.log("fields ", fields )
    }, [])


    const onSubmit = () => {
        const data = {
            orderNo: "--",
            total: props.fe_cart_state.subtotal,
            dateCreated: moment().format( "MM/DD/YYYY hh:mm:ss"),
            status: "unfulfilled",
            userID: user ? user.id : null,
            distributor: {
                email: distributorBankDetails
            },
            shipping: {
                firstName: fields.shipping.firstName.value,
                lastName: fields.shipping.lastName.value,
                email: fields.shipping.email.value,
                phone: fields.shipping.phone.value,
                address1: fields.shipping.address1.value,
                address2: fields.shipping.address2.value,
                brgy: fields.shipping.brgy.value,
                city: fields.shipping.city.value,
                province: fields.shipping.province.value,
                region: fields.shipping.region.value,
                country: fields.shipping.country.value,
                zip: fields.shipping.zip.value,
                userID: user ? user.id : null
            },
            billing: {
                firstName: fields.billing.firstName.value,
                lastName: fields.billing.lastName.value,
                email: fields.billing.email.value,
                phone: fields.billing.phone.value,
                address1: fields.billing.address1.value,
                address2: fields.billing.address2.value,
                brgy: fields.billing.brgy.value,
                city: fields.billing.city.value,
                province: fields.billing.province.value,
                region: fields.billing.region.value,
                country: fields.billing.country.value,
                zip: fields.billing.zip.value,
                userID: user ? user.id : null
            },
            products: props.fe_cart_state.cart.map( cart => {
                return {
                    qty: cart.qty,
                    discount: cart.product.discount,
                    discountType: cart.product.discountType,
                    productID: cart.product.id,
                    price: cart.product.price,
                    name: cart.product.name,
                    total: cart.product.price * parseInt(cart.qty)
                };
            }),
            paymentMethod: fields.shipping.paymentMethod.value,
        };

        props.common_actions.updateLoading(true);

        console.log("data", data)
        
        Request().post("/order", data)
            .then( response => {
                if( response ) {
                    window.location.replace("/");
                    if( !user ) {
                        localStorage.removeItem("cart")
                    }
                }
            });
    };

    return (
        <div className="review-details">
            <div className="review-note-container">
                <p>Review the order details above, and place your order when you’re ready.</p>
            </div>
            <div className="continue-button-container">
                <button onClick={ onSubmit }>Place Order</button>
            </div>
        </div>
    )
}

export default ReduxConnect(ReviewDetails, ["fe_checkout", "fe_cart", "fe_user"]);