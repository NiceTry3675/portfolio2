import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <Fade direction="down" triggerOnce>
          <span className="tagline">안녕하세요! 제 포트폴리오에 오신 것을 환영합니다.</span>
          <h1>{`저는 풀스택 개발자를 지향하는 임준현입니다.`}</h1>
          <p>디자인부터 백엔드까지, 프로그램의 모든 영역을 아우르는 개발자가 되기 위해 꾸준히 배우고 성장하고 있습니다.</p>
          <a href="https://github.com/NiceTry3675" target="_blank" rel="noopener noreferrer" className="connect-button">GitHub에서 더 알아보기</a>
        </Fade>
      </div>
    </section>
  );
};

export default Home;