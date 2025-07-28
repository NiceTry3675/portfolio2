import React from 'react';
import { Link } from 'react-router-dom';
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
        <Fade direction="up" triggerOnce>
          <div className="main-project-home-section">
            <h2>대표 포트폴리오</h2>
            <h3>LLM 번역 워크플로우 최적화</h3>
            <p>AI 기반 번역 프로세스 개선을 통해 번역 품질과 효율성을 극대화한 프로젝트입니다. 자세한 내용을 보려면 아래 버튼을 클릭하세요.</p>
            <Link to="/portfolio-detail" className="btn-main-portfolio">포트폴리오 자세히 보기</Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Home;