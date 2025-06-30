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
          <p>실질적인 가치를 함께 만들어나갈 기회를 기다립니다. 흥미로운 아이디어가 있다면 주저 말고 연락 주세요.</p>
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