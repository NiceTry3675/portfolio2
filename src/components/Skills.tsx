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
  FastApiIcon,
  SqlalchemyIcon,
  NextjsIcon,
  TailwindcssIcon,
  PostgresqlIcon,
  RailwayIcon,
  VercelIcon,
  ClerkIcon,
} from './icons';
import './Skills.css';

const skills = [
  { icon: <Html5Icon />, name: 'HTML5' },
  { icon: <Css3AltIcon />, name: 'CSS3' },
  { icon: <JsSquareIcon />, name: 'JavaScript' },
  { icon: <TypescriptIcon />, name: 'TypeScript' },
  { icon: <NextjsIcon />, name: 'Next.js' },
  { icon: <TailwindcssIcon />, name: 'Tailwind CSS' },
  { icon: <ReactIcon />, name: 'React' },
  { icon: <NodeJsIcon />, name: 'Node.js' },
  { icon: <ExpressIcon />, name: 'Express' },
  { icon: <PythonIcon />, name: 'Python' },
  { icon: <FastApiIcon />, name: 'FastAPI' },
  { icon: <SqlalchemyIcon />, name: 'SQLAlchemy' },
  { icon: <PostgresqlIcon />, name: 'PostgreSQL' },
  { icon: <GitAltIcon />, name: 'Git' },
  { icon: <DockerIcon />, name: 'Docker' },
  { icon: <WebpackIcon />, name: 'Webpack' },
  { icon: <RailwayIcon />, name: 'Railway' },
  { icon: <VercelIcon />, name: 'Vercel' },
  { icon: <ClerkIcon />, name: 'Clerk' },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <Fade direction="up" triggerOnce>
        <div className="skills-content">
          <h2>기술</h2>
          <p>제가 사용 및 공부하고 있는 도구들입니다.</p>
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