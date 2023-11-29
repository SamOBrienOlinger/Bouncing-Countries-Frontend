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

          <h1>Search Country Page</h1>

          <div id="search-intro">
            <p> Go ahead, Bounce any country off us for global insights! </p>
            <p> Search below </p>
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

          <div className={styles['elementor-button-wrapper']}>
            <Link
              to="/"
              className={`${styles['elementor-button']} ${styles['elementor-button-link']}`}
            >
              <span className={styles['elementor-button-content-wrapper']}>
                <span className={styles['elementor-button-text']}>
                  Click Here to Return to the Homepage
                </span>
              </span>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default SearchCountry;
