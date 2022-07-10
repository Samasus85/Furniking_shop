import React from 'react';
import {   Blog, Testimon,Content,Feature, Offer, Trending, OfferBanner } from '../components';

const Home = () => {
  return <div className='home'>
      <Content/>
      <Feature/>
      <OfferBanner/>
      <Trending/>
      <Testimon/>
      <Offer/>
      <Blog/>
  </div>;
};

export default Home;
