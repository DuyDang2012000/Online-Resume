import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return saved || 'vi';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
    // Update html tag class and lang attribute
    document.documentElement.lang = language;
    document.documentElement.className = `lang-${language}`;
  }, [language]);

  const toggleLanguage = (lang) => {
    if (lang === 'en' || lang === 'vi') {
      setLanguage(lang);
    }
  };

  const isVi = language === 'vi';
  const isEn = language === 'en';

  const t = (viText, enText) => {
    return isVi ? viText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isVi, isEn, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
