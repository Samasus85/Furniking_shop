import css from './Blog.module.css'
import tagImg from '../../assets/images/tag/tag.svg'
import {Link} from 'react-router-dom'


const Blog = () => {
    return (
        <div>
                <h2 className={css.title}>Our Latest Articles</h2>
            <div className={css.blog}>
                <div className={css.post1}>
                    <div className={css.tag_block}>
                        <div className={css.tag}>
                            <img src={tagImg} alt="tag" />
                            <h5>FURNITURE</h5>
                        </div>
                        <p>23 September 2022</p>
                    </div>
                    <h4>Begineer guide buying minimal sofa</h4>
                    <div className={css.read}>
                        
                        <Link to="/catalog"> Read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className={css.post2}>
                <div className={css.tag_block}>
                        <div className={css.tag}>
                            <img src={tagImg} alt="tag" />
                            <h5>TABLE</h5>
                        </div>
                        <p>23 September 2022</p>
                    </div>
                    <h4>Buying best minimal computer table</h4>
                    <div className={css.read}>
                        <Link to="/catalog"> Read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className={css.post3}>
                <div className={css.tag_block}>
                        <div className={css.tag}>
                            <img src={tagImg} alt="tag" />
                            <h5>BENCH</h5>
                        </div>
                        <p>23 September 2022</p>
                    </div>
                    <h4>How to choose best modern bench</h4>
                    <div className={css.read}>                        
                        <Link to="/catalog"> Read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className={css.post4}>
                <div className={css.tag_block}>
                        <div className={css.tag}>
                            <img src={tagImg} alt="tag" />
                            <h5>CHAIR</h5>
                        </div>
                        <p>23 September 2022</p>
                    </div>
                    <h4>Best Summer Outfit Style in this Country</h4>
                    <div className={css.read}>                        
                        <Link to="/catalog"> Read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;