import {LogRegister} from "..";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { LogOut} from '../../redux/auth';
import css from './Profile.module.css'
import ProfileContent from "./ProfileContent";
const Profile = () => {
    const dispatch = useDispatch();
    const isTablet = useMediaQuery('(min-width:768px)');
    const {auth} = useSelector(state => state.auth);
    
  return <div className={css.container}>
            {
               auth.email === "" && auth.password === "" ? <LogRegister/> 
                     : (
                <div   className={css.content}  >
                    <div className={css.block} >
                        {isTablet && (<div>
                                            <img src='/assets/images/profile.jpg'  height="80px" width="80px" className="rounded-full mb-4" alt="profile picture"/>
                                            <h1 className={css.name}>S@m@r@ Abdik@rimov@</h1>
                                         </div>)
                        }
                        <button className={css.user}><i className="fas fa-user-circle text-3xl"></i> User Details</button>
                        <button className={css.user}><i className="fas fa-bookmark text-3xl"></i> Orders</button>
                        <button className={css.user}><i className="fas fa-bell text-3xl"></i> Notifications</button>
                        <button onClick={()=> dispatch(LogOut())} className={css.user}><i className="fas fa-sign-out-alt text-3xl"></i> Log out</button>
                    </div>
                    <ProfileContent/>
                    
                </div>
            )}
        </div>;
};

export default Profile;
