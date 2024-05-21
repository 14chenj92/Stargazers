import React, { useEffect } from 'react';
import '../styles/Background.css';

const StarsBackground = () => {
  useEffect(() => {
    const numStars = 100;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      stars.push(star);
    }

    const background = document.getElementById('starry-background');
    stars.forEach(star => background.appendChild(star));
  }, []);

  return <div id="starry-background"></div>;
};

export default StarsBackground;