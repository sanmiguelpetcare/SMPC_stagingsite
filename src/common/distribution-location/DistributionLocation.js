import React from "react"
import { ReduxConnect } from "helpers/HOC";
import { motion } from "framer-motion"


const DistributionLocation = (props) => {

    const {selectedVariant, setSelectedVariant} = React.useState()

    const variantA = {
        init: {
            opacity: 0, 
            x: -200
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                duration: .5,
            }
        }
    }

    const variantB = {
        init: {
            opacity: 1, 
            x: 0
        },
        visible: {
            opacity: 0,
            x: -200,
            transition: {
                type: "spring",
                stiffness: 150,
                duration: .5,
            }
        }
    }

    // const handleClick = () => {
    //     props.handleOpenModal
    //     setSelectedVariant("A")
    // }

    const distributor = (localStorage.getItem("distributor") || "").split("|") || [];

    return (
        <>
            <motion.div variants={props.modalStatus ? variantB : variantA} initial="init" animate="visible" onClick={props.onOpen} className="distribution-location">
                <div className="distribution-location-container">
                    <h6 className="location-title">Deliver to:</h6>
                    <h6 className="location-address">{ distributor[0] }</h6>
                </div>
            </motion.div>
        </>
    )
}

export default ReduxConnect(DistributionLocation, ["fe_distributioner"])

// export default DistributionLocation;