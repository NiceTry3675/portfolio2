import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <Link to="home" smooth={true} duration={500} className="navbar-brand">
          LIM JUNHYUN
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
          <Link to="home" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            소개
          </Link>
          <Link to="about" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            자기소개
          </Link>
          <Link to="skills" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            기술
          </Link>
          <Link to="projects" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            프로젝트
          </Link>
          <Link to="contact" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            연락처
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
