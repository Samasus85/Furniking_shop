import css from './Footer.module.css';
import logo from '../../assets/logo.png';
import facebook from '../../assets/images/social/facebook.svg'
import twitter from '../../assets/images/social/twitter.svg'
import instagram from '../../assets/images/social/instagram.svg'
import pinterset from '../../assets/images/social/pinterset.svg'
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import ScrollUp from '../ScrollUp/ScrollUp';
const Footer = () => {
    return (
        <Fragment>

        <div className={css.container}>
            <div className={css.footer_logo}>
                <div className={css.logo}>
                    <Link to="/" >
                        <div className={css.logo}>
                            <img src={logo} alt="logo" />
                            <p>Furniking</p>
                        </div>
                    </Link>
                </div>
                <div className={css.footer_text}>
                    <p>Furnking is the a popular Ecommerce site. Lorem ipsum dolor sim amet,
                        consectetur  adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div className={css.footer_social}>
                    <NavLink to='/'>
                        <img src={facebook} alt="facebook" />
                    </NavLink >
                    <NavLink to='/'>
                        <img src={twitter} alt="twitter" />
                    </NavLink >
                    <NavLink to='/'>
                        <img src={instagram} alt="instagram" />
                    </NavLink >
                    <NavLink to='/'>
                        <img src={pinterset} alt="pinterset" />
                    </NavLink >
                </div>
            </div>
            <div className={css.help}>
                <h4>Help</h4>
                <ul className={css.footer_text}>
                    <li><Link to='/policy'>Privacy Policy</Link></li>
                    <li><Link to='/accordion'>Shipping & Delivery</Link></li>
                    <li><Link to='/'>Track Your Order</Link></li>
                </ul>
            </div>
            <div className={css.store}>
                <h4>Store</h4>
                <ul className={css.footer_text}>
                    <li><Link to='/catalog'>Furniture</Link></li>
                    <li><Link to='catalog'>Tabble</Link></li>
                    <li><Link to='/catalog'>Sofa</Link></li>
                </ul>
            </div>
            <div className={css.support}>
                <h4>Supports</h4>
                <ul className={css.footer_text}>
                    <li><Link to='/contact'>Feedback</Link></li>
                    <li><Link to='contact'>Contact us</Link></li>
                    <li><Link to='/contact'>Terms conditions</Link></li>
                </ul>
            </div>
           <ScrollUp/>
        </div>
        <div className={css.copy}>
        <h4>CopyRight by S@m@r@ 2022</h4>
    </div>
        </Fragment>
    )
}
export default Footer;