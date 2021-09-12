import React, { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import TabletNavbar from './TabletNavbar';

interface DynamicNavbarProps {
  homeRef: React.RefObject<HTMLDivElement>,
  aboutMeRef: React.RefObject<HTMLDivElement>,
  myTechstackRef: React.RefObject<HTMLDivElement>,
  myProjectsRef: React.RefObject<HTMLDivElement>,
  contactMeRef: React.RefObject<HTMLDivElement>,
}

const ResponsiveNavbar = (props: DynamicNavbarProps) => {
  const navIndex = () => {
    if (typeof window === 'undefined') return (2);
    if (window.innerWidth <= 640) return (2);
    if (window.innerWidth < 1220) return (1);
    return (0);
  };
  const [shouldReturn, setShouldReturn] = useState(0);
  const {
    homeRef,
    aboutMeRef,
    myTechstackRef,
    myProjectsRef,
    contactMeRef,
  } = props;

  useEffect(() => {
    const setActiveNavBar = () => setShouldReturn(navIndex());
    setActiveNavBar();
    window.addEventListener('resize', setActiveNavBar);
    return () => window.removeEventListener('resize', setActiveNavBar);
  });

  if (shouldReturn === 2) {
    return (
      <MobileNavbar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        myTechstackRef={myTechstackRef}
        myProjectsRef={myProjectsRef}
        contactMeRef={contactMeRef}
      />
    );
  }
  if (shouldReturn === 1) {
    return (
      <TabletNavbar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        myTechstackRef={myTechstackRef}
        myProjectsRef={myProjectsRef}
        contactMeRef={contactMeRef}
      />
    );
  }
  return (
    <DesktopNavbar
      homeRef={homeRef}
      aboutMeRef={aboutMeRef}
      myTechstackRef={myTechstackRef}
      myProjectsRef={myProjectsRef}
      contactMeRef={contactMeRef}
    />
  );
};

export default ResponsiveNavbar;
