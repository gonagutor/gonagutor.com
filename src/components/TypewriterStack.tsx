import React from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import stack from '../assets/data/techstack.json';

const TypewriterStack = () => {
  const loopingTypewriter = (ref: TypewriterClass) => {
    Object.keys(stack).forEach((key) => {
      const discipline: Array<String> = stack[key as keyof typeof stack];
      ref.pauseFor(500).deleteAll().typeString(key);
      discipline.forEach((language) => {
        ref.typeString(` (${language})`).pauseFor(500).deleteChars(language.length + 3);
      });
    });
    ref.start();
  };

  return (
    <Typewriter
      options={{
        wrapperClassName: 'typewriter', cursorClassName: 'typewriterCursor', cursor: '▌', loop: true,
      }}
      onInit={(ref) => loopingTypewriter(ref)}
    />
  );
};

export default TypewriterStack;
