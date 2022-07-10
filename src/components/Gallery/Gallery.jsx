import React, { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import css from './Gallery.module.css'

const Gallery = ({imgs}) => {
    const isPhone = useMediaQuery("(max-width:768px)");
    
    const [mainImg, setMainImg] = useState(imgs[0]);

  return (
    <div className={css.container}>
            <div className={css.img_block_1}>
                {imgs.map((images,i) => <img key={i} onClick={()=> setMainImg(imgs[i])} className="hover:shadow-xl transition"  src={images} alt="imagess  of products" height={`${isPhone ? "70px ":" 100px" }`} width={`${isPhone ? "70px ":" 100px" }`}/> )}
            </div>
            <div className={css.img_block_2} >
                <img className="w-full h-full" height="300px" src={mainImg} alt="imagess of products"/>
            </div>
    </div>
  );
};
export default Gallery;