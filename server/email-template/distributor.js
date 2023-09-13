const numeral = require('numeral');

exports.distributor = ( data ) => {
    return (
        `
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css" data-hse-inline-css="true">
                @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

                *, html {
                    margin: 0;
                }

                a:hover:not(.btn) {
                    text-decoration: underline;
                }

                .btn:hover {
                    background: #ffffff !important;
                    color: #3899ec !important;
                    /* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25); */
                }

                .btn:active {
                    transform: scale(0.95) !important;
                    -webkit-transform: scale(0.95) !important;
                    transition: 0.05s;
                    -webkit-transition: 0.05s;
                }

                /* specific */
                .steps .tablet {
                    display: block;
                }

                .steps .mobile {
                    display: none;
                }

                .footer-social .link:hover {
                    color: #978a5e;
                }

                @media screen and (min-width: 551px) {
                    .footer.mobile {
                        display: none !important;
                    }
                }
                
                @media screen and (max-width:550px){
                    .footer.tablet {
                        display: none !important;
                    }
                }
                
                @media screen and (min-width: 451px) {
                    .logo.mobile {
                        display: none !important;
                    }
                }

                @media screen and (max-width: 450px) {
                    h1 {
                        font-size: 40px !important; 
                    }

                    .steps .tablet {
                        display: none !important;
                    }

                    .steps .mobile {
                        display: block !important;
                    }

                    .logo.tablet {
                        display: none !important;
                    }
                }
            </style>
        </head>
        <body>
            <table class="email-template" cellpadding="0" cellspacing="0" border="0" style="font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 18px; color: #ffffff; padding-top: 40px; margin-left: auto; margin-right: auto;">
                <tr class="header">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="container" style="max-width: 620px; margin-left: auto; margin-right: auto; padding: 50px; width: 100%; background-color: #3899ec">
                            <tr>
                                <td style="text-align: center;">
                                    <h1 style="font-size: 35px; font-weight: 500; margin-bottom: 12px; color: #ffffff; line-height: initial;">You just got an order</h1>
                                    <h3 style="margin: auto; max-width: 425px; font-size: 26px; font-weight: 400; color: #ffffff; margin-bottom: 0; line-height: initial;">
                                        An order has been placed on your online store.
                                    </h3>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="separator container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; height: 1px; margin-top: 20px; ">
                            <tr>
                                <td style="background-color: #2d2d2d;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="order-information">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <td>
                                <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Order Information</h3>
                                <p style="margin-bottom: 20px; color: #222222">Order #: ${ data.orderNo }</p>
                                <p style="margin-bottom: 20px; color: #222222">Total cost: ${ numeral( data.total ).format( "0,0.00" ) }</p>
                                <p style="margin-bottom: 10px; color: #222222">Payment status: Unfulfilled</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="separator container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; height: 1px;">
                            <tr>
                                <td style="background-color: #2d2d2d;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="shipping-information">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <td>
                                <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Shipping Information</h3>
                                <p style="margin-bottom: 20px; color: #222222">Name: ${ data.shipping.firstName } ${ data.shipping.lastName }</p>
                                <p style="margin-bottom: 20px; color: #222222">Email: ${ data.shipping.email }</p>
                                <p style="margin-bottom: 20px; color: #222222">Phone: ${ data.shipping.phone }</p>
                                <p style="margin-bottom: 20px; color: #222222">Address: ${ data.shipping.address1 } ${ data.shipping.address2 } ${ data.shipping.brgy } ${ data.shipping.city } ${ data.shipping.province } ${ data.shipping.country } ${ data.shipping.zip }</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr class="payment-method">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <td>
                                <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Payment Method</h3>
                                <p style="margin-bottom: 5px; color: #222222;">Payment Method: ${ data.paymentMethod }</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="separator container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; height: 1px; margin-top: 10px; ">
                            <tr>
                                <td style="background-color: #2d2d2d;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="order-details">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <tr>
                                <td>
                                    <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Order Details</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table style="margin-bottom: 50px;">
                                        <tr>
                                            <th><h6 style="color: #000; text-transform: uppercase; margin-right: 60px; font-size: 16px; margin-bottom: 20px; font-weight: 700;">Item</h6></th>
                                            <th><h6 style="color: #000; text-transform: uppercase; margin-right: 60px; font-size: 16px; margin-bottom: 20px; font-weight: 700;">Qty</h6></th>
                                            <th><h6 style="color: #000; text-transform: uppercase; margin-right: 60px; font-size: 16px; margin-bottom: 20px; font-weight: 700;">Total</h6></th>
                                        </tr>
                                        ${ data.products.map( p => (
                                            `<tr>
                                                <td><p style="margin-bottom: 20px; margin-right: 60px; color: #222222">${ p.name }</p></td>
                                                <td><p style="margin-bottom: 20px; margin-right: 60px; color: #222222">${ p.qty }</p></td>
                                                <td><p style="margin-bottom: 20px; margin-right: 60px; color: #222222">${ p.total }</p></td>
                                            </tr>`
                                        ) ) }
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        `
    )
}

exports.distributorSubscription = ( data ) => {
    return (
        `
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css" data-hse-inline-css="true">
                @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

                *, html {
                    margin: 0;
                }

                a:hover:not(.btn) {
                    text-decoration: underline;
                }

                .btn:hover {
                    background: #ffffff !important;
                    color: #3899ec !important;
                    /* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25); */
                }

                .btn:active {
                    transform: scale(0.95) !important;
                    -webkit-transform: scale(0.95) !important;
                    transition: 0.05s;
                    -webkit-transition: 0.05s;
                }

                /* specific */
                .steps .tablet {
                    display: block;
                }

                .steps .mobile {
                    display: none;
                }

                .footer-social .link:hover {
                    color: #978a5e;
                }

                @media screen and (min-width: 551px) {
                    .footer.mobile {
                        display: none !important;
                    }
                }
                
                @media screen and (max-width:550px){
                    .footer.tablet {
                        display: none !important;
                    }
                }
                
                @media screen and (min-width: 451px) {
                    .logo.mobile {
                        display: none !important;
                    }
                }

                @media screen and (max-width: 450px) {
                    h1 {
                        font-size: 40px !important; 
                    }

                    .steps .tablet {
                        display: none !important;
                    }

                    .steps .mobile {
                        display: block !important;
                    }

                    .logo.tablet {
                        display: none !important;
                    }
                }
            </style>
        </head>
        <body>
            <table class="email-template" cellpadding="0" cellspacing="0" border="0" style="font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 18px; color: #ffffff; padding-top: 40px; margin-left: auto; margin-right: auto;">
                <tr class="header">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="container" style="max-width: 620px; margin-left: auto; margin-right: auto; padding: 50px; width: 100%; background-color: #3899ec">
                            <tr>
                                <td style="text-align: center;">
                                    <h1 style="font-size: 35px; font-weight: 500; margin-bottom: 12px; color: #ffffff; line-height: initial;">You just got an order</h1>
                                    <h3 style="margin: auto; max-width: 425px; font-size: 26px; font-weight: 400; color: #ffffff; margin-bottom: 0; line-height: initial;">
                                        An order has been placed on your online store.
                                    </h3>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="separator container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; height: 1px; margin-top: 20px; ">
                            <tr>
                                <td style="background-color: #2d2d2d;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="order-information">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <td>
                                <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Order Information</h3>
                                <p style="margin-bottom: 20px; color: #222222">Order #: ${ data.orderNo }</p>
                                <p style="margin-bottom: 20px; color: #222222">Total cost: ${ numeral( data.total ).format( "0,0.00" ) }</p>
                                <p style="margin-bottom: 10px; color: #222222">Payment status: Unfulfilled</p>
                                <p style="margin-bottom: 10px; color: #222222">Payment type: ${ data.paymentType }</p>
                                <p style="margin-bottom: 10px; color: #222222">Subscription: ${ data.subscription }</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="separator container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; height: 1px;">
                            <tr>
                                <td style="background-color: #2d2d2d;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="shipping-information">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <td>
                                <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Shipping Information</h3>
                                <p style="margin-bottom: 20px; color: #222222">NAme; ${ data.shipping.firstName } ${ data.shipping.lastName }</p>
                                <p style="margin-bottom: 20px; color: #222222">Email: ${ data.shipping.email }</p>
                                <p style="margin-bottom: 20px; color: #222222">Phone: ${ data.shipping.phone }</p>
                                <p style="margin-bottom: 20px; color: #222222">Address: ${ data.shipping.address1 } ${ data.shipping.address2 } ${ data.shipping.brgy } ${ data.shipping.city } ${ data.shipping.province } ${ data.shipping.country } ${ data.shipping.zip }</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr class="payment-method">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <td>
                                <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Payment Method</h3>
                                <p style="margin-bottom: 5px; color: #222222;">Payment method: ${ data.paymentMethod }</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" class="separator container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; height: 1px; margin-top: 10px; ">
                            <tr>
                                <td style="background-color: #2d2d2d;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="order-details">
                    <td>
                        <table cellpadding="0" cellspacing="0" class="section container" style="max-width: 620px; margin-left: auto; margin-right: auto; width: 100%; padding-top: 20px; padding-bottom: 20px;">
                            <tr>
                                <td>
                                    <h3 style="color: #000; text-transform: uppercase; font-size: 25px; margin-bottom: 20px; font-weight: 700;">Order Details</h3>
                                </td>
                            </tr>
                            ${ data.items.map( m => (
                                `<tr>
                                    <td>
                                        <p style="color: #000">${ m.month === -1 ? "Included product:" : `Month ${ m.month + 1 } - Week ${ data.deliveryWeek }` }</p>
                                        <table style="margin-bottom: 50px;">
                                            <tr>
                                                <th><h6 style="color: #000; text-transform: uppercase; margin-right: 60px; font-size: 16px; margin-bottom: 20px; font-weight: 700;">Item</h6></th>
                                                <th><h6 style="color: #000; text-transform: uppercase; margin-right: 60px; font-size: 16px; margin-bottom: 20px; font-weight: 700;">Qty</h6></th>
                                                <th><h6 style="color: #000; text-transform: uppercase; margin-right: 60px; font-size: 16px; margin-bottom: 20px; font-weight: 700;">Total</h6></th>
                                            </tr>
                                            ${ m.products.map( p => (
                                                `<tr>
                                                    <td><p style="margin-bottom: 20px; margin-right: 60px; color: #222222">${ p.product.name }</p></td>
                                                    <td><p style="margin-bottom: 20px; margin-right: 60px; color: #222222">${ p.qty }</p></td>
                                                    <td><p style="margin-bottom: 20px; margin-right: 60px; color: #222222">${ parseFloat( p.price ) * p.qty }</p></td>
                                                </tr>`
                                            ) ) }
                                        </table>
                                    </td>
                                </tr>`
                            ) ) }
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        `
    )
}