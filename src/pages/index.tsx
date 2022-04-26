import React, { useRef } from 'react';
import ResponsiveNavbar from '../components/NavBars/ResponsiveNavbar';
import ProjectList from '../components/ProjectList';
import CustomHead from '../components/CustomHead';
import WelcomeSection from '../components/Sections/WelcomeSection';
import AboutMeSection from '../components/Sections/AboutMeSection';
import TechstackSection from '../components/Sections/TechstackSection';
import ContactMeSection from '../components/Sections/ContactMeSection';

const IndexPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const myTechstackRef = useRef<HTMLDivElement>(null);
  const myProjectsRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <CustomHead />
      <ResponsiveNavbar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        myTechstackRef={myTechstackRef}
        myProjectsRef={myProjectsRef}
        contactMeRef={contactMeRef}
      />
      <WelcomeSection
        refs={homeRef}
        onArrowClick={() => {
          if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      <AboutMeSection refs={aboutMeRef} />
      <TechstackSection refs={myTechstackRef} />
      <ProjectList refs={myProjectsRef} />
      <ContactMeSection refs={contactMeRef} />
    </div>
  );
};

export default IndexPage;
