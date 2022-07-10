import Burger from "../Burger/Burger";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";
import css from './Content.module.css'
import SideBar from "../Burger/SideBar";
const Content = ()=>{

    return <div className={css.container}>
        <div className={css.burger}><Burger/></div>
        <div className={css.menu}><Menu/></div>
        <div className={css.sideBar}><SideBar/></div>
        <div className={css.content}><Hero/></div>
        
    </div>
}
export default Content;