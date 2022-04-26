import React, { useState } from 'react';
import i18n from '../../../i18next.config';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language);

  return (
    <label htmlFor="languageChanger" style={styles.container}>
      <button
        id="languageChanger"
        type="button"
        style={styles.button}
        onClick={() => {
          const newLang = language === 'es' ? 'en' : 'es';
          i18n.changeLanguage(newLang);
          setLanguage(newLang);
        }}
      >
        {language.toUpperCase()}
      </button>
    </label>
  );
};

const styles : {container: React.CSSProperties, button: React.CSSProperties} = {
  container: {
    backgroundColor: 'var(--white)',
    backgroundImage: 'var(--noise)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    background: 'none',
    border: 'none',
    color: 'var(--black-text)',
    height: '64px',
    width: '64px',
    fontSize: '1rem',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontFamily: '"Open Sans", sans-serif',
    cursor: 'pointer',
  },
};

export default LanguageSwitcher;
