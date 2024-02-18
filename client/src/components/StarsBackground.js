import React, { useEffect } from 'react';
import '../styles/Background.css';
import starIcon from '../images/star-background.svg'; 

const StarsBackground = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars-container');

    function createStar() {
      const star = document.createElement('img');
      star.src = starIcon;
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 5 + 1}s`;

      starsContainer.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    }

    function createStars() {
      setInterval(createStar, 3000);
    }

    window.onload = createStars;

    return () => {
      window.onload = null;
    };
  }, []);

  return <div className="stars-container"></div>;
};

export default StarsBackground;