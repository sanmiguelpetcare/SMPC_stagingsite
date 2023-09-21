// import Katrin from "../../../../assets/media/pawmily/NC_Join_our_Pawmily_Asset_2.png"
// import JoinPawmily from "../../../../assets/media/pawmily/join_our_pawmily.png"
// import { Redirect } from "react-router-dom";
// import { AnimatePresence } from "framer-motion"
// import { useEffect } from "react";
// import swell from 'swell-js';
import { motion } from "framer-motion"
import { ReduxConnect } from "helpers/HOC";
import BlurredKibble1 from "../../../../assets/media/sign_up/Kibbble 01.png"
import BlurredKibble2 from "../../../../assets/media/sign_up/Kibble 02.png"
import BlurredKibble3 from "../../../../assets/media/sign_up/Kibble 05.png"
import Form from "./Form/Form";
import Kathryn from "../../../../assets/media/sign_up/KATH_JOP.png"
import Modal from "../Modal";
import React from "react";
import Request from "config/API";
import SignupModal from "./SignupModal"
// import shopifyApi from "config/Shopify";
import Tokenized from "config/Tokenized";


const Signup = props => {
    // swell.init("nutri-chunks-pawmily", "pk_p2aI2WSztUyecuubPrt5xrM1x6lEfepy")

    const fields = props.fe_signup_state.item.form;
    const [loginModalStatus, setLoginModalstatus] = React.useState(false);
    const [accountCreationModalStatus, setAccountCreationModalStatus] = React.useState(false);
    const [failedLoginMdalStatus, setFailedLoginModalstatus] = React.useState(false);
    const [signupStatus, setSignupStatus] = React.useState(true);

    const handleOpenLoginModal = function() {
        setLoginModalstatus(true);
    };

    const handleCloseLoginModal = function() {
        setLoginModalstatus(false);
    };

    const handleOpenFailedLoginModal = function() {
        setFailedLoginModalstatus(true);
    };

    const handleCloseFailedLoginModal = function() {
        setFailedLoginModalstatus(false);
    };

    const handleCloseAccountCreationFail = function() {
        setAccountCreationModalStatus(false);
    };

    const onError = e => {
        props.fe_signup_actions.updateField([
            {
                field: e.name,
                key: "error",
                value: e.value
            }
        ]);
    };

    const validate = async () => {
        let errors = 0;

        if( !fields.email.value ) {
            onError({ name: "email", value: "This field is required." });
            errors += 1;
        } else if (!fields.email.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            onError({ name: "email", value: "Enter valid email" });
            errors += 1;
        } else {
            await Request().get( "/user/email", { email: fields.email.value } )
                .then( response => {
                    if( response.data ) {
                        onError({ name: "email", value: "Email already exists" });
                        errors += 1;
                    }
                });
        }

        if( !fields.firstName.value ) {
            onError({ name: "firstName", value: "This field is required." });
            errors += 1;
        }

        if( !fields.lastName.value ) {
            onError({ name: "lastName", value: "This field is required." });
            errors += 1;
        }

        if( !fields.address1.value ) {
            onError({ name: "address1", value: "This field is required." });
            errors += 1;
        }

        // if( !fields.brgy.value ) {
        //     onError({ name: "brgy", value: "This field is required." });
        //     errors += 1;
        // }

        // if( !fields.city.value ) {
        //     onError({ name: "city", value: "This field is required." });
        //     errors += 1;
        // }

        // if( !fields.province.value ) {
        //     onError({ name: "province", value: "This field is required." });
        //     errors += 1;
        // }

        if( !fields.zip.value ) {
            onError({ name: "zip", value: "This field is required." });
            errors += 1;
        }

        if( !fields.phone.value || fields.phone.value.slice(3) === "") {
            onError({ name: "phone", value: "This field is required." });
            errors += 1;
        } else if( fields.phone.value.slice(3).match(/[a-zA-Z`!@#$%^&*()_+\-=[]{};':"\|,.<>\/?~]/) ) {
            onError({ name: "phone", value: "This field must only contain numbers." });
            errors += 1;
        }

        if( !fields.password.value ) {
            onError({ name: "password", value: "This field is required." });
            errors += 1;
        } else if( fields.password.value !== fields.confirmPassword.value ) {
            onError({ name: "password", value: "Password and Confirm Password should be equal." });
            errors += 1;
        }

        if( !fields.confirmPassword.value ) {
            onError({ name: "confirmPassword", value: "This field is required." });
            errors += 1;
        }

        return errors;
    }

    const onProceed = () => {
        validate().then( async errcount => {
            if( errcount === 0 ) {
                if( signupStatus === false ) {
                    // await swell.account.create({
                    //     email: fields.email.value,
                    //     first_name: fields.firstName.value,
                    //     last_name: fields.lastName.value,
                    //     email_optin: true,
                    //     phone: fields.phone.value,
                    //     password: fields.password.value,
                    //     shipping : {
                    //         name : fields.firstName.value + " " + fields.lastName.value,
                    //         first_name : fields.firstName.value,
                    //         last_name: fields.lastName.value,
                    //         phone: fields.phone.value,
                    //         address1 : fields.password.value,
                    //         address2 : fields.brgy.value,
                    //         state : fields.province.value,
                    //         city : fields.city.value,
                    //         zip : fields.zip.value,
                    //         country : "PH"
                    //     }
                    // }).then(async (res) => {
                    //     // Fetch the currently logged in account
                    //     var acc = await swell.account.get();

                    //     // Return error when email already exists
                    //     if (res?.email?.message?.toLowerCase() === "already exists") {
                    //         handleOpenFailedLoginModal();
                    //     }

                    //     if (acc === null) {
                    //         console.log("Account Creation Error ----", acc);
                    //     } else {
                    //         console.log("Account Created ---", acc);
                    //         props.fe_user_actions.setLoggedUser(acc);

                    //         const inputs = {
                    //             email: fields.email.value, 
                    //             password: fields.password.value
                    //         };
                    //         const gtoken = Tokenized.encrypt(inputs);
                    //         const params = {
                    //             user: gtoken.token
                    //         };

                    //         if(props.fe_user_actions.setLoggedUser) {
                    //             props.fe_user_actions.setLoggedUser(acc);
                    //             console.log(acc)
            
                    //             localStorage.setItem('token_id', gtoken.id);
                    //             localStorage.setItem('logged_user', gtoken.token);
                
                    //             props.handleClose();
                    //         }

                    //         // Append the furbabies to current account
                    //         // await swell.put(`account/${acc.id}`, {
                    //         //     fur_babies : props.fe_signup_state.item.furbabies.filter( f => f.name )
                    //         // }).then(res => {
                    //         //     console.log("Updated furbabies", res)
                    //         // })

                    //         await swell.account.update({
                    //             metadata: {
                    //                 fur_babies : props.fe_signup_state.item.furbabies.filter( f => f.name )
                    //             }
                    //         }).then(res => {
                    //             console.log("Updated furbabies", res)
                    //         })
                    //     }
                    // })
                    // .catch(err => {
                    //     console.error("Account Creation", err)
                    //     props.common_actions.updateLoading(false)
                    //     setAccountCreationModalStatus(true)
                    // })

                    const data = {
                        firstName: fields.firstName.value,
                        lastName: fields.lastName.value,
                        email: fields.email.value,
                        phone: fields.phone.value,
                        password: fields.password.value,
                        address1: fields.address1.value,
                        address2: fields.address2.value,
                        brgy: fields.brgy.value,
                        city: fields.city.value,
                        province: fields.province.value,
                        zip: fields.zip.value,
                        fur_babies: props.fe_signup_state.item.furbabies.filter( f => f.name )
                    };

                    props.common_actions.updateLoading(true);

                    Request().post( "/user", data )
                        .then( response => {
                            if( response ) {
                                const inputs = {
                                    email: data.email, 
                                    password: data.password
                                };
                                const gtoken = Tokenized.encrypt(inputs);
                                const params = {
                                    user: gtoken.token
                                };
                    
                                Request().post(`/user/login/${gtoken.id}`, params)
                                    .then(response => {
                                        if( response ) {
                                            if( props.fe_user_actions.setLoggedUser ) {
                                                props.fe_user_actions.setLoggedUser(response.data);
                    
                                                localStorage.setItem('token_id', gtoken.id);
                                                localStorage.setItem('logged_user', gtoken.token);

                                                window.location.href = "/";
                                            }
                                        }
                                    });
                            }
                        });

                    // shopifyApi.createCustomer(fields, props.fe_signup_state.item.furbabies)
                    //     .then(res => {
                    //         console.log(res)
                    //     })
                    //     .catch(err => {
                    //         console.error(err)
                    //     })

                    props.common_actions.updateLoading(false);
                } else {
                    setSignupStatus(false);
                }
            }
        })
    }

    const onBack = () => {
        setSignupStatus(true);
    }

    const variantA = {
        init: {
            opacity: 0,
            x: -200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        current: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
    }

    const variantB = {
        init: {
            opacity: 0,
            x: 200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        current: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },

        exit: {
            opacity: 0,
            x: 200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        }
    }

    return (
        <>
            <Modal
                modalStatus={loginModalStatus}
                handleClose={handleCloseLoginModal}
                heading={"Log in"}
            />
            <SignupModal
                modalStatus={failedLoginMdalStatus}
                handleClose={handleCloseFailedLoginModal}
                heading={"Failed to Sign Up."}
                content={"Email already exists. Try signing up with a new one."}
            />
            <SignupModal
                modalStatus={accountCreationModalStatus}
                handleClose={handleCloseAccountCreationFail}
                heading={"Failed to Sign Up."}
                content={"You must be logged out to create an account."}
            />
            <div className="signup-container">
                <img className="blurred-kibble" id="blurred-kibble-a" src={BlurredKibble1} alt=""/>
                <img className="blurred-kibble" id="blurred-kibble-b" src={BlurredKibble2} alt=""/>
                <img className="blurred-kibble" id="blurred-kibble-c" src={BlurredKibble3} alt=""/>
                <div className="container">
                    <div className="signup-main-container">
                        
                            <div className="signup-content-main-container">
                                <motion.div variants={variantA} initial="init" animate="current" className="join-pawmily-container">
                                    <img className="katrin" src={Kathryn} alt=""/>
                                </motion.div>
                                <motion.div variants={variantB} initial="init" animate="current" exit="exit" className="signup-content-container">
                                    {/* { signupStatus === false && <a className="back-button" onClick={ onBack }>{`< Back`}</a> } */}
                                    <Form isFirstStep={ signupStatus } onOpenLogin={ handleOpenLoginModal } />
                                    <div className="button-containers">
                                        <div className="back-button-container">
                                            <button className={signupStatus === false ? "back-button" : "hidden"} onClick={ onBack }>BACK</button>
                                        </div>
                                        <div className="submit-button-container">
                                            <button className={signupStatus === false ? "submit-button" : "next-button"} onClick={ onProceed }>{signupStatus === false ? `SUBMIT` : `NEXT`}</button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxConnect(Signup, ["fe_user", "fe_signup"]);