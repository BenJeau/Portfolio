import React, { useState } from 'react';

const defaultState = {
  lang: 'fr',
  toggleLang: () => { },
};

const LanguageContext = React.createContext(defaultState);

const LanguageProvider = (props) => {
  const [lang, setLang] = useState('fr');

  const toggleLang = () => {
    console.log("Clicked");
    let oppLang = lang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('lang', oppLang);
    setLang(oppLang);
  }

  // useEffect(() => {
  //   // Getting dark mode value from localStorage!
  //   const lsDark = JSON.parse(localStorage.getItem('lang'));
  //   setLang(lsDark);
  // })

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang: toggleLang,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

export { LanguageProvider };