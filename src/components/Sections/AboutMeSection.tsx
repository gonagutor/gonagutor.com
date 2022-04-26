import React, { RefObject, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type AboutMeSectionProps = {
  refs: RefObject<HTMLDivElement>
}

const AboutMeSection = (props: AboutMeSectionProps) => {
  const { t } = useTranslation('aboutMe');
  const [aboutMeClasses, setAboutMeClasses] = useState('aboutMeTextBox');
  const { refs } = props;

  const changeClassAboutMeToActive = () => ((refs?.current) && window.scrollY >= refs.current.getBoundingClientRect().top && aboutMeClasses === 'aboutMeTextBox') && setAboutMeClasses('aboutMeTextBox enter');

  useEffect(() => {
    window.addEventListener('scroll', changeClassAboutMeToActive);
    return () => window.removeEventListener('scroll', changeClassAboutMeToActive);
  });

  return (
    <div className="main aboutMe" ref={refs}>
      <div id="aboutMeBG" />
      <div className={aboutMeClasses}>
        <h1>{t('aboutMe')}</h1>
        <div style={{ fontFamily: 'Open Sans', fontWeight: 'normal' }}>
          <p>{t('fstParagraph')}</p>
          <p>{t('sndParagraph')}</p>
          <p>
            {t('thrParagraphBeforeLink')}
            <a> </a>
            <a className="ftMadridLink" href="https://www.42madrid.com/">42 Madrid</a>
            <a> </a>
            {t('thrParagraphAfterLink')}
          </p>
          <p>{t('fthParagraph')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
