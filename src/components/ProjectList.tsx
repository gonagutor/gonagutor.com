import React, { RefObject } from 'react';
import Data from '../assets/projects.json';

interface ProjectListProps {
  refs: RefObject<HTMLDivElement>
}

const ProjectList = (props: ProjectListProps) => {
  const { refs } = props;
  const projects: Array<JSX.Element> = [];
  const sliceNewLines = (text: String) => {
    const paragraphs: Array<JSX.Element> = [];
    let i = 0;
    text.split('\n').forEach((paragraph) => { paragraphs.push(<p key={i}>{paragraph}</p>); i += 1; });
    return (paragraphs);
  };

  for (let i = 0; i < Data.projects.length; i += 1) {
    projects.push(
      <section
        key={i}
        style={{
          display: 'flex',
          flexDirection: ((i % 2 === 0)) ? 'row' : 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '5vw',
          flexBasis: '40%',
          color: ((i % 2 === 0)) ? 'var(--black-text)' : 'var(--white-text)',
          background: ((i % 2 === 0)) ? 'var(--white)' : 'var(--black)',
          backgroundImage: 'var(--noise)',
        }}
      >
        <div style={{
          flexGrow: 6, display: 'flex', flexDirection: 'column',
        }}
        >
          <h1 style={{ fontFamily: '"Vaulto", sans-serif', fontWeight: 'bold', fontSize: '2rem' }}>{Data.projects[i].title}</h1>
          <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '1.2rem' }}>{sliceNewLines(Data.projects[i].description)}</div>
        </div>
        <img
          style={{
            flexGrow: 4,
            maxWidth: '480px',
            maxHeight: '270px',
            padding: '5vw',
            objectFit: 'contain',
          }}
          src={Data.projects[i].image}
          alt={Data.projects[i].title}
        />
      </section>,
    );
  }
  return (<div className="main myProjects" ref={refs}>{projects}</div>);
};

export default ProjectList;
