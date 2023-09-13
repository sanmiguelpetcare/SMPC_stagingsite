import { combineReducers } from "redux";
import common from "./common";
import product from "./product";
import member from "./member";
import distributor from "./distributor";
import coupon from "./coupon";
import order from "./order";
import subscription from "./subscription";
import user from "./user";

import fe_product from "./frontend/product";
import fe_user from "./frontend/user";
import fe_cart from "./frontend/cart";
import fe_checkout from "./frontend/checkout";
import fe_subscription from "./frontend/subscription";
import fe_signup from "./frontend/signup";
import fe_distributioner from "./frontend/distributorLocation"

export default combineReducers({
    common: common.reducer,
    product: product.reducer,
    member: member.reducer,
    distributor: distributor.reducer,
    coupon: coupon.reducer,
    order: order.reducer,
    subscription: subscription.reducer,
    user: user.reducer,
    fe_product: fe_product.reducer,
    fe_user: fe_user.reducer,
    fe_cart: fe_cart.reducer,
    fe_checkout: fe_checkout.reducer,
    fe_subscription: fe_subscription.reducer,
    fe_signup: fe_signup.reducer,
    fe_distributioner: fe_distributioner.reducer
});