/* components/ParallaxBlock.tsx */
"use client";

import React, { useRef, useEffect } from 'react';
import styles from './ParallaxBlock.module.css';

interface ParallaxBlockProps {
  radiusVal?: number;
  label: string;
}

const ParallaxBlock: React.FC<ParallaxBlockProps> = ({ radiusVal = -10, label }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const baseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const base = baseRef.current;
    if (!container || !base) return;

    const handleMouseMove = (event: MouseEvent) => {
      const cx = Math.ceil(window.innerWidth / 2);
      const cy = Math.ceil(window.innerHeight / 2);
      const dx = event.pageX - cx;
      const dy = event.pageY - cy;
      const tiltx = dy / cy;
      const tilty = -dx / cx;
      const radius = Math.sqrt(tiltx * tiltx + tilty * tilty);
      const degree = radius * radiusVal; 
      base.style.transform = `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [radiusVal]);

  // Scroll to the section corresponding to the label.
  const handleClick = () => {
    // Convert label to a target id: lowercase and replace spaces with dashes.
    const targetId = label.toLowerCase().replace(/\s+/g, '-');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={styles.parallaxContainer}
      onClick={handleClick}
    >
      <div ref={baseRef} className={styles.parallaxBase}>
        {/* The layers are rendered in reverse order to match the z-index stacking */}
        <div className={styles.layer3}>{label}</div>
        <div className={styles.layer2}>{label}</div>
        <div className={styles.layer1}>{label}</div>
      </div>
    </div>
  );
};

export default ParallaxBlock;
