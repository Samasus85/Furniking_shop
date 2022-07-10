import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.js';
// import { addToWishlist } from '../../redux/wishlist.js';
import useHomeAnimate from '../../hooks/useIntersectAnimate';
import './Card.css'
import { addTolikeList } from '../../redux/likeList.js';

const Card = ({ id, category, title, price, image, oldPrice }) => {
      const cardRef = useRef(null);
      const cardIsvisible = useHomeAnimate({
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
      }, cardRef);
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const addProdToCart = () => {
            dispatch(addToCart({ id, category, title, price, image, oldPrice }));
      }
      const wishlistHandle = () => {
            dispatch(addTolikeList({ id, category, title, price, image, oldPrice }))
      }

      return <div ref={cardRef} className={`card_block card ${cardIsvisible && "card--animated"}`}>
            <div className="content" >
                  <img src={image} alt={title} width="250px" height="500px" className='' />
                  <div className="btns button-block ">
                        <button onClick={addProdToCart}
                              className=" button "
                        ><i className=" fas fa-shopping-bag"></i></button>
                        <button onClick={() => navigate(`/catalog/${id}`)} className="button"><i className=" fas fa-eye"></i></button>
                        <button onClick={wishlistHandle} className="button"><i className=" fas fa-heart"></i></button>
                  </div>
                  <div><h3>{category}</h3></div>
                  <div className="title">
                        <h2>{title}</h2>
                        <div className="price">

                              <p>${price}</p>
                              <del>${oldPrice}</del>
                        </div>
                  </div>
            </div>

      </div>
}
export default Card;