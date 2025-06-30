import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <Fade direction="up" triggerOnce>
        <h2>자기소개</h2>
        <p>
          안녕하세요! 풀스택 개발자의 꿈을 키우고 있는 학생, 임준현입니다.
          <br /><br />
          아직 배우는 단계이지만, 새로운 기술을 익히고 도전적인 프로젝트를 해결하는 과정에서 큰 보람을 느낍니다.
          <br /><br />
          다양한 기술을 익히고 적용해보며, 저만의 아이디어를 현실로 만드는 개발자가 되고 싶습니다.
        </p>
      </Fade>
    </section>
  );
}

export default About;
