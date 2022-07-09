// import { NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import css from './Burger.module.css';

const Burger = () => {
    return (
        <div className={css.burger}>
            <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13H15" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 6H21" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 20H9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
            <div className={css.all}>ALL COLLECTIONS</div>
        </div>
        
    )
}
export default Burger;