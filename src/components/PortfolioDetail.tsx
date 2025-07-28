import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './PortfolioDetail.css';

const PortfolioDetail = () => {
  return (
    <div className="portfolio-detail-container">
      <Link to="/" className="back-button">← 뒤로 가기</Link>
      <Fade direction="up" triggerOnce>
        <h1 className="portfolio-title">Context-Aware AI Novel Translator (냥번역)</h1>
        <p className="portfolio-subtitle">Google Gemini API를 활용한 문맥 인식 AI 소설 번역기</p>

        <section className="detail-section">
          <h2>🚀 프로젝트 개요</h2>
          <img src={`${process.env.PUBLIC_URL}/images/trans_sample.png`} alt="Translation Sample" className="feature-image" />
          <p>
            이 프로젝트는 단순한 텍스트 번역을 넘어, 소설의 <strong>문체, 등장인물, 특정 용어</strong> 등을 깊이 분석하고 일관성을 유지하며 영어 소설을 한국어로 번역하는 시스템입니다. Google의 강력한 Gemini API와 세련된 웹 인터페이스를 통해 높은 품질의 번역 경험을 제공하는 것을 목표로 합니다.
          </p>
        </section>

        <section className="detail-section deep-dive">
          <h2>🔬 Catrans Deep Dive</h2>
          <div className="deep-dive-part">
            <h3>Part 1: 문제 정의와 솔루션</h3>
            <p><strong>Problem:</strong> "왜 이 프로젝트를 시작했는가?" — LLM 번역은 강력한 성능에도 불구하고, 소설과 같은 긴 글에서 문맥을 기억하지 못해 일관성이 깨지는 치명적인 약점을 가지고 있었습니다. 1장에서 나온 주인공의 이름을 10장에서 잊어버리는 식의 문제가 대표적입니다. 이를 개선한 상용 서비스가 없는 것을 보고 프로젝트를 시작하게 되었습니다.</p>
            <p><strong>Solution:</strong> "그래서 무엇을 만들었는가?" — Catrans는 '점진적 문맥 빌딩(Progressive Context Building)'이라는 핵심 아이디어로 이 문제를 해결합니다. 번역할 텍스트를 작은 단위로 나누어 처리하며, 각 단계에서 AI가 스스로 문맥(용어, 캐릭터 말투)을 학습하고, 이를 다음 번역에 즉시 반영합니다. 이를 통해 인간 번역가처럼 점차 작품에 익숙해지는 'Stateful AI' 워크플로우를 구현했습니다.</p>
          </div>

          <div className="deep-dive-part">
            <h3>Part 2: 기술적 도전과 성장 (Stateful AI & 보안)</h3>
            <p><strong>Challenge 1: Stateful AI</strong> — LLM은 본질적으로 '무상태(Stateless)'입니다. 이 문제를 해결하기 위해, 번역 과정을 총괄하는 '동적 컨텍스트 빌더'를 설계했습니다. 이 빌더는 ①세그먼트 분석 → ②문맥 추출 및 업데이트 → ③프롬프트 재조립의 순환 구조를 통해 AI에게 '기억력'을 부여하여, 번역 내내 일관된 결과물을 만들어냅니다.</p>
            <p><strong>Challenge 2: 사용자 신뢰 확보</strong> — 초기 버전에서는 사용자가 직접 자신의 Gemini API 키를 입력해야 했습니다. 이는 보안상 우려가 크다는 피드백을 받았고, 이를 해결하기 위해 OpenRouter를 통해 사용자가 자신의 키를 쉽게 관리할 수 있도록 했습니다. 이때를 교훈으로 삼아 보안에 더 신경쓰고 사용자가 신뢰할수 있는 Clerk을 도입하기로 했습니다. 이 과정을 통해 단순 기능 개발을 넘어, 사용자의 신뢰를 얻는 것의 중요성을 배우고 '사용자 중심 개선'을 실천할 수 있었습니다.</p>
          </div>

          <div className="deep-dive-part">
            <h3>Part 3: 프롬프트 엔지니어링</h3>
            <p>번역 품질은 프롬프트에 달려있습니다. 저희는 다층적 프롬프트 구조를 설계하여 번역의 '결'을 제어합니다.</p>
            <ul>
              <li><strong>기본 레이어:</strong> AI에게 '전문 소설 번역가'라는 역할을 부여합니다.</li>
              <li><strong>스타일 레이어:</strong> 작품 초반에 분석된 서사 스타일(문체, 톤앤매너)을 주입합니다.</li>
              <li><strong>컨텍스트 레이어:</strong> 실시간으로 누적되는 용어집과 캐릭터별 말투 정보를 동적으로 주입하여 일관성을 극대화합니다.</li>
            </ul>
            <p>이러한 접근을 통해 "구어체로 번역해줘" 와 같은 미묘한 뉘앙스까지 표현할 수 있었습니다.</p>
          </div>
        </section>

        <section className="detail-section architecture-section">
          <h2>🏛️ 서비스 아키텍처</h2>
          <p>
            Catrans는 효율적인 개발과 안정적인 운영을 위해 역할이 명확히 분리된 컴포넌트들로 구성되어 있습니다. 
            사용자 인터페이스, API 서버, 핵심 번역 엔진, 데이터베이스가 유기적으로 상호작용하며, 
            실시간 공지는 SSE를, 번역 진행률은 Polling 방식을 통해 사용자에게 전달됩니다.
          </p>
          <img 
            src={`${process.env.PUBLIC_URL}/images/mermaid-diagram.png`} 
            alt="서비스 아키텍처 다이어그램" 
            className="architecture-diagram-image" 
          />
        </section>

        <section className="detail-section">
          <h2>✨ 주요 기능</h2>
          <ul>
            <li><strong>🌐 세련된 웹 UI</strong>: Next.js와 Material-UI(MUI)를 사용하여 직관적이고 아름다운 다크 모드 인터페이스를 제공합니다.</li>
            <li><strong>✍️ AI 기반 스타일 분석</strong>: 소설의 첫 부분을 AI가 분석하여 주인공의 이름과 핵심 서사 스타일을 자동으로 정의합니다.</li>
            <li><strong>🎨 사용자 제어 및 수정</strong>: AI가 분석한 주인공 이름과 서사 스타일을 번역 시작 전에 사용자가 직접 확인하고 자유롭게 수정할 수 있습니다.</li>
            <li><strong>📚 동적 문맥 관리</strong>: 번역 과정에서 중요한 용어(Glossary)와 등장인물의 말투(Character Style)를 동적으로 구축하고 업데이트하여 일관성을 유지합니다.</li>
            <li><strong>🤖 번역 모델 선택</strong>: Flash, Pro 등 번역에 사용할 Gemini 모델을 UI에서 직접 선택할 수 있습니다.</li>
            <li><strong>📊 사용량 통계 수집</strong>: 서비스 개선을 위해 번역 소요 시간, 텍스트 길이, 사용 모델 등 익명의 사용 통계를 수집합니다.</li>
            <li><strong>📢 실시간 공지 기능</strong>: 서버에서 모든 클라이언트에게 실시간으로 중요 공지를 전송할 수 있습니다. (SSE 사용)</li>
            <li><strong>🔍 실시간 진행률 확인</strong>: 번역 작업의 진행 상황을 실시간으로 웹 화면에서 확인할 수 있습니다.</li>
            <li><strong>📄 다양한 파일 형식 지원</strong>: TXT, DOCX, EPUB, PDF 등 주요 문서 파일 형식을 지원합니다.</li>
            <li><strong>💬 커뮤니티 게시판</strong>: 사용자들이 공지사항, 건의사항, Q&A, 자유게시판을 통해 소통할 수 있는 커뮤니티 기능을 제공합니다.</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>💻 기술 스택</h2>
          <ul>
            <li><strong>Backend</strong>: Python, FastAPI, SQLAlchemy</li>
            <li><strong>Frontend</strong>: Next.js, TypeScript, React, Material-UI (MUI)</li>
            <li><strong>AI Model</strong>: Google Gemini (Flash, Pro)</li>
            <li><strong>Database</strong>: PostgreSQL (Production), SQLite (Local)</li>
            <li><strong>Deployment</strong>: Docker, Vercel (Frontend), Railway (Backend)</li>
          </ul>
        </section>
        <section className="detail-section">
          <h2>⚙️ 핵심 워크플로우</h2>
          <img src={`${process.env.PUBLIC_URL}/images/site_sample.png`} alt="Core Workflow" className="feature-image" />
          <ol>
            <li><strong>업로드 및 분석</strong>: 사용자가 파일을 업로드하면 AI가 초기 텍스트를 분석하여 주인공 이름과 핵심 서사 스타일을 결정합니다.</li>
            <li><strong>사용자 확인</strong>: 분석 결과를 사용자가 확인하고 수정할 수 있습니다.</li>
            <li><strong>작업 생성</strong>: 사용자가 번역을 시작하면 백엔드에서 TranslationJob을 생성하고 백그라운드 작업을 시작합니다.</li>
            <li><strong>번역 루프 (세그먼트별)</strong>: 핵심 엔진이 동적 문맥을 구축하고 Gemini API에 프롬프트를 전송하여 번역을 수행합니다.</li>
            <li><strong>완료</strong>: 작업이 완료되면 사용자는 번역된 파일을 다운로드할 수 있습니다.</li>
          </ol>
        </section>

        <section className="detail-section">
          <h2>📚 추가 자료</h2>
          <ul>
            <li><a href="https://velog.io/@nicetry/Stateful%ED%95%9C-LLM-%EB%B2%88%EC%97%AD-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EA%B0%9C%EB%B0%9C%EA%B8%B0" target="_blank" rel="noopener noreferrer">베타 서비스 런칭 개발 블로그</a></li>
            <li><a href="https://www.youtube.com/watch?v=jhs0KUzCY7M" target="_blank" rel="noopener noreferrer">베타 런칭 전 로직 소개 영상</a></li>
          </ul>
        </section>
      </Fade>
    </div>
  );
};

export default PortfolioDetail;
