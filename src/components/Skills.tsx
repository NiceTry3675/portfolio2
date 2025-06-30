import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  ReactIcon,
  NodeJsIcon,
  Html5Icon,
  Css3AltIcon,
  JsSquareIcon,
  PythonIcon,
  GitAltIcon,
  DockerIcon,
  TypescriptIcon,
  ExpressIcon,
  WebpackIcon,
} from './icons';
import './Skills.css';

const skills = [
  { icon: <Html5Icon />, name: 'HTML5' },
  { icon: <Css3AltIcon />, name: 'CSS3' },
  { icon: <JsSquareIcon />, name: 'JavaScript' },
  { icon: <TypescriptIcon />, name: 'TypeScript' },
  { icon: <ReactIcon />, name: 'React' },
  { icon: <NodeJsIcon />, name: 'Node.js' },
  { icon: <ExpressIcon />, name: 'Express' },
  { icon: <PythonIcon />, name: 'Python' },
  { icon: <GitAltIcon />, name: 'Git' },
  { icon: <DockerIcon />, name: 'Docker' },
  { icon: <WebpackIcon />, name: 'Webpack' },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <Fade direction="up" triggerOnce>
        <div className="skills-content">
          <h2>기술</h2>
          <p>제가 다룰 수 있고, 현재 공부하고 있는 기술들입니다.</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;