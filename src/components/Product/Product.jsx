import React from 'react';
import { Gallery, Accordion, Card } from '..';
import { DATA } from '../../data/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';
// import {addToWishlist } from '../../redux/wishlist';
import css from './Product.module.css'
import { useParams, Link } from 'react-router-dom';
import { addTolikeList } from '../../redux/likeList';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const prod = DATA.filter(product => product.id == id)[0];
  const mayLikeProds = DATA.filter(pro => pro.category === prod.category)
    .slice(0, 4);


  window.scroll({ top: 0 });
  return (
    <section className={css.container} >
      <div className={css.content}>
        <div className={css.product_menu}>
          <p className={css.title}><Link to='/catalog'>Catalog</Link></p>
          <i className=' fas fa-angle-right text-sm'></i>
          <p>{prod.category}</p>
        </div>
        <Gallery imgs={prod.images} />
        <div className={css.prod_info}>
          <h1 >{prod.title}</h1>
          <div className={css.prod_price}>
            <p>${prod.price}</p>
            <del>{prod.oldPrice}</del>
          </div>
          <p className={css.prod_description}>{prod.description}</p>
          <div className={css.prod_icons}>
            <p onClick={() => dispatch(addTolikeList(prod))} ><i className="fas fa-heart "></i> ADD TO WISHLIST</p>
            <button onClick={() => dispatch(addToCart(prod))} >ADD TO CART</button>
          </div>
          <Accordion content={"Additional inforamtion and details about the product !"} />
        </div>
        <div className={css.like_prod}>
          <h1 > You May Also Like</h1>
          <div className={css.like_card}>
            {mayLikeProds.map(product => <Card key={product.id} id={product.id} title={product.title} price={product.price} image={product.thumbnail} oldPrice={product.oldPrice} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Product;
