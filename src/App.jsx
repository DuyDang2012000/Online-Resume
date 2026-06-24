import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    // ScrollSpy Observer
    const spyOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0
    };
    
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    }, spyOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => spyObserver.observe(sec));

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      spyObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <ParticleCanvas />
      
      {/* Language Selector */}
      <div className="lang-selector-wrapper">
        <div className="lang-selector" role="group" aria-label="Language">
          <button 
            type="button" 
            id="btn-en" 
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => toggleLanguage('en')}
          >
            EN
          </button>
          <button 
            type="button" 
            id="btn-vi" 
            className={language === 'vi' ? 'is-active' : ''}
            onClick={() => toggleLanguage('vi')}
          >
            VI
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="portfolio-layout">
        <Sidebar activeSection={activeSection} />
        <Content />
      </div>
    </>
  );
}

export default App;
