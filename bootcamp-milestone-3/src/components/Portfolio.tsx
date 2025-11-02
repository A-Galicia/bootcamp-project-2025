import React from 'react';
import style from './Portfolio.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className={style.project}>
        <p>Strength Projector</p>
        <a
          href='https://strength-projector.pages.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/StrengthProjector.png'
            alt='Home page of my Strength Projector web application'
            width={500}
            height={500}
            className={style.img}
          />
        </a>
      </div>

      <div className={style.project}>
        <p>Asteroids</p>
        <a
          href='https://github.com/A-Galicia/Astroids-Game'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/AsteroidsScreenShot.png'
            alt='In-game image of my rendition of the Asteroids arcade game'
            width={500}
            height={500}
            className={style.img}
          />
        </a>
      </div>

      <div className={style.project}>
        <p>Github</p>
        <a
          href='https://github.com/A-Galicia'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/GithubScrn.png'
            alt='Home page of my GitHub profile'
            width={500}
            height={500}
            className={style.img}
          />
        </a>
      </div>
    </div>
  );
}
