import Auth from "config/Auth";
import { Link } from 'react-router-dom'
import React from "react";
import { ReduxConnect } from "helpers/HOC";
// import swell from 'swell-js'

const SignupLoginButton = (props) => {
    // swell.init("nutri-chunks-pawmily", "pk_p2aI2WSztUyecuubPrt5xrM1x6lEfepy");

    const [dropdownStatus, setDropdownStatus] = React.useState(false);

    const handleLogout = async () => {
        // await swell.account.logout()
        //     .then(res => {
        //         console.log("Successfully logged out --- \n", res)
        //         props.fe_user_actions.setLoggedUser(null);
        //         window.location.replace("/");
        //     })
        //     .catch(err => {
        //         console.log("Logout Error --- \n", err)
        //     })

        Auth.logout(() => {
            props.fe_user_actions.setLoggedUser(null);
            window.location.replace("/");
        });
    };

    const handleDropdown = () => {
        setDropdownStatus(!dropdownStatus)
    }

    return (
        <>  
            <div className={props.modalClassname}>
                { props.fe_user_state.loggedUser ? (
                    <>
                        <p onClick={handleDropdown} className="user-button">
                            <i className="material-icons">person</i>
                            {/* <i className="fa-solid fa-user user-icon"></i> */}
                            { props.fe_user_state.loggedUser.firstName }
                            {/* <span>
                                { props.fe_user_state.loggedUser.first_name }
                            </span> */}
                        </p>
                        {dropdownStatus ? (
                            <div className="logged-on-dropdwon">
                                <div onClick={handleDropdown} className="dropdown-list">
                                    <Link to="/profile/">
                                        <p>Profile</p>
                                    </Link>
                                </div>
                                <div onClick={handleDropdown} className="dropdown-list">
                                    <Link to="/subscription/">
                                        <p>Subscription</p>
                                    </Link>
                                </div>
                                <div onClick={handleDropdown} className="dropdown-list">
                                    <Link to="/order-history/">
                                        <p>Order History</p>
                                    </Link>
                                </div>
                                <div onClick={handleDropdown} className="dropdown-list logout-button">
                                    <p onClick={ handleLogout }>Logout</p>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <>
                        <div className="signup-button-container-nav">
                            <Link to="/signup">
                                <button>SIGN UP</button>
                            </Link>
                        </div>
                    </>
                ) }
            </div>
        </>
    )
}

export default ReduxConnect(SignupLoginButton, ["fe_user"]);