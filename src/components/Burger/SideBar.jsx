import { NavLink } from 'react-router-dom'
import css from './Burger.module.css';

const SideBar = () => {
    return (
        <div className={css.sideBar}>
            <ul className={css.items}>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>All</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>New Arrivals</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Hot Sale</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Furniture</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Amrature</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Tabble</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Chair</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Sofa</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Mirrors</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Stools</NavLink></button>
                <button className={css.item}><NavLink activeclassname={css.activeLink} to='/catalog'>Benches</NavLink></button>
            </ul>
        </div>
    )
}
export default SideBar;