import React from 'react';
import { Link } from 'react-router-dom';
import css from './Notfound.module.css'
const Notfound = () => {
  return (
    <div className={css.container} >
        <div >
          <div className={css.block}>
        
            <h2>That’s a 404</h2>
            <h3 >Page not found</h3>
    
            <p >The page you’re looking for doesn’t exist.</p>
    
            <Link to="/"  className={css.go}
            >Go home</Link>
          </div>
        </div>
  </div>
  )
};

export default Notfound;
