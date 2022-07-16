import Left from '../../assets/images/banner/banner-left.svg';
import Rtop from '../../assets/images/banner/banner-r-top.svg';
import Rbottom from '../../assets/images/banner/banner-r-bottom.svg';
import { Link } from 'react-router-dom';
import css from './Offer.module.css'

const Offer = () => {
    return (
        <div className={css.container}>
            <div className={css.banner_left}>
                <div className={css.read}>

                    <Link to='/catalog'>Read more <i className="fas fa-arrow-right"></i></Link>
                </div>
                <img src={Left} alt="banner-left" />
            </div>
            <div className={css.banner_right}>
                <div>
                    <div className={css.read1}>

                        <Link to='/catalog'>Read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <img src={Rtop} alt="banner-r-top" />

                </div>
                <div>
                    <div className={css.read2}>

                        <Link to='/catalog'>Read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <img src={Rbottom} alt="banner-r-bottom" />

                </div>
            </div>
        </div>
    )
}
export default Offer;