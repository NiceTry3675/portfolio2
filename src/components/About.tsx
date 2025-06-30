import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <Fade direction="up" triggerOnce>
        <h2>자기소개</h2>
        <p>
          저는 '어떻게 하면 더 편해질까?'라는 질문에서 개발을 시작합니다.
          <br /><br />
          최적의 사용자 경험을 위해서는 프론트엔드와 백엔드, 인프라에 대한 경계 없는 이해가 필수라고 믿습니다. 그래서 다양한 기술과 도구를 적극적으로 학습하고, 문제에 가장 적합한 해결책을 찾기 위해 노력합니다.
          <br /><br />
          단순히 작동하는 프로그램을 넘어, 사용자의 일상에 긍정적인 영향을 주는 의미 있는 결과물을 만들고 싶습니다.
        </p>
      </Fade>
    </section>
  );
}

export default About;
