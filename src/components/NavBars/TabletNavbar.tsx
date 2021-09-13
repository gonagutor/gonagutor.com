import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

interface TabletNavbarProps {
  homeRef: React.RefObject<HTMLDivElement>,
  aboutMeRef: React.RefObject<HTMLDivElement>,
  myTechstackRef: React.RefObject<HTMLDivElement>,
  myProjectsRef: React.RefObject<HTMLDivElement>,
  contactMeRef: React.RefObject<HTMLDivElement>,
}

const NavButtons = (props: TabletNavbarProps) => {
  const {
    homeRef,
    aboutMeRef,
    myTechstackRef,
    myProjectsRef,
    contactMeRef,
  } = props;
  const setScrollY = useState(0)[1];
  const setScrollState = () => setScrollY(window.scrollY);
  const shouldBeActive = (ref : React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return false;
    const { y, height } = ref.current.getBoundingClientRect();
    if (y - ((height - y) / 2) < 0 && Math.abs(y) < height / 2) { return true; }
    return false;
  };

  useEffect(() => {
    window.addEventListener('scroll', setScrollState);
    return () => window.removeEventListener('scroll', setScrollState);
  });

  return (
    <div style={{
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }}
    >
      <label className="navButtonLabel" htmlFor="home">
        <button
          type="button"
          className={`navButtonTablet${(shouldBeActive(homeRef) || !homeRef.current) ? ' isCurrentPage' : ''}`}
          id="home"
          onClick={() => (homeRef.current) && homeRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <a>&#199;</a>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="aboutMe">
        <button
          type="button"
          className={`navButtonTablet${(shouldBeActive(aboutMeRef)) ? ' isCurrentPage' : ''}`}
          id="aboutMe"
          onClick={() => (aboutMeRef.current) && aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <a>&#80;</a>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="myTechstack">
        <button
          type="button"
          className={`navButtonTablet${(shouldBeActive(myTechstackRef)) ? ' isCurrentPage' : ''}`}
          id="myTechstack"
          onClick={() => (myTechstackRef.current) && myTechstackRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <a style={{ transform: 'translateY(3px)' }}>&#72;</a>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="myProjects">
        <button
          type="button"
          className={`navButtonTablet${(shouldBeActive(myProjectsRef)) ? ' isCurrentPage' : ''}`}
          id="myProjects"
          onClick={() => (myProjectsRef.current) && myProjectsRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <a style={{ transform: 'translateY(3px)' }}>&#69;</a>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="contactMe">
        <button
          type="button"
          className={`navButtonTablet${(shouldBeActive(contactMeRef)) ? ' isCurrentPage' : ''}`}
          id="contactMe"
          onClick={() => (contactMeRef.current) && contactMeRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <a style={{ transform: 'translateY(3px)' }}>&#109;</a>
        </button>
      </label>
    </div>

  );
};

const ExternalLinks = () => {
  const [deployableClass, setDeployableClass] = useState('aditionalNavButtonTabletContainer');
  return (
    <div>
      <label htmlFor="plus">
        <button type="button" id="plus" className="controllerButton" onClick={() => setDeployableClass((deployableClass === 'aditionalNavButtonTabletContainer') ? 'aditionalNavButtonTabletContainer active' : 'aditionalNavButtonTabletContainer')}>
          <a style={{ transform: 'scaleY(1.03)' }}>&#89;</a>
        </button>
      </label>
      <div className={deployableClass}>
        <label htmlFor="instagram">
          <button type="button" id="instagram" className="aditionalNavButtonTablet" onClick={() => { window.location.href = 'https://www.instagram.com/gonzalo.gif/'; }}>
            <FontAwesomeIcon icon={faInstagram} className="navBarDesktopIcons" />
          </button>
        </label>
        <label htmlFor="email">
          <button type="button" id="email" className="aditionalNavButtonTablet" onClick={() => { window.location.href = 'mailto:gonagutor@gmail.com'; }}>
            <FontAwesomeIcon icon={faEnvelopeOpen} className="navBarDesktopIcons" />
          </button>
        </label>
        <label htmlFor="github">
          <button type="button" id="github" className="aditionalNavButtonTablet" onClick={() => { window.location.href = 'https://github.com/gonagutor'; }}>
            <FontAwesomeIcon icon={faGithub} className="navBarDesktopIcons" />
          </button>
        </label>
      </div>
    </div>
  );
};

const TabletNavbar = (props: TabletNavbarProps) => {
  const {
    homeRef,
    aboutMeRef,
    myTechstackRef,
    myProjectsRef,
    contactMeRef,
  } = props;

  return (
    <div className="navBarDesktop">
      <p className="leftTitle">
        Gonagutor
      </p>
      <NavButtons
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        myTechstackRef={myTechstackRef}
        myProjectsRef={myProjectsRef}
        contactMeRef={contactMeRef}
      />
      <ExternalLinks />
    </div>
  );
};

export default TabletNavbar;
