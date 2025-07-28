import React from 'react';
import { GithubIcon } from './icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/NiceTry3675" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
        </div>
        <p>&copy; 2025 Junhyun Lim. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;