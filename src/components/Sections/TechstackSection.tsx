import { useTranslation } from 'react-i18next';
import React, { RefObject, useEffect, useState } from 'react';

type TechstackSectionProps = {
  refs: RefObject<HTMLDivElement>
}

const TechstackSection = (props: TechstackSectionProps) => {
  const { t } = useTranslation('techstack');
  const [teachStackClasses, setTeachStackClasses] = useState('techstackTextContainer');
  const { refs } = props;

  const changeClassTechStackToActive = () => ((refs?.current) && window.scrollY >= refs?.current.getBoundingClientRect().top && teachStackClasses === 'techstackTextContainer') && setTeachStackClasses('techstackTextContainer enter');

  useEffect(() => {
    window.addEventListener('scroll', changeClassTechStackToActive);
    return () => window.removeEventListener('scroll', changeClassTechStackToActive);
  });

  return (
    <div className="main myTechstack" ref={refs}>
      <div id="techstackBG" />
      <div className={teachStackClasses}>
        <h1 className="techstackText bold">{t('myTechstack')}</h1>
        <div style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 'normal' }}>
          <p>{t('approach')}</p>
          <p>{t('approachComment')}</p>
          <p>{t('benefits')}</p>
          <h4>{t('languagesIUse')}</h4>
          <p>{t('languagesList')}</p>
          <h4>{t('frameworksIKnow')}</h4>
          <p>{t('frameworksList')}</p>
          <h4>{t('otherUsefulThingsIKnow')}</h4>
          <p>{t('otherUsefulThingsList')}</p>
        </div>
      </div>
    </div>
  );
};

export default TechstackSection;
