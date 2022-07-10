import { DATA } from '../../data/data';
import React from 'react';
import Card from '../Card/Card';
import css from './Trending.module.css'

const Trending = () => {

  const bestSels = DATA.slice(2, 10)
  return <div className={css.content}>
            <h1 className={css.title}>TRENDING</h1>
            <div className={css.card}>
              {bestSels.map(prod => <Card key={prod.id} id={prod.id} title={prod.title} price={prod.price} image={prod.thumbnail} oldPrice={prod.oldPrice} /> )}
            </div>
  </div>;
};
export default Trending;