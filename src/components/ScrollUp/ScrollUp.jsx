import React from 'react';
import css from'./ScrollUp.module.css'
const ScrollUp = () => {

    const scrollupHandle = () => {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      };
  return <div onClick={scrollupHandle} className={css.scrollup}>
                <i className='fas fa-arrow-up'></i>
        </div>;
};

export default ScrollUp;