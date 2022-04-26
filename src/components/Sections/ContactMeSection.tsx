import React, { RefObject, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import EmailJS from 'emailjs-com';
import { useTranslation } from 'react-i18next';

type ContactMeSectionProps = {
  refs: RefObject<HTMLDivElement>
}

const ContactMeSection = (props: ContactMeSectionProps) => {
  const { t } = useTranslation('contactMe');
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [textRequired, setTextRequired] = useState(false);
  const [captchaRequired, setCaptchaRequired] = useState(false);
  const reCaptchaRef = useRef<ReCAPTCHA>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const { refs } = props;

  return (
    <div className="main contactMe" ref={refs}>
      <div id="contactMeTextContainer">
        <h1 id="contactMeTitle">{t('contactMe')}</h1>
        <p>
          {t('contactMeDescription')}
          {' '}
          <a href="mailto:gonagutor@gmail.com">gonagutor@gmail.com</a>
        </p>
        <p>{t('preferedContactMethod')}</p>
        <p>
          {t('checkoutMyGithubPreLink')}
          {' '}
          <a href="https://github.com/gonagutor">github</a>
          {' '}
          {t('checkoutMyGithubPostLink')}
        </p>
      </div>
      <form
        id="aboutMeForm"
        onSubmit={(e) => {
          e.preventDefault();
          const isCaptchaFilled = (reCaptchaRef.current?.getValue() == null || reCaptchaRef.current?.getValue() === '');
          const isNameFilled = (nameRef.current?.value === undefined || nameRef.current.value === '' || nameRef.current.value.length < 1);
          const isEmailFilled = (emailRef.current?.value === undefined || emailRef.current.value === '' || emailRef.current.value.length < 1);
          const isTextFilled = (textRef.current?.value === undefined || textRef.current.value === '' || textRef.current.value.length < 1 || textRef.current.value.length > 5000);

          setCaptchaRequired(isCaptchaFilled);
          setNameRequired(isNameFilled);
          setEmailRequired(isEmailFilled);
          setTextRequired(isTextFilled);
          if (isCaptchaFilled || isNameFilled || isEmailFilled || isTextFilled) return;

          EmailJS.send(
            process.env.NEXT_PUBLIC_EMAILJS_KEY ?? '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '', {
              email: emailRef.current?.value,
              name: nameRef.current?.value,
              text: textRef.current?.value,
            },
          ).then(() => alert('An email was sent to my adress! I will get back to you as soon as I can'))
            .catch(() => alert('Could not send email, try again later'))
            .finally(() => { document.location.href = '/'; });
        }}
      >
        <label className="aboutMeLabel" htmlFor="name">
          <input ref={nameRef} className="formInput" id="name" placeholder={t('form.placeholders.name')} />
        </label>
        {(nameRequired) && <span style={{ color: 'var(--accent-1)', margin: '0px 16px' }}>{t('form.required')}</span>}
        <label className="aboutMeLabel" htmlFor="email">
          <input ref={emailRef} className="formInput" type="email" id="email" placeholder={t('form.placeholders.email')} />
        </label>
        {(emailRequired) && <span style={{ color: 'var(--accent-1)', margin: '0px 16px' }}>{t('form.required')}</span>}
        <label className="aboutMeLabel" style={{ height: '50%' }} htmlFor="content">
          <textarea ref={textRef} className="formInput big" rows={10} id="content" placeholder={t('form.placeholders.text')} />
        </label>
        {(textRequired) && (
        <span style={{ color: 'var(--accent-1)', margin: '0px 16px' }}>
          {t('form.required')}
          {' '}
          {t('form.noLongerThan')}
        </span>
        )}
        <div id="submitRow">
          <div style={{ margin: '16px 0px' }}>
            <ReCAPTCHA ref={reCaptchaRef} theme="dark" sitekey="6Le5cmQcAAAAAOJZyK2ieg19Ot6HGo92838hr5pK" />
            {(captchaRequired) && <span style={{ color: 'var(--accent-1)', margin: '16px 0px' }}>{t('pleaseCompleteTheCaptcha')}</span>}
          </div>
          <label htmlFor="submitButton">
            <input type="submit" id="submitButton" value={t('form.send')} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactMeSection;
