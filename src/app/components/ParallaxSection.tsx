"use client";

import React from 'react';
import ParallaxBlock from './ParallaxBlock';
import styles from './ParallaxSection.module.css';

const ParallaxSection: React.FC = () => {
  return (
    <section className={styles.parallaxSection}>
      <ParallaxBlock label="Projects" />
      <ParallaxBlock label="About Me" />
      <ParallaxBlock label="Contact Me" />
    </section>
  );
};

export default ParallaxSection;
