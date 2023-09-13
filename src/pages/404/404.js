import React from "react"
import { Link } from "react-router-dom"

export default function PagenotExist() {
    return (
        <div className="404page">
            <div className="container">
            <div classnMae="404page-content">
                <h1>This page isn't available. Sorry about that.</h1>
                <p>Visit our <Link to="/">Homepage</Link></p>
            </div>
            </div>
        </div>
    )
}