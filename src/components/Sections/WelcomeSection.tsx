import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MeImage from '../../assets/me.png';
import ArrowSVG from '../../assets/SVGs/ArrowSVG';
import TypewriterStack from '../TypewriterStack';

type WelcomeSectionProps = {
  refs: RefObject<HTMLDivElement>
  onArrowClick: Function
}

const WelcomeSection = (props: WelcomeSectionProps) => {
  const { t } = useTranslation('welcome');
  const { refs, onArrowClick } = props;

  return (
    <div className="main home" ref={refs}>
      <div className="welcomeTextContainer">
        <h1 className="welcomeText bold">{t('hi')}</h1>
        <h1 className="welcomeText bold">{t('presentation')}</h1>
        <h1 className="welcomeText bold">{t('whatIDo')}</h1>
        <p className="welcomeText thin">{t('whatILike')}</p>
        <TypewriterStack />
      </div>
      <div id="personalPictureContainerContainer">
        <div id="personalPictureContainer">
          <img id="personalPicture" src={MeImage.src} alt="Gonzalo" />
          <p id="personalPictureTag">{t('thatsMe')}</p>
          <div id="personalPictureSquare" />
          <div id="personalPictureArrowContainer">
            <ArrowSVG />
          </div>
        </div>
      </div>
      <button
        id="scrollIndicator"
        type="button"
        onClick={() => onArrowClick()}
      >
        {t('theresMore')}
        <div id="animatedScrollChevron">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </button>
    </div>
  );
};

export default WelcomeSection;
