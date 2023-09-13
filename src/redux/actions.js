import { bindActionCreators } from 'redux';
import common from './reducers/common';
import product from './reducers/product';
import member from './reducers/member';
import distributor from './reducers/distributor';
import coupon from './reducers/coupon';
import order from './reducers/order';
import subscription from './reducers/subscription';
import user from './reducers/user';

import fe_product from './reducers/frontend/product';
import fe_user from './reducers/frontend/user';
import fe_cart from "./reducers/frontend/cart";
import fe_checkout from "./reducers/frontend/checkout";
import fe_subscription from "./reducers/frontend/subscription";
import fe_signup from "./reducers/frontend/signup";
import fe_distributioner from "./reducers/frontend/distributorLocation"

const Dispatcher = dispatch => {
    return {
        common_actions: bindActionCreators(common.actions, dispatch),
        product_actions: bindActionCreators(product.actions, dispatch),
        member_actions: bindActionCreators(member.actions, dispatch),
        distributor_actions: bindActionCreators(distributor.actions, dispatch),
        coupon_actions: bindActionCreators(coupon.actions, dispatch),
        order_actions: bindActionCreators(order.actions, dispatch),
        subscription_actions: bindActionCreators(subscription.actions, dispatch),
        user_actions: bindActionCreators(user.actions, dispatch),
        fe_product_actions: bindActionCreators(fe_product.actions, dispatch),
        fe_user_actions: bindActionCreators(fe_user.actions, dispatch),
        fe_cart_actions: bindActionCreators(fe_cart.actions, dispatch),
        fe_checkout_actions: bindActionCreators(fe_checkout.actions, dispatch),
        fe_subscription_actions: bindActionCreators(fe_subscription.actions, dispatch),
        fe_signup_actions: bindActionCreators(fe_signup.actions, dispatch),
        fe_distributioner_actions: bindActionCreators(fe_distributioner.actions, dispatch)
    }
}

export default Dispatcher;