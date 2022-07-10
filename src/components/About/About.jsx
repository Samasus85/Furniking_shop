import React from 'react';
import css from './About.module.css'
import imgAbout from '../../assets/images/FurnitureBlue.svg'

const About = () => {
  return (
    <section>

      <div className={css.container}>

        <div className={css.about}>

          <h3 className={css.about_title}>Leading e-commerce platform in Russia</h3>

          <h4 >Furniking is a leading market player and one of the most valuable Russian Internet companies according to Forbes. We provide our customers with the widest selection of products in 11 time zones in Russia.
          </h4>
        </div>
        <div className={css.img}>
          <img src={imgAbout} alt="imgAbout" />
        </div>
      </div>
    </section>
  );
};
export default About;