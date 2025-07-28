import React from 'react';
import { Fade } from 'react-awesome-reveal';

import './Projects.css';

const projectData = [
  {
    title: "Gemini 기반 고급 데이터 분석 및 시각화",
    description: "CSV 파일을 업로드하고 자연어로 질문하면, Google Gemini AI가 데이터를 분석하고 인사이트를 제공하는 Streamlit 웹 애플리케이션입니다.",
    imgUrl: "/images/data-analysis.jpg",
    githubUrl: "https://github.com/NiceTry3675/data-analysis-agent",
    demoUrl: "https://github.com/NiceTry3675/data-analysis-agent/blob/main/sample2.pdf"
  },
  {
    title: "AI 뉴스 요약 에이전트",
    description: "네이버 뉴스 API, NewsAPI와 OpenAI/Anthropic AI 모델을 활용한 스마트 뉴스 요약 서비스입니다.",
    imgUrl: "/images/ai-news.jpg",
    githubUrl: "https://github.com/NiceTry3675/news-summarizer",
    demoUrl: "https://github.com/NiceTry3675/news-summarizer/blob/main/AI%20%EB%89%B4%EC%8A%A4%20%EC%9A%94%EC%95%BD%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8.pdf"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <Fade direction="up" triggerOnce>
        <div className="projects-content">
          <h2>프로젝트</h2>
          <p>사용자의 편의성을 높이기 위해 고민했던 과정과 결과물입니다.</p>
          <div className="projects-grid">
            {projectData.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={`${process.env.PUBLIC_URL}${project.imgUrl}`} alt={project.title} />
                  <div className="project-overlay">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">데모 보기</a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
