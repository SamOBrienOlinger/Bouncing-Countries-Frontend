import React from 'react';
import Search from '../components/Search';
import FourSpheres from '../assets/four-corners-globe.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

const SearchCountry = () => {
  return (
    <>
      <div>
        <header>
          <a href="https://bounceinsights.com/">
            <div id="four-spheres">
              <img src={FourSpheres} alt="four spheres" />
            </div>
          </a>
          <div className="search-container">
            <div id="search-intro">
              <h1> Gain Global Insights </h1>
            </div>

            <div className={styles['elementor-button-wrapper']}>
              <Link
                to="/search"
                className={`${styles['elementor-button']} ${styles['elementor-button-link']}`}
              >
                <span className={styles['elementor-button-content-wrapper']}>
                  <span className={styles['elementor-button-text']}>
                    <Search />
                  </span>
                </span>
              </Link>
            </div>

            <div className={`${styles['elementor-button-wrapper']} ${styles['elementor-button-wrapper-second']}`}>
              <Link
                to="/"
                className={`${styles['elementor-button']} ${styles['elementor-button-link']}`}
              >
                <span className={styles['elementor-button-content-wrapper']}>
                  <span className={styles['elementor-button-text']}>
                    Bounce Back
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className={`${styles['elementor-button-wrapper']} ${styles['elementor-button-wrapper-third']}`}>
              <Link
                to="/search"
                className={`${styles['elementor-button']} ${styles['elementor-button-link']}`}
              >
                <span className={styles['elementor-button-content-wrapper']}>
                  <span className={styles['elementor-button-text']}>
                    Bounce Back
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default SearchCountry;
