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
      <section key={i} className={`projectContainer ${((i % 2 === 0)) ? 'even' : 'odd'}`}>
        <div className="projectTextContainer">
          <h1 className="projectTitle">{Data.projects[i].title}</h1>
          <div className="projectDescriptionContainer">
            {sliceNewLines(Data.projects[i].description)}
          </div>
        </div>
        <img className="projectImage" src={Data.projects[i].image} alt={Data.projects[i].title} />
      </section>,
    );
  }
  return (<div className="main myProjects" ref={refs}>{projects}</div>);
};

export default ProjectList;
