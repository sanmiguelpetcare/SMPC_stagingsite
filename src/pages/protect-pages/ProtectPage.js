import React from "react";
import SubscriptionAnimation from "./SubscriptionAnimation";
import { useParams } from "react-router";
import StepsAccordion from "./StepsAccordion";
import productList from "../../productList";
import ThirdStepAccordion from "./stepsContent/ThirdStepContent"
import ProtectPageModal from "./ProtectPageModal";
import TrioLogo from "../../assets/media/subscription-landing-page/TRIO_positive.png"
import PlusLogo from "../../assets/media/subscription-landing-page/PLUS_positive.png"
import MaxLogo from "../../assets/media/subscription-landing-page/MAX_positive.png"
// import { CollectionsOutlined } from "@mui/icons-material";

export default function ProtectPage(props) {

    let { param } = useParams()

    const firstStepHeight = React.useRef()
    const secondStepHeight = React.useRef()
    const thirdStepHeight = React.useRef()

    console.log("firstStaepHeight", firstStepHeight)

    const [maintItem, setMainItem] = React.useState()
    const [mainIndex, setMainIndex] = React.useState()

    const [specificAccordion, setSpecificAccordion] = React.useState()
    const [specificSubAccordion, setSpecificSubAccordion] = React.useState()
    const [deliveryOption, setDeliveryOption] = React.useState();
    const [modalStatus, setModalStatus] = React.useState(false)
    
    const [selectedItems, setSelectedItems] = React.useState([])
    const [productQty, setProductQty] = React.useState({})
    
    const [selectedProductPerMonth, setSeletedProductPerMonth] = React.useState({})
    const [productQtyPerMonth, setProductQtyPerMonth] = React.useState({})
/* causing delay*/ const [customPricepermonth, setCustomPricepermonth] = React.useState({}) 
    const [monthMinimum, setMonthMinimum] = React.useState()

    const [removeTrigger, setRemovetrigger] = React.useState("add")
    
    const [totalPrice, setTotalPrice] = React.useState([])

    // console.log("customPricepermonth", customPricepermonth)
    console.log("productQtyPermonth", productQtyPerMonth)

    // >>> for custom triggerfunction
    let productPricePermonth = Object.values(selectedProductPerMonth[mainIndex] || []).map(item => {
        return item.price
    })

    let productPriceperQty = Object.values(productQtyPerMonth[mainIndex] || []).map((item, i) => {
        if(removeTrigger === "add") {
            return item * productPricePermonth[i]
        } else if(removeTrigger === "remove") {
            if(productPricePermonth[i]) {
                return item * productPricePermonth[i]
            } return 0
        }
    })

    console.log("productPriceperQty", productPriceperQty)

    for(let i = 0; i < productPriceperQty.length; i++) {
        const totalPriceoftheUniverse = productPriceperQty += productPriceperQty 
    }

    let customTotalPricepermonth = Object.values(customPricepermonth).map((item, i) => {
        return item
    })
    // <<< for custom trigger function

    // >>> for regular trigger function
    let regularProductPrice = Object.values(selectedItems).map(item => {
        return item.price
    })

    let regularProductQtyperquantity = Object.values(productQty).map((item, i) => {
        if(removeTrigger === "add"){
            return item * regularProductPrice[i]
        } else if(removeTrigger === "remove"){
            if(regularProductPrice[i]) {
                return item * regularProductPrice[i]
            } return 0
        }
    })
    // <<< for regular trigger function

    const handleDeliveryOptions = (data) => {
            setDeliveryOption(data)
        if(data === 1) {
            setSeletedProductPerMonth({})
            setProductQtyPerMonth({})
        } else if(data === 2) {
            setSelectedItems([])
            setProductQty({})
        }
    } 

    const handleAccordion = (data) => {
        setSpecificAccordion(data)
    }

    const handleCloseModal = () => {
        setModalStatus(!modalStatus)
    }

    React.useEffect(()=> {
        setDeliveryOption(0)
        setSpecificAccordion("1st")
    }, [])
    
    const firstStep = (props) => {
        return (
            <>
                <div className="first-step-container">
                    <div className="step-subheading">
                        <p>Would you like to receive the same set of products every month? You also have an option to choose different set of flavors or package sizes for each month if you like! </p>
                    </div>
                    <div className="delivery-option-button-container">
                        <div className="regular-button-container delivery-button-container">
                            <button 
                                onClick={() => handleDeliveryOptions(1)}
                                className={deliveryOption === 1 ? `no-hover-clicked`: `only-hover`}
                            >Regular</button>
                            <div className="delivery-button-subheading">
                                <p>Receive my regular favorites!</p>
                            </div>
                        </div>
                        <div className="custom-button-container delivery-button-container">
                            <button 
                                onClick={() => handleDeliveryOptions(2)}
                                className={deliveryOption === 2 ? `no-hover-clicked`: `only-hover`}
                            >Custom</button>
                            <div className="delivery-button-subheading"> 
                                <p>Try something different each month!</p>
                            </div>
                        </div>
                    </div>
                    <div className="next-button">
                        <button 
                            onClick={deliveryOption === 1 || deliveryOption === 2 ? () => handleAccordion("2nd") : ""}
                            className={deliveryOption === 1 || deliveryOption === 2 ? `enable`: ``}
                        >Next</button>
                    </div>
                </div>
            </>
        )
    }

    const CustomSecondStepContent = (props) => {

        const handleSubAccordion = (data) => {
            setSpecificSubAccordion(data)
        }
        
        const triggerFunction = (index) => {

/* causing delay*/ if(productPriceperQty.length > 0) {

                let reduceProductQtypermonth = productPriceperQty.reduce((accumulator, curr) => {
                    return accumulator + curr
                })

                setCustomPricepermonth(prevAmount => {
                    return {
                        ...prevAmount,
                        [index]: reduceProductQtypermonth
                    }
                })
            } else {
                setCustomPricepermonth([])
            }
            
            if(customTotalPricepermonth.length > 0) {
                let totalPrice = customTotalPricepermonth.reduce((acc, curr) => {
                    return acc + curr
                })
                
                setTotalPrice(totalPrice)
            }
        }

        const handleSelectedProducts = (item, index) => {
            
            setMainItem(item)
            setMainIndex(index)
            setRemovetrigger("add")
            triggerFunction(index)

            let filterSelectedProductPerMonth = (selectedProductPerMonth[index] || []).filter(selectedItem => selectedItem.id === item.id) 
            let filterNotSelectedProductPerMonth = (selectedProductPerMonth[index] || []).filter(selectedItem => selectedItem.id != item.id) 
            let selectedMonthIndex = Object.keys(selectedProductPerMonth).filter(selectedItem => selectedItem === index)
            let filterNotSelectedProductQtyPerMonth = Object.fromEntries(Object.entries(productQtyPerMonth[index] || []).filter(selectedItem => selectedItem[0] != item.id))

            if(selectedMonthIndex.length < 1) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData,
                        [index]: [item]
                    }
                })
                setProductQtyPerMonth(prevData => {
                    return{
                        ...prevData,
                        [index]: {...prevData[index] || {}, [item.id]: 1 }
                    }
                })
            } else if(filterSelectedProductPerMonth.length > 0) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData,
                        [index]: filterNotSelectedProductPerMonth
                    }
                })
                setProductQtyPerMonth(prevData => {
                    return{
                        ...prevData,
                        [index]: filterNotSelectedProductQtyPerMonth
                    }
                })
            } else if(filterSelectedProductPerMonth.length === 0) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData,
                        [index]: [...prevData[index] || [], item]
                    }
                })
                setProductQtyPerMonth(prevData => {
                    return{
                        ...prevData,
                        [index]: {...prevData[index] || {}, [item.id]: 1 }
                    }
                })
            }
        }

        const addProduct = (item, index) => {
            
            let filterSelectedProductPerMonth = (selectedProductPerMonth[index] || []).filter(selectedItem => selectedItem.id === item.id) 
            let selectedMonthIndex = Object.keys(selectedProductPerMonth).filter(selectedItem => selectedItem === index)

            setMainItem(item)
            setMainIndex(index)
            setRemovetrigger("add")
            triggerFunction(index)

            if(selectedMonthIndex.length < 1) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData,
                        [index]: [item]
                    }
                })
                setProductQtyPerMonth(prevData => {
                    return{
                        ...prevData,
                        [index]: {...prevData[index] || {}, [item.id]: 1 }
                    }
                })
            } else if(filterSelectedProductPerMonth.length > 0) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData
                    }
                })
                setProductQtyPerMonth(prevData => {
                    return{
                        ...prevData,
                        [index]: {...prevData[index] || {}, [item.id]: productQtyPerMonth[index][item.id] + 1}
                    }
                })
            } else if(filterSelectedProductPerMonth.length === 0) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData,
                        [index]: [...prevData[index] || [], item]
                    }
                })
                setProductQtyPerMonth(prevData => {
                    return{
                        ...prevData,
                        [index]: {...prevData[index] || {}, [item.id]: 1 }
                    }
                })
            }
        }

        const removeProduct = (item, index) => {

            let filterSelectedProductPerMonth = (selectedProductPerMonth[index] || []).filter(selectedItem => selectedItem.id === item.id) 
            let filterNotSelectedProductPerMonth = (selectedProductPerMonth[index] || []).filter(selectedItem => selectedItem.id != item.id) 

            setMainItem(item)
            setMainIndex(index)
            setRemovetrigger("remove")
            triggerFunction(index)

            if(filterSelectedProductPerMonth.length > 0) {
                setSeletedProductPerMonth(prevData => {
                    return {
                        ...prevData
                    }
                })
                if(productQtyPerMonth[index][item.id] === 1) {
                    setSeletedProductPerMonth(prevData => {
                        return {
                            ...prevData,
                            [index]: filterNotSelectedProductPerMonth
                        }
                    })
                    setProductQtyPerMonth(prevData => {
                        return{
                            ...prevData,
                            [index]: {...prevData[index] || {}, [item.id]: 0}
                        }
                    })
                } else if(productQtyPerMonth[index][item.id] > 1){
                    setProductQtyPerMonth(prevData => {
                        return{
                            ...prevData,
                            [index]: {...prevData[index] || {}, [item.id]: productQtyPerMonth[index][item.id] - 1}
                        }
                    })
                }
            }
        }
    
        const productFilter = productList.filter(item => item.weight === "10kg" || item.weight === "20kg")
    
        const ProductItem = (props) => {

            return (
                productFilter.map(item => (
                        <>  
                            <div 
                                onClick={() => handleSelectedProducts(item, props.monthIndex)} 
                                className={`specific-product-container ${(Object.values(selectedProductPerMonth)[props.monthIndex] || []).find(selectedItem => selectedItem.id === item.id) ? `bordered` : `only-hover`}`}
                            >
                                <div className="specific-product-content">
                                    <div className="product-image-container">
                                        <img src={item.image} />
                                    </div>
                                    <div className="product-name-container">
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-input-container">
                                <div onClick={() => addProduct(item, props.monthIndex)} className="add-button">
                                    <p>+</p>
                                </div>
                                <div className="quantity">
                                    <h6>{productQtyPerMonth[props.monthIndex] ? (productQtyPerMonth[props.monthIndex][item.id] ? productQtyPerMonth[props.monthIndex][item.id] : '0') : '0'}</h6>
                                </div>
                                <div onClick={() => removeProduct(item, props.monthIndex)}  className="remove-button">
                                    <p>-</p>
                                </div>
                            </div>
                        </>
                    )
                )
            )
        }
    
        const ProductWithsubHeading = (props) => {
            return (
                <>
                    <div className="product-with-subheading-container">
                        <div className="monthly-subheading-container">
                            <p>Minimum purchase requirements apply. Buy at least 20kg of Nutri Chunks Premium Dog Food and one ProtekTODO pack every month.</p>
                        </div>
                        <div className="product-item-container">
                            <ProductItem 
                                monthIndex={props.monthIndex}
                            />
                        </div>
                    </div>
                </>
            )
        }
    
        const productListContainer = (monthButtonTitle, index) => {
            return (
                <>  
                    <div onClick={() => handleSubAccordion(index)} className="month-button-container">
                        <h6>{monthButtonTitle}</h6>
                    </div>
                    <div className={specificSubAccordion === index ? `product-list-container active` : `product-list-container inactive`}>
                        <StepsAccordion 
                            content={<ProductWithsubHeading 
                                monthIndex={index}
                            />}
                        />
                    </div>
                </>
            )
        }
        
        const monthButtonTitle = [
            "1st Month",
            "2nd Month",
            "3rd Month",
            "4th Month",
            "5th Month",
            "6th Month",
            "7th Month",
            "8th Month",
            "9th Month",
            "10th Month",
            "11th Month",
            "12th Month"
        ]

        const loopProductListContainer = () => {
    
            let arr = [];
    
            if(props.param === "trio") {
                for(let i = 0; i < 3; i++) {
                    arr = [...arr, productListContainer(monthButtonTitle[i], i)];
                }
            } else if(props.param === "plus") {
                for(let i = 0; i < 6; i++){
                    arr = [...arr, productListContainer(monthButtonTitle[i], i)];
                }
            } else if(props.param === "max-a" || props.param === "max-b") {
                for(let i = 0; i < 12; i++){
                    arr = [...arr, productListContainer(monthButtonTitle[i], i)];
                }
            } 
    
            return arr;
        }

        const customPricepermonthValidation = () => {
            let customPricepermonthMapping = Object.entries(customPricepermonth).find(item => item[1] < 3000)

            console.log("customPricepermonthMapping", customPricepermonthMapping)

            console.log("Object.entries(customPricepermonth)", Object.entries(customPricepermonth))
            
            // if(customPricepermonthMapping.length > 0) {
            //     console.log("customPricepermonthMapping", parseInt(customPricepermonthMapping[0]))
            //     setMonthMinimum(parseInt(customPricepermonthMapping[0]))
            // } else {
            //     props.NextButton
            // }
        }
        
        return(
            <>
                <div className="custom-container">
                    <div className="step-subheading">
                        <p>Let's talk about what you want for each month.</p>
                    </div>
                    {loopProductListContainer()}
                    <div onClick={() => triggerFunction(mainIndex)} className="next-button">
                        {/* <button onClick={props.NextButton}>Next</button> */}
                        <button onClick={() => customPricepermonthValidation()}>Next</button>
                    </div> 
                </div>
            </>
        )
    }

    const RegularSecondStepContent = (props) => {
        
        const triggerFunction = (index) => {
            if(regularProductQtyperquantity.length > 0) {
                let totalPrice = regularProductQtyperquantity.reduce((accu, curr) => {
                    return accu + curr
                })
        
                setTotalPrice(totalPrice)
            }
        }

        const handleSelectedProducts = (item) => {

            setRemovetrigger("add")
            triggerFunction()

            let filterSelected = selectedItems.filter(selectedItem => selectedItem.id === item.id)
            let filterNotSelected = selectedItems.filter(selectedItem => selectedItem.id != item.id)    
            let filterNotSelectedProductQty = Object.fromEntries(Object.entries(productQty).filter(selectedItem => selectedItem[0] != item.id))

            if(selectedItems.length === 0) {
                setSelectedItems([item])
                setProductQty(prevData => {
                    return {
                        ...prevData,
                        [item.id]: 1
                    }
                })
            } else if(filterSelected.length > 0) {
                setSelectedItems(filterNotSelected)
                setProductQty(filterNotSelectedProductQty)

            } else {
                setSelectedItems(prevItem => {
                    return [
                        ...prevItem,
                        item
                    ]
                })
                setProductQty(prevData => {
                    return {
                        ...prevData,
                        [item.id]: 1
                    }
                })
            } 
        }

        const addProduct = (item) => {

            setRemovetrigger("add")
            triggerFunction()

            let filterSelected = selectedItems.filter(selectedItem => selectedItem.id === item.id)
            
            if(selectedItems.length === 0) {
                setSelectedItems([item])
                setProductQty(prevData => {
                    return {
                        ...prevData,
                        [item.id]: 1
                    }
                })
    
            } else if(filterSelected.length > 0) {
                setSelectedItems(prevItem => {
                    return [
                        ...prevItem
                    ]
                })
                setProductQty(prevData => {
                    return {
                        ...prevData,
                        [item.id]: productQty[item.id] + 1
                    }
                })

            } else {
                setSelectedItems(prevItem => {
                    return [
                        ...prevItem,
                        item
                    ]
                })
                setProductQty(prevData => {
                    return {
                        ...prevData,
                        [item.id]: 1
                    }
                })
            } 

        }

        const removeProduct = (item) => {

            setRemovetrigger("remove")
            triggerFunction()

            let filterSelected = selectedItems.filter(selectedItem => selectedItem.id === item.id)
            let filterNotSelected = selectedItems.filter(selectedItem => selectedItem.id != item.id) 
            
            if(filterSelected.length > 0) {
                setSelectedItems(prevItem => {
                    return [
                        ...prevItem
                    ]
                })

                if(productQty[item.id] === 1) {
                    setSelectedItems(filterNotSelected)
                    setProductQty(prevData => {
                        return {
                            ...prevData,
                            [item.id]: 0
                        }
                    })
                } else if(productQty[item.id] > 1) {
                    setProductQty(prevData => {
                        return {
                            ...prevData,
                            [item.id]: productQty[item.id] - 1
                        }
                    })
                } 
            }
        }

        const productFilter = productList.filter(item => item.weight === "10kg" || item.weight === "20kg")
        
        const productItem = productFilter.map(item => {

            const quantityOfproducts = () => {
                if(productQty[item.id] > 0) {
                    return (
                        <h6>{productQty[item.id]}</h6>
                    )
                } return <h6>0</h6>
            }

            return (
                <>
                    <div 
                        id={item.productId} 
                        onClick={() => handleSelectedProducts(item)} 
                        className={`specific-product-container ${selectedItems.find(itemClicked => item.id === itemClicked.id) ? `bordered` : `only-hover`}`}
                    >
                        <div className="specific-product-content">
                            <div className="product-image-container">
                                <img src={item.image} />
                            </div>
                            <div className="product-name-container">
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-input-container">
                        <div className="add-button">
                            <p onClick={() => addProduct(item)}>+</p>
                        </div>
                        <div className="quantity">
                            {/* <h6>{productQty ? productQty[item.id] : '0'}</h6> */}
                            {quantityOfproducts()}
                        </div>
                        <div className="remove-button">
                            <p onClick={() => removeProduct(item)}>-</p>
                        </div>
                    </div>
                </>
            )
        })     
        
        
    
        return(
            <>
                 <div className="regular-container">
                    <div className="step-subheading">
                        <p>Pick your regular favorites and we'll ship them to you. Minimum purchase requirements apply. Buy at least 20kg of Nutri Chunks Premium dog food and one ProtekTODO pack every month. </p>
                    </div>
                    <div className="product-list-container">
                        {productItem}
                    </div>
                    <div className="next-button">
                        <button onClick={props.NextButton}>Next</button>
                    </div> 
                 </div>
            </>
        )
    }

    return(
        <>  
            <ProtectPageModal 
                handleClose={handleCloseModal}
                modalStatus={modalStatus}
                regularContent={selectedItems}
                regularContentQty={productQty}
                customContent={selectedProductPerMonth}
                customContentQty={productQtyPerMonth}
                customPricepermonth={customPricepermonth}
                totalPrice={totalPrice}
            />
            
            <div className="protect-page">
                <div className="protect-page-heading-section">
                    <div className="container">
                        <div className="product-page-heading-container">
                            <div className="logo-container">
                                <div className="logo-content-container">
                                    <div className="logo-content">
                                        <img src={param === "trio" ? "Nutri Chunks Protect Trio" : param === "plus" ? "Nutri Chunks Protect Plus" : "Nutri Chunks Protect Max"} alt=""/>
                                    </div>
                                    <div className="logo-content">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="logo-content">
                                        <img src="" alt=""/>
                                    </div>
                                </div>
                            </div>  
                            <div className="product-page-heading-content-container">
                                <div className="heading-container">
                                    <h1>{param === "trio" ? "Nutri Chunks Protect Trio" : param === "plus" ? "Nutri Chunks Protect Plus" : "Nutri Chunks Protect Max"}</h1>
                                </div>
                                <div className="month-subscription-container">
                                    <h6>{param === "trio" ? "3-month subscription" : param === "plus" ? "6-month subscription" : "1-year subscription"}</h6>
                                </div>
                                <div className="subheading-container">
                                    <p>With our subscription-based program, you can have peace of mind. You'll receive premium dog food right to your door step, plus we offer free insurance coverage in case anything goes wrong!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="protect-page-content-section">
                    <div className="container">
                        <div className="protect-page-content-container">
                            <div className="protect-page-animation-container">
                                <SubscriptionAnimation
                                    deliveryOption = {deliveryOption}
                                    selelectedProducts = {selectedItems}
                                />
                            </div>
                            <div className="protect-page-product-main-container">
                                <div className="first-step-main-container step-main-container">
                                    <div onClick={() => handleAccordion("1st")} className="step-heading">
                                        <h4>1. Select Delivery Package</h4>
                                    </div>
                                    <div 
                                        className={specificAccordion === "1st" ? `accordion-content-container active` : `accordion-content-container inactive`}
                                        style={{height: specificAccordion === "1st" ? firstStepHeight.current.clientHeight : 0}}
                                    >
                                        <div ref={firstStepHeight} className="accordion-content">
                                            <StepsAccordion 
                                                content={firstStep()}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="second-step-main-container step-main-container">
                                    <div onClick={deliveryOption === 1 || deliveryOption === 2 ? () => handleAccordion("2nd") : ""} className="step-heading">
                                        <h4>2. Add Order</h4>
                                    </div>
                                    <div className="second-step-monthly-container">
                                        {
                                            deliveryOption === 1 ? 
                                                <div  
                                                    className={specificAccordion === "2nd" ? `accordion-content-container active` : `accordion-content-container inactive`}
                                                    style={{height: specificAccordion === "2nd" ? secondStepHeight.current.clientHeight : 0}}
                                                >
                                                    <div ref={secondStepHeight} className="accordion-content">
                                                        <StepsAccordion 
                                                            content={<RegularSecondStepContent 
                                                                        NextButton={() => setSpecificAccordion("3rd")}
                                                                    />}
                                                        />
                                                    </div>
                                                </div>
                                            : deliveryOption === 2 ? 
                                                <div 
                                                    className={specificAccordion === "2nd" ? `accordion-content-container active` : `accordion-content-container inactive`}
                                                >
                                                    <div ref={secondStepHeight} className="accordion-content">
                                                        <StepsAccordion 
                                                            content={<CustomSecondStepContent 
                                                                        param={param}
                                                                        NextButton={() => setSpecificAccordion("3rd")}
                                                                        accordionClicked={specificAccordion}
                                                                    />}
                                                        />
                                                    </div>
                                                </div>
                                            : <></>
                                        } 
                                    </div>  
                                </div>
                                <div className="third-step-main-container step-main-container">
                                    <div onClick={() => handleAccordion("3rd")} className="step-heading">
                                        <h4>3. Choose Delivery Week</h4>
                                    </div>
                                    <div  
                                        className={specificAccordion === "3rd" ? `accordion-content-container active` : `accordion-content-container inactive`}
                                        style={{height: specificAccordion === "3rd" ? thirdStepHeight.current.clientHeight : 0}}
                                    >
                                        <div ref={thirdStepHeight} className="accordion-content">
                                            <StepsAccordion 
                                                content={<ThirdStepAccordion 
                                                            NextButton={() => setModalStatus(true)}
                                                        />}
                                                // accordionClicked={specificAccordion}
                                                // accordionID={"3rd"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}