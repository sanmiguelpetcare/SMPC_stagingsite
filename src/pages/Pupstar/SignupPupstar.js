import React from "react";
import PupstarPlay from "../../assets/media/Pupstar/newsletter-mockup.png"
import Request from "config/API";

import { Link } from "react-router-dom";

export default function SignupPupStar() {    

    const [data, setData] = React.useState({
        firstName: null,
        lastName: null,
        email: null,
        petName: null,
        petAge: null,
        petBreed: null,
    })

    const [dropDownStatus, setDropdownStatus] = React.useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setData (prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleClick = (age) => {
        setDropdownStatus(false)
        setData (prevData => {
            return {
                ...prevData,
                petAge: age
            }
        })
    }

    const handleSubmit = () => {
        Request().post("/mailchimp/pupstar/subscription", data)
            .then( response => {
                // props.product_actions.updateList( response.data );
                console.log("Data submitted")
            });
    }

    const AgeDropdown = () => {
        return (
            <>
                <div className="dropdown-container">
                    <div onClick={() => handleClick("0-3")} className="age">
                        <p>0 - 3 months</p>
                    </div>
                    <div onClick={() => handleClick("4-6")} className="age">
                        <p>4 - 6 months</p>
                    </div>
                    <div onClick={() => handleClick("7-9")} className="age">
                        <p>7 - 9 months</p>
                    </div>
                    <div onClick={() => handleClick("10-12")} className="age">
                        <p>10 - 12 months</p>
                    </div>
                </div>
            </>
        )
    }

    console.log(data)

    return (
        <>
            <div className="pupstar-signup">
                <div className="container">
                    <div className="pupstar-content-container">
                        <div className="form-main-container">
                            <div className="form-container">
                                <div className="heading-container">
                                    <h2>SUBSCRIBE TO <span>PUPSTAR</span></h2>
                                    <p>Let us help you in your pawrenthood journey through tips and advices we'll send directly to your inbox!</p>
                                </div>
                                <div className="field-container">
                                    <p>First Name</p>
                                    <input
                                        onChange={handleChange}
                                        name="firstName"
                                        type="text"
                                        value={data.firstName}
                                    />
                                </div>
                                <div className="field-container">
                                    <p>Last Name</p>
                                    <input
                                        onChange={handleChange}
                                        name="lastName"
                                        type="text"
                                        value={data.lastName}
                                    />
                                </div>
                                <div className="field-container">
                                    <p>Email</p>
                                    <input
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        value={data.email}
                                    />
                                </div>
                            </div>
                            <div className="form-container">
                                <div className="heading-container">
                                    <p>Let us help you in your pawrenthood journey through tips and advices we'll send directly to your inbox!</p>
                                </div>
                                <div className="field-container">
                                    <p>Puppy's Name</p>
                                    <input
                                        onChange={handleChange}
                                        name="petName"
                                        type="text"
                                        value={data.petName}
                                    />
                                </div>
                                <div className="field-container">
                                    <p>Puupy's Age</p>
                                    <div onClick={() => setDropdownStatus(!dropDownStatus)} className="age-field">
                                        <p>{data.petAge}</p>
                                    </div>
                                    {dropDownStatus ? <AgeDropdown /> : <></>}
                                </div>
                                <div className="field-container">
                                    <p>Puppy's Breed</p>
                                    <input
                                        onChange={handleChange}
                                        name="petBreed"
                                        type="text"
                                        value={data.petBreed}
                                    />
                                </div>
                            </div>
                            <div className="button-container">
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                        <div className="image-content">
                            <div className="head">
                                <h4>GET TIPS IN YOUR INBOX</h4>
                            </div>
                            <div className="image-container">
                                <img src={PupstarPlay} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}