import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import css from './Menu.module.css'

const Menu = () => {
  const isTablet = useMediaQuery('(max-width:900px)');
  const [isHidden, setIshidden] = useState(true);
  return <div className={css.container} >
    <ul className={`${isTablet && "mobileNav"} ${isHidden && isTablet && "hiddenNav"} ${css.menu_list} `}>
      <li onClick={() => setIshidden(true)} className={css.link}><Link to="/">HOME</Link></li>
      <li onClick={() => setIshidden(true)} className={css.link}><Link to="/catalog">CATALOG</Link></li>
      <li onClick={() => setIshidden(true)} className={css.link}><Link to="/about">ABOUT</Link></li>
      <li onClick={() => setIshidden(true)} className={css.link}><Link to="/blog">BLOG</Link></li>
      <li onClick={() => setIshidden(true)} className={css.link}><Link to="contact">CONTACT US</Link></li>
    </ul>
    <div className={css.nav}>

      {isTablet && (<i onClick={() => setIshidden(!isHidden)} className={`fas fa-bars ${!isHidden && "fa-times"}`}></i>)}
    </div>
  </div>;
};
export default Menu;