import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt='netflix logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <img
        alt='user img'
        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        className='nav__user'
      />
    </nav>
  );
};

export default Nav;
