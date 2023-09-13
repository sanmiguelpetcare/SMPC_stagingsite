import React from "react"

export default function BurgerIcon() {
    const [sidebar, setSidebar] = React.useState(false);

    const clickBurgericon = function() {
        setSidebar(!sidebar)
    }

    return (
        <>  
            <div className="burger-icon-container show-in-mobile">
                <i className="fa fa-bars" onClick={clickBurgericon}></i>
            </div>
        </>
    )
}