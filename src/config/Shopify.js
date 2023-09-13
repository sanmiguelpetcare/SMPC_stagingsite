import { Shopify } from "@shopify/shopify-api";
import createApp from "@shopify/app-bridge"
import { getSessionToken } from "@shopify/app-bridge-utils";

// const app = createApp({
//     apiKey: "58e26756c4f2ebe2f5a7a2dcdb560627",
//     host: new URLSearchParams(document.location).get("host"),
//     // forceRedirect: true
// })

// const sessionToken = getSessionToken(app);

// const shopifyApi = () => {
//     return {
//         createCustomer: async (fields, furbabies ) => {
//             const customer = new Shopify.rest.Customer({session: sessionToken});

//             customer.first_name = fields.firstName.value;
//             customer.last_name = fields.lastName.value;
//             customer.email = fields.email.value;
//             customer.phone = fields.phone.value;
//             customer.verified_email = true;
//             customer.addresses = [
//               {
//                 "address1": fields.address1.value,
//                 "address2": fields.brgy.value,
//                 "city": fields.city.value,
//                 "province": fields.province.value,
//                 "phone": fields.phoen.value,
//                 "zip": fields.zip.value,
//                 "last_name": fields.lastName.value,
//                 "first_name": fields.firstName.value,
//                 "country": "Philppines"
//               }
//             ];
//             customer.password = fields.password.value;
//             customer.password_confirmation = fields.confirmPassword.value;
//             customer.send_email_welcome = false;
//             customer.metafields.custom.furbabies = furbabies;

//             await customer.save({
//               update: true,
//             });
//         }
//     }
// }

// export default shopifyApi;

// var shopifyApi = require('shopify-node-api');

// var shopify = new shopifyApi({
//   shop: "nutri-chunks.myshopify.com",
//   Shopify_api_key: process.env['SHOPIFY_NC_API_KEY'],
//   access_token: process.env['SHOPIFY_STOREFORNT_ACCESS_KEY'],
// })