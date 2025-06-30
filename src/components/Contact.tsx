import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { EnvelopeIcon, PhoneIcon, MarkerIcon } from './icons';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <Fade direction="up" triggerOnce>
        <div className="contact-content">
          <h2>연락처</h2>
          <p>언제든지 편하게 연락주세요! 새로운 프로젝트, 창의적인 아이디어, 또는 함께할 좋은 기회에 대해 이야기 나누는 것을 환영합니다.</p>
          <div className="contact-info">
            <div className="contact-item">
              <EnvelopeIcon />
              <a href="mailto:tomtom35177@hs.ac.kr">tomtom35177@hs.ac.kr</a>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <span>+82 10-1234-5678</span>
            </div>
            <div className="contact-item">
              <MarkerIcon />
              <span>대한민국, 서울</span>
            </div>
            <div className="contact-item">
              <a href="https://github.com/NiceTry3675" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;