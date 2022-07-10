import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import logo from '../../assets/images/logo.svg'
import css from './Header.module.css'

const Header = () => {
    const isTablet = useMediaQuery('(max-width:900px)');

    const { cartProds } = useSelector(state => state.cartProds);
    const { likeListProds } = useSelector(state => state.likeListProds);

    return <section className={css.head_section}>
        <div className={css.container}>
            <Link to='/' className={css.logo}>
                <img src={logo} alt="logo" />
                <h1 className={css.logo_name}>Furniking</h1>
            </Link>
            <ul className={`${isTablet && "mobileIcons  md:w-1/2 m-auto"} ${css.header_list}`}>
                {isTablet && <li><Link to="/"><i className=" fas fa-home"></i></Link></li>}
                <li><Link to="/profile"><i className=" fas fa-user"></i></Link></li>
                <li><Link to="/likelist" className={css.head_link}><i className=" fas fa-heart"></i>
                    {likeListProds.length > 0 && <span className={css.likelist}>{likeListProds.length}</span>}
                </Link>
                </li>
                <li><Link to="/cart" className={css.head_link}><i className=" fas fa-shopping-bag"></i>
                    {cartProds.length > 0 && <span className={css.likelist}>{cartProds.length}</span>}
                </Link>
                </li>
            </ul>

            {/* {isTablet && (<i onClick={()=> setIshidden(!isHidden)} className={`fas fa-bars ${!isHidden && "fa-times"}`}></i>) } */}
        </div>
    </section>
};
export default Header;