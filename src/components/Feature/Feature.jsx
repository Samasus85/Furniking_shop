import React from "react";
import css from './Feature.module.css'
import Car from '../../assets/images/feature/delivery.svg';
import Box from '../../assets/images/feature/box.svg';
import Pay from '../../assets/images/feature/payment.svg';
import Call from '../../assets/images/feature/call.svg';
const Feature = () => {
    return (
        <React.Fragment>
            <div className={css.container}>
                <div className={css.item}>
                    <img src={Car} alt="car" />
                    <div>
                        <h2>Free Shipping</h2>
                        <p>Orders over $100</p>
                    </div>
                </div>
                <div className={css.item}>
                    <img src={Box} alt="box" />
                    <div>
                        <h2>Smart Gift Card</h2>
                        <p>Buy $1000 to get card</p>
                    </div>
                </div>
                <div className={css.item}>
                    <img src={Pay} alt="pay" />
                    <div>
                        <h2>Quick Payment</h2>
                        <p>100% secure payment</p>
                    </div>
                </div>
                <div className={css.item}>
                    <img src={Call} alt="call" />
                    <div>
                        <h2>24/7 Support</h2>
                        <p>Quick support</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Feature;