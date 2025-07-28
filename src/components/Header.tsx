import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
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
        <RouterLink to="/" className="navbar-brand">
          LIM JUNHYUN
        </RouterLink>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
          <ScrollLink to="home" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            소개
          </ScrollLink>
          
          
          <ScrollLink to="about" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            자기소개
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            기술
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            프로젝트
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} activeClass="active" spy={true} onClick={toggleMenu}>
            연락처
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
