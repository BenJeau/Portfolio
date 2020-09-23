import React, { useState, useEffect } from 'react';
import { toggleLang, oppositeLang } from '../utils/Strings';

let defaultLang = 'en';

if (typeof window !== 'undefined' && window.localStorage) {
  defaultLang = localStorage.getItem('lang') || defaultLang;
}

const defaultState = {
  lang: defaultLang,
  toggleLang: () => { },
};

const LanguageContext = React.createContext(defaultState);

const LanguageProvider = (props) => {
  const [lang, setLang] = useState('en');

  const togLang = () => {
    setLang(oppositeLang());
    toggleLang();
  }

  useEffect(() => {
    if (localStorage.getItem('lang')) setLang(localStorage.getItem('lang'));
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang: togLang,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

export { LanguageProvider };