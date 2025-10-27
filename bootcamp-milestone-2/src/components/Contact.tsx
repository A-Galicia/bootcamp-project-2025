import React from 'react';
import style from './Contact.module.css';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <h1 className={style.pageTitle}>Contact</h1>
      <div className={style.aboutContact}>
        <Image
          src='/Gmail.png'
          alt='Gmail logo'
          width={500}
          height={500}
          className={style.aboutImg}
        />
        <p className={style.aboutGmail}>alfgalic@gmail.com</p>

        <a
          href='https://github.com/A-Galicia'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/LinkedIn.png'
            alt='LinkedIn logo'
            width={500}
            height={500}
            className={style.aboutImg}
          />
        </a>

        <a
          href='https://www.linkedin.com/in/alfredo-galicia2/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/GitHub.png'
            alt='GitHub logo'
            width={500}
            height={500}
            className={style.aboutImg}
          />
        </a>
      </div>
    </div>
  );
}
