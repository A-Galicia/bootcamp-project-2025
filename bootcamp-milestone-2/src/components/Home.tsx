import React from 'react';
import style from './Home.module.css';

export default function Footer() {
  return (
    <div>
      <h1 className={style.pageTitle}>About Me!</h1>
      <div className={style.about}>
        <div className={style.aboutImage}>
          <a
            href='https://www.dvidshub.net/image/7100885/us-marines-and-sailors-perform-arctic-demolition-exercise'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='../public/EGA.png' alt='Eagle, Globe, and Anchor' />
          </a>
        </div>
        <div className={style.aboutText}>
          <p>
            Veteran of the United States Marine Corps. I planned, designed, and
            constructed multiple horizontal and vertical construction projects.
            Managed personnel and assets valued over a quarter million dollars.
            Currently, A full-time computer science student at California
            Polytechnic State University, San Luis Obispo.
          </p>
        </div>
      </div>

      <div className={style.about}>
        <div className={style.aboutImage}>
          <a
            href='https://www.openpowerlifting.org/u/alfredogalicia'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='../public/OpenPowerlifting.png'
              alt='Open Powerlifting logo'
            />
          </a>
        </div>
        <div className={style.aboutText}>
          <p>
            I love to go to the gym or just generally being outisde or doing
            something active. I&apos;m also a competitive powerlifter. Competing
            in the United States of America Powerlifting (USAPL) I&apos;ve won
            the 2023 South East Regionals, and the 2024 California state
            Championship.
          </p>
        </div>
      </div>
    </div>
  );
}
