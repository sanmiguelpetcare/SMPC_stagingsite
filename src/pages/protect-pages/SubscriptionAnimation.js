import React from "react"
import CustomImageNotempty from "../../assets/media/subscription-page/Option_1_with_products.png"
import CustomImage from "../../assets/media/subscription-page/Visual_Customized_Set_empty_w_NC_Protect.svg"
import NormalImageNotEmpty from "../../assets/media/subscription-page/Option_1_with_products.png"
import NormalImage from "../../assets/media/subscription-page/Visual_Same_Set_empty_with_NC_protect.svg"
import DefaultImage from "../../assets/media/subscription-page/No_Selection_with_table.svg"

export default function SubscriptionAnimation(props) {

    const [mediaPost, setMediaPost] = React.useState()


    const stickyChunky = () => {
        setMediaPost(window.scrollY)
    }

    window.addEventListener("scroll", stickyChunky)

    const selectedProductList = props.selelectedProducts.map(item => {
        return (
            <>
                <img src={item.image} />
            </>
        )
    })


    const CustomAnimation = props => {
        return (
            <>
                 <div className={mediaPost > 300 ? "protect-animation-image stick" : "protect-animation-image"}>
                 {/* <div className={"protect-animation-image"}> */}
                    <div className="chunky-image-container">
                        <img src={CustomImage} alt=""/>     
                    </div>
                    <div className="selected-product-container">
                        {/* {selectedProductList} */}
                    </div>
                </div>
            </>
        )
    }


    const RegularAnimation = props => {


        return (
            <>
                 <div className={mediaPost > 300 ? "protect-animation-image stick" : "protect-animation-image"}>
                     <div className="chunky-image-container">
                        <img src={NormalImage} alt=""/>
                    </div>
                    <div className="selected-product-container">
                        {props.selectedImage}
                    </div>
                 </div>
            </>
        ) 
    }

    const DefaultAnimation = props => {
        return (
            <>
                <div className={mediaPost > 300 ? "protect-animation-image stick" : "protect-animation-image"}>
                    <div className="chunky-image-container">
                        <img src={DefaultImage} alt=""/>
                    </div>
                </div>
            </>
        )
    }


    const animationContentIdentifier = () => {
      if(props.deliveryOption === 1) {
            return <RegularAnimation 
                        selectedImage={selectedProductList}
                    />
        
      } else if(props.deliveryOption === 2) {
            return <CustomAnimation />

      } return <DefaultAnimation />
    }

    return (
        <>
            {animationContentIdentifier()}    
        </>
    )
}