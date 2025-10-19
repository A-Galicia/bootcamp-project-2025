import React from 'react';
import style from './Portfolio.module.css';

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
          <img
            src='../public/StrengthProjector.png'
            alt='Home page of my Strength Projector web application'
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
          <img
            src='../public/AsteroidsScreenShot.png'
            alt='In-game image of my rendition of the Asteroids arcade game'
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
          <img
            src='public/GithubScrn.png'
            alt='Home page of my GitHub profile'
          />
        </a>
      </div>
    </div>
  );
}
