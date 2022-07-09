import React from 'react';
import { Link } from 'react-router-dom';
import useFullSlider from '../../hooks/useFullSlider';
import slides from '../../data/slides.js';
import css from './Hero.module.css'

const Hero = () => {
    const { jump, activeSlide } = useFullSlider(slides, 3500);

    const renderSlides = () => {
        return slides.map(slide => {
            return <div key={slide.id} className={`slide ${activeSlide < slide.id ? "nextSlide" : "lastSlide"} ${activeSlide === slide.id && "activeSlide"} `}>
                <div className={css.hero_title}>
                    <h2>{slide.collect}</h2>
                    <h1>{slide.title}</h1>
                    <h3>{slide.sale}</h3>
                    <Link to="/catalog" className={css.link}> SHOP NOW</Link>
                </div>
                <div >
                    <img src={slide.image} alt={slide.title} />
                </div>
            </div>
        })
    }
    const setDotWidth = (index) => {
        if (activeSlide === index) return "w-8";
        if (activeSlide !== index) return "w-2"
    }
    return <section className={css.slider}>
        <div className={css.slide_content} > {renderSlides()} </div>
        <div className={css.btns}>
            <button onClick={() => jump(0)} className={`${setDotWidth(0)}${css.button}`}></button>
            <button onClick={() => jump(1)} className={`${setDotWidth(1)}${css.button}`}></button>
            <button onClick={() => jump(2)} className={`${setDotWidth(2)}${css.button}`}></button>
            <button onClick={() => jump(3)} className={`${setDotWidth(3)}${css.button}`}></button>
        </div>
    </section>;
};

export default Hero;