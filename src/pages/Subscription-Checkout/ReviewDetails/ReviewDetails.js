import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";
import { bankDetails } from "../../../distributorObjectStructure";

const ReviewDetails = props => {
    const user = props.fe_user_state.loggedUser;
    const fields = props.fe_subscription_state.item.form;

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
    }, [])

    const onSubmit = () => {
        const getPaymentType = () => {
            const name = props.fe_subscription_state.cart.name.toLowerCase();

            if( name.indexOf( "trio" ) > -1 || name.indexOf( "max-a" ) > -1 || name.indexOf( "plus-a" ) > -1 ) {
                return "One Time Payment";
            } else if( name.indexOf( "max-b" ) > -1 ) {
                return "Billed Semi-annually";
            } else {
                return "Billed Quarterly";
            }
        };

        const data = {
            shipping: {
                firstName: fields.shipping.firstName.value,
                lastName: fields.shipping.lastName.value,
                email: fields.shipping.email.value,
                phone: fields.shipping.phone.value,
                address1: fields.shipping.address1.value,
                address2: fields.shipping.address2.value,
                brgy: (fields.shipping.brgy.value || []).join(","),
                city: (fields.shipping.city.value || []).join(","),
                province: (fields.shipping.province.value || []).join(","),
                region: fields.shipping.region.value,
                country: fields.shipping.country.value,
                zip: (fields.billing.zip.value || []).join(","),
                userID: user ? user.id : null
            },
            billing: {
                firstName: fields.billing.firstName.value,
                lastName: fields.billing.lastName.value,
                email: fields.billing.email.value,
                phone: fields.billing.phone.value,
                address1: fields.billing.address1.value,
                address2: fields.billing.address2.value,
                brgy: (fields.billing.brgy.value || []).join(","),
                city: (fields.billing.city.value || []).join(","),
                province: (fields.billing.province.value || []).join(","),
                region: fields.billing.region.value,
                country: fields.billing.country.value,
                zip: (fields.billing.zip.value || []).join(","),
                userID: user ? user.id : null
            },
            final: true,
            items: props.fe_subscription_state.cart.months,
            distributor: {
                email: distributorBankDetails
            },
            paymentType: getPaymentType(),
            paymentMethod: fields.shipping.paymentMethod.value,
            total: props.fe_subscription_state.cart.total,
            deliveryWeek: props.fe_subscription_state.cart.deliveryWeek,
            subscription: props.fe_subscription_state.cart.name
        };

        Request().put(`/subscription/checkout/${ props.fe_subscription_state.cart.id }`, data)
            .then( response => {
                if( response ) {
                    window.location.replace("/");
                    // if( !user ) {
                    //     localStorage.removeItem("cart")
                    // }
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

export default ReduxConnect(ReviewDetails, ["fe_subscription", "fe_user"]);