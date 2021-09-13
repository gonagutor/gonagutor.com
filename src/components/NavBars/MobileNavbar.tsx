import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

interface NavButtonProps {
  callback: () => void,
    homeRef: React.RefObject<HTMLDivElement>,
    aboutMeRef: React.RefObject<HTMLDivElement>,
    myTechstackRef: React.RefObject<HTMLDivElement>,
    myProjectsRef: React.RefObject<HTMLDivElement>,
    contactMeRef: React.RefObject<HTMLDivElement>,
}

interface MobileNavbarProps {
  homeRef: React.RefObject<HTMLDivElement>,
  aboutMeRef: React.RefObject<HTMLDivElement>,
  myTechstackRef: React.RefObject<HTMLDivElement>,
  myProjectsRef: React.RefObject<HTMLDivElement>,
  contactMeRef: React.RefObject<HTMLDivElement>,
}

const NavButtons = (props: NavButtonProps) => {
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
      width: '100%',
      height: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
    >
      <label className="navButtonLabel" htmlFor="home">
        <button
          type="button"
          className={`navButtonMobile${(shouldBeActive(homeRef) || !homeRef.current) ? ' isCurrentPage' : ''}`}
          id="home"
          onClick={() => {
            if (homeRef.current) { homeRef.current.scrollIntoView({ behavior: 'smooth' }); }
            props.callback();
          }}
        >
          <b>Home</b>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="aboutMe">
        <button
          type="button"
          className={`navButtonMobile${(shouldBeActive(aboutMeRef)) ? ' isCurrentPage' : ''}`}
          id="aboutMe"
          onClick={() => {
            if (aboutMeRef.current) { aboutMeRef.current.scrollIntoView({ behavior: 'smooth' }); }
            props.callback();
          }}
        >
          <b>About Me</b>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="myTechstack">
        <button
          type="button"
          className={`navButtonMobile${(shouldBeActive(myTechstackRef)) ? ' isCurrentPage' : ''}`}
          id="myTechstack"
          onClick={() => {
            if (myTechstackRef.current) { myTechstackRef.current.scrollIntoView({ behavior: 'smooth' }); }
            props.callback();
          }}
        >
          <b>My Techstack</b>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="myProjects">
        <button
          type="button"
          className={`navButtonMobile${(shouldBeActive(myProjectsRef)) ? ' isCurrentPage' : ''}`}
          id="myProjects"
          onClick={() => {
            if (myProjectsRef.current) { myProjectsRef.current.scrollIntoView({ behavior: 'smooth' }); }
            props.callback();
          }}
        >
          <b>My Projects</b>
        </button>
      </label>
      <label className="navButtonLabel" htmlFor="contactMe">
        <button
          type="button"
          className={`navButtonMobile${(shouldBeActive(contactMeRef)) ? ' isCurrentPage' : ''}`}
          id="contactMe"
          onClick={() => {
            if (contactMeRef.current) { contactMeRef.current.scrollIntoView({ behavior: 'smooth' }); }
            props.callback();
          }}
        >
          <b>Contact Me</b>
        </button>
      </label>
    </div>

  );
};

const ExternalLinks = () => (
  <div className="aditionalNavButtonMobileContainer">
    <label htmlFor="instagram">
      <button type="button" id="instagram" className="aditionalNavButtonMobile" onClick={() => { window.location.href = 'https://www.instagram.com/gonzalo.gif/'; }}>
        <FontAwesomeIcon icon={faInstagram} className="navBarDesktopIcons" />
      </button>
    </label>
    <label htmlFor="email">
      <button type="button" id="email" className="aditionalNavButtonMobile" onClick={() => { window.location.href = 'mailto:gonagutor@gmail.com'; }}>
        <FontAwesomeIcon icon={faEnvelopeOpen} className="navBarDesktopIcons" />
      </button>
    </label>
    <label htmlFor="github">
      <button type="button" id="github" className="aditionalNavButtonMobile" onClick={() => { window.location.href = 'https://github.com/gonagutor'; }}>
        <FontAwesomeIcon icon={faGithub} className="navBarDesktopIcons" />
      </button>
    </label>
  </div>
);

const MobileNavbar = (props: MobileNavbarProps) => {
  const [hamOpen, setHamOpen] = useState(false);
  const {
    homeRef,
    aboutMeRef,
    myTechstackRef,
    myProjectsRef,
    contactMeRef,
  } = props;

  return (
    <div className="navBarMobile">
      <p className="leftTitle">
        Gonagutor
      </p>
      <div
        id="nav-icon1"
        className={(hamOpen) ? 'open' : ''}
        onClick={() => setHamOpen(!hamOpen)}
        onKeyDown={() => setHamOpen(!hamOpen)}
        role="button"
        tabIndex={0}
      >
        <span />
        <span />
        <span />
      </div>
      <div className={(hamOpen) ? 'fullNav' : 'fullNav inactive'}>
        <NavButtons
          homeRef={homeRef}
          aboutMeRef={aboutMeRef}
          myTechstackRef={myTechstackRef}
          myProjectsRef={myProjectsRef}
          contactMeRef={contactMeRef}
          callback={() => setHamOpen(!hamOpen)}
        />
        <ExternalLinks />
      </div>
    </div>
  );
};

export default MobileNavbar;
