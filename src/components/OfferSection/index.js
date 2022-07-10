
import css from './OfferSection.module.css';
// import button from '../../assets/button/button';
import { Link } from 'react-router-dom';
const OfferSection = () => {
    return (
        <div className={css.container}>
            <h2 className={css.special}>SPECIAL OFFER</h2>
            <div className={css.bg}>
                <div className={css.bg_left}>
                    <div className={css.title}>
                        <h3>Living Room Furniture</h3>
                        <p>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>
                    </div>
                    <div className={css.price}>
                        <span>$150</span>
                        <del>$250</del>
                              
                        <button className={css.button}><Link to="/catalog">SHOP NOW </Link></button>
                    </div>
                    <div className={css.timer}>
                        <span >10 <br/> Days</span>
                        <span >15 <br /> HRS</span>
                        <span >30 <br /> MIN</span>
                        <span >22 <br /> secs</span>
                    </div>
                </div>
                <div className={css.bg_right}>
                    <div className={css.title}>
                        <h3>Modern chair</h3>
                        <p>Hot chairs of the modern era are now available in our stock.</p>
                    </div>
                    <div className={css.price}>
                        <span>$75</span>
                        <del>$150</del>
                              
                        <button className={css.button} ><Link to="/catalog">SHOP NOW </Link></button>
                    </div>
                    <div className={css.timer}>
                        <span >15 <br /> Days</span>
                        <span >08 <br /> HRS</span>
                        <span >20 <br /> MIN</span>
                        <span >12 <br /> secs</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default OfferSection