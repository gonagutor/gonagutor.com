import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MeImage from '../assets/me.png';
import ArrowSVG from '../components/ArrowSVG';
import ResponsiveNavbar from '../components/NavBars/ResponsiveNavbar';

const IndexPage = () => {
  const [textClasses, setTextClasses] = useState('aboutMeTextBox');
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const myTechstackRef = useRef<HTMLDivElement>(null);
  const myProjectsRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  const changeClassToActive = () => ((aboutMeRef.current) && window.scrollY >= aboutMeRef.current.getBoundingClientRect().top && textClasses === 'aboutMeTextBox') && setTextClasses('aboutMeTextBox enter');
  useEffect(() => {
    window.addEventListener('scroll', changeClassToActive);
    return () => window.removeEventListener('scroll', changeClassToActive);
  });

  const loopingTypewriter = (ref: TypewriterClass) => {
    ref.pauseFor(500)
      .typeString('Front-end')
      .pauseFor(500)
      .typeString(' (HTML)')
      .pauseFor(500)
      .deleteChars(7)
      .typeString(' (CSS)')
      .pauseFor(500)
      .deleteChars(6)
      .typeString(' (React)')
      .pauseFor(500)
      .deleteChars(8)
      .typeString(' (Vue)')
      .pauseFor(500)
      .deleteChars(6)
      .typeString(' (SCSS)')
      .pauseFor(500)
      .deleteChars(7)
      .typeString(' (Angular)')
      .pauseFor(500)
      .deleteAll()
      .pauseFor(500)
      .typeString('Back-end')
      .pauseFor(500)
      .typeString(' (SQL)')
      .pauseFor(500)
      .deleteChars(6)
      .typeString(' (Firebase)')
      .pauseFor(500)
      .deleteChars(11)
      .typeString(' (MongoDB)')
      .pauseFor(500)
      .deleteChars(10)
      .typeString(' (Express)')
      .pauseFor(500)
      .deleteChars(10)
      .typeString(' (Apache)')
      .pauseFor(500)
      .deleteChars(9)
      .typeString(' (PHP)')
      .pauseFor(500)
      .deleteAll()
      .pauseFor(500)
      .typeString('App dev')
      .pauseFor(500)
      .typeString(' (Flutter)')
      .pauseFor(500)
      .deleteChars(10)
      .typeString(' (Java Native)')
      .pauseFor(500)
      .deleteAll()
      .start();
  };

  return (
    <div>
      <Head>
        <title>Gonagutor - Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <ResponsiveNavbar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        myTechstackRef={myTechstackRef}
        myProjectsRef={myProjectsRef}
        contactMeRef={contactMeRef}
      />
      <div className="main home" ref={homeRef}>
        <div className="welcomeTextContainer">
          <h1 className="welcomeText bold">Hi!</h1>
          <h1 className="welcomeText bold">I'm Gonzalo</h1>
          <h1 className="welcomeText bold">I'm a developer</h1>
          <p className="welcomeText thin">I love programming and doing cool things</p>
          <Typewriter
            options={{
              wrapperClassName: 'typewriter', cursorClassName: 'typewriterCursor', cursor: '▌', loop: true,
            }}
            onInit={(ref) => loopingTypewriter(ref)}
          />
        </div>
        <div id="personalPictureContainerContainer">
          <div id="personalPictureContainer">
            <img id="personalPicture" src={MeImage.src} alt="Gonzalo" />
            <p id="personalPictureTag">That's me! </p>
            <div id="personalPictureSquare" />
            <div id="personalPictureArrowContainer">
              <ArrowSVG />
            </div>
          </div>
        </div>
        <button
          id="scrollIndicator"
          type="button"
          onClick={() => (aboutMeRef.current) && aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          There's more!
          <div id="animatedScrollChevron">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
      </div>
      <div className="main aboutMe" ref={aboutMeRef}>
        <div id="aboutMeBG" />
        <div className={textClasses}>
          <h1>About Me</h1>
          <div style={{ fontFamily: 'Open Sans', fontWeight: 'lighter' }}>
            <p>
              I'm a developer with a passion for anything related to programming.
            </p>
            <p>
              I love big projects with lots of moving parts.
              I prefer things that include Front-End since making UI that
              looks good is something I like, but I also love doing Back-End.
              I also love designing things that look cool.
            </p>
            <p>
              While I make most of my projects to satisfy my own curiosity, or make
              things for me and my friends to enjoy, I am also a student at
              <a> </a>
              <a className="ftMadridLink" href="https://www.42madrid.com/">42 Madrid</a>
              <a> </a>
              where I am learning things like C, server stuff, and lots more things.
            </p>
            <p>
              I live in Spain, Madrid to be exact.
              Apart from programming I love games, Sci-Fi (Movies and books)
              and playing Dungeons And Dragons.
            </p>
          </div>
        </div>
      </div>
      <div className="main" ref={myTechstackRef}>
        <h1>Website under construction</h1>
        <h2>Come back soon to see something cool!</h2>
      </div>
      <div className="main" ref={myProjectsRef}>
        <h1>Website under construction</h1>
        <h2>Come back soon to see something cool!</h2>
      </div>
      <div className="main" ref={contactMeRef}>
        <h1>Website under construction</h1>
        <h2>Come back soon to see something cool!</h2>
      </div>
    </div>
  );
};

export default IndexPage;
