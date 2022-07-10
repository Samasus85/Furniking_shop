import React, { useState } from 'react';
import {CartItem} from '..';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/cart.js';
import css from './Cart.module.css'

const Cart = () => {
    const dispatch = useDispatch();
    
    const {cartProds} = useSelector(state => state.cartProds);

    let totalPrice = cartProds.reduce((total, prod)=>total+( prod.quantity * prod.price) , 0);    
    const tax = 11;
    const [shipping, setShipping] = useState(0);

    const addProdToCart =(pro)=>{
        dispatch(addToCart(pro));
    }
    const removeProdToCart =(pro)=>{
        dispatch(removeFromCart(pro));
    }
  return <div className={css.container}>
            <h1 className={css.title}>YOUR SHOPPING CART</h1>
            <hr/>
            {   cartProds.length === 0 ? 
            <div className={css.empty}            >
                                <h1>YOUR CART IS STILL EMPTY <i className='fas fa-frown'></i> </h1>
                                <p>Looks like you haven't seen our catalog</p>
                                <Link to="/catalog" className={css.link}>BACK TO CATALOG</Link>
                            </div>
                            :(
            <div className={css.card_block}>
                <div className={css.card_content}  >
                {
                  cartProds.map(prod =>{
                     return <CartItem removeProdToCart={removeProdToCart} addProdToCart={addProdToCart} key={prod.id} id={prod.id} quantity={prod.quantity} title={prod.title} price={prod.price} image={prod.image}/>
                  })
                }
                </div>
                <div className={css.shipping} >
                        <h1>SHIPPING</h1>
                        <div className={css.check}>
                            <input onChange={()=>setShipping(0)} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label htmlFor="flexRadioDefault1"> Ground shipping(Free) : 2 - 5  days </label>
                        </div>
                        <div className={css.check}>
                            <input onChange={()=>setShipping(50)} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label  htmlFor="flexRadioDefault2"> Expedite shipping($50): 2-3  days </label>
                        </div>
                        <div className={css.check}>
                        <input onChange={()=>setShipping(150)} type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                            <label  htmlFor="flexRadioDefault3">  Overnight shipping($150): Next day </label>
                        </div>
                        <input className={css.input} type="text"  placeholder='Country'/>
                        <input className={css.input} type="text" placeholder='State/County'/>
                        <input className={css.input} type="text" placeholder='City'/>
                        <input className={css.input} type="text" placeholder='Postcode/ZIP'/>
                        <button type="text" className={css.update} >UPDATE</button>
                        <div className="mt-8 py-4">
                            <h1 >Tax : <span className="text-gray-500 ml-12">${tax}</span> </h1>
                            <h1 >Total : <span className="text-gray-500 ml-8">${totalPrice + tax + shipping}</span> </h1>
                            <button type="text" className={css.update} > CHECKOUT 
                                    <i className='ml-4 animate-pulse fas fa-angle-right text-gray-100'></i>
                                    <i className='animate-pulse fas fa-angle-right text-gray-100'></i>
                                    <i className='animate-pulse fas fa-angle-right text-gray-100'></i>
                             </button>
                        </div>
                </div>
            </div> )}
  </div>;
};
export default Cart;