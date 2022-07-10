import React from 'react';
import css from './Contact.module.css'
import {Link} from 'react-router-dom'
const Contact = () => {
    return (
          <section className={css.container}>
            <div className={css.address}>
              <h1 className={css.title}>FEEL FREE TO CONTACT US</h1>
              <h2 className={css.title_text}>ADDRESS:<p >Russian Federation ,Moscow </p></h2>
              <h2 >EMAIL:<Link to='/' > contact@furniking.com</Link></h2>
              <h2>PHONE<p >+79999999999</p></h2>
            </div>
            <form className={css.feedback}>
              <p >You can drop your comments, feedback, or any questions at anytime!</p>
              <input placeholder='Name' type="text" id="name" name="name"  />
              <input placeholder='Email' type="email" id="email" name="email" />
              <textarea id="message" placeholder='Your message' name="message" ></textarea>
              <button  >ADD</button>
            </form>
          </section>
    )
}
export default Contact;