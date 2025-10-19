import React from 'react';
import style from './Contact.module.css';

export default function Contact() {
  return (
    <div>
      <h1 className={style.pageTitle}>Contact</h1>
      <div className={style.aboutContact}>
        <img
          className={style.aboutImg}
          src='../public/Gmail.png'
          alt='Gmail logo'
        />
        <p className='about-gmail'>alfgalic@gmail.com</p>

        <a
          href='https://github.com/A-Galicia'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className={style.aboutImg}
            src='../public/LinkedIn.png'
            alt='LinkedIn logo'
          />
        </a>

        <a
          href='https://www.linkedin.com/in/alfredo-galicia2/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className={style.aboutImg}
            src='../public/GitHub.png'
            alt='GitHub logo'
          />
        </a>
      </div>
    </div>
  );
}
