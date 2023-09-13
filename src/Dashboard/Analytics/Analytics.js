import React from "react";
import { ReduxConnect } from "helpers/HOC";

import TopSellingItems from "./TopSellingItems/TopSellingItems";
import SalesByBilling from "./SalesByBilling/SalesByBilling";
import TopPayingCustomers from "./TopPayingCustomers/TopPayingCustomers";
import NewVsReturningCustomers from "./NewVsReturningCustomers/NewVsReturningCustomers";

const Analytics = props => {
    return (
        <div className="analytics">
            <div className="title-container">
                <h1>Sales Overview</h1>
                <p>From Sept-Oct 2022</p>
            </div>
            <div className="analytics-row">
                <div className="analytics-col content">
                    <div className="counters-container">
                        <div className="counter-item">
                            <label>Total sales</label>
                            <h4>₱297.1K</h4>
                        </div>
                        <div className="counter-item">
                            <label>Avg. order value</label>
                            <h4>₱2,138</h4>
                        </div>
                        <div className="counter-item">
                            <label>Total orders</label>
                            <h4>139</h4>
                        </div>
                    </div>
                    <TopSellingItems />
                    <SalesByBilling />
                </div>
                <div className="analytics-col widgets">
                    <TopPayingCustomers />
                    <NewVsReturningCustomers />
                </div>
            </div>
        </div>
    );
}

export default ReduxConnect(Analytics, []);