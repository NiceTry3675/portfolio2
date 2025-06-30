import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <Fade direction="down" triggerOnce>
          <span className="tagline">안녕하세요, 풀스택 개발자 임준현입니다.</span>
          <h1>적절한 기술로 실질적인 편의를 만듭니다.</h1>
          <p>사용자가 마주하는 화면부터 데이터를 처리하는 서버까지, 전체 시스템을 이해하고 매끄러운 사용자 경험을 제공하는 것을 목표로 합니다.</p>
          <a href="https://github.com/NiceTry3675" target="_blank" rel="noopener noreferrer" className="connect-button">GitHub에서 더 알아보기</a>
        </Fade>
      </div>
    </section>
  );
};

export default Home;