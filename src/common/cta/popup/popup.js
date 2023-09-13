import React from "react"
import { Link } from "react-router-dom"

export default function popup(props) {

    const mapItems =  props.items.map(item => {
        return (
            <>  
                <Link to={item.link}>
                    <li>{item.item}</li>
                </Link>
            </>
        )
    })

    return (
        <>
            <div className="popup-container">
                <div className="popup-item">
                    {mapItems}
                </div>
            </div>
        </>
    )
}