import React from 'react';
import { useDispatch } from 'react-redux';
import {removeAll} from '../../redux/cart'
import css from './CartItem.module.css'

const CartItem = ({id, title, image, price, quantity, addProdToCart, removeProdToCart}) => {
    const dispatch = useDispatch();
    
    const addHandle = ()=> addProdToCart({id, title, image, price, quantity});
    const delHandle = ()=> removeProdToCart({id, title, image, price, quantity});

  return (
        <div className={css.cartItem}>
            <div className={css.cartItem_img_block}>
                <img  src={image} alt="" height="50px" width="50px" />
                <p >{title}</p>
            </div>
            <div className={css.cartItem_price}>
                <span className={css.quantity}>{quantity}</span>
                <div className={css.cartItem_price_btns}>
                    <button onClick={addHandle}>+</button>
                    <button onClick={delHandle} >-</button>
                </div>
            </div>
            <p className={css.price_title} >${price * quantity}</p>
            {/* <i class="fa-solid fa-circle-trash"></i> */}
            <i onClick={()=> dispatch(removeAll({id, title, image, price, quantity}))} className='fas fa-times '></i>
        </div>
  );
};
export default CartItem;