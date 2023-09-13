import React, {useEffect} from "react";
import numeral from "numeral";
import { ReduxConnect } from "helpers/HOC";
import { bankDetails } from "../../../distributorObjectStructure"

const DeliveryMethod = props => {

    const [distributorBankDetails, setDistributorBankDetails] = React.useState([])

    useEffect(() => {
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
                setDistributorBankDetails(bankDetails.adda.bankDetails)
            } else  if(distributorNma) {
                setDistributorBankDetails(bankDetails.nma.bankDetails)
            } else  if(distributorBellamor) {
                setDistributorBankDetails(bankDetails.bellmanor.bankDetails)
            } else  if(distributorMdls) {
                setDistributorBankDetails(bankDetails.mdls.bankDetails)
            } else  if(distributorArlu) {
                setDistributorBankDetails(bankDetails.arlu.bankDetails)
            } else  if(distributorFebc) {
                setDistributorBankDetails(bankDetails.febc.bankDetails)
            }
        }
    }, []);

    const onChange = e => {
        props.fe_subscription_actions.updateShippingField([
            {
                field: e.target.name,
                key: "value",
                value: e.target.value
            },
            {
                field: e.target.name,
                key: "error",
                value: null
            }
        ]);
    };

    return (
        <div className="delivery-method">
            <div className="method-container">
                <div className="distributor">
                    <input type="radio" name="paymentMethod" value="Cash on Delivery" onChange={ onChange } />
                    <span>Cash on Delivery</span>
                </div>
                {/* <div className="deliveryFee">
                    <span>₱{ numeral( distributor.deliveryFee ).format( "0,0.00" ) }</span>
                </div> */}
                 {
                    distributorBankDetails.map(item => {
                        return(
                            <div className="distributor">
                                <input type="radio" name="paymentMethod" value={ item } onChange={ onChange } />
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="continue-button-container">
                <button onClick={ props.onProceed }>Continue</button>
            </div>  
        </div>
    )
}

export default ReduxConnect( DeliveryMethod, ["fe_subscription"] );