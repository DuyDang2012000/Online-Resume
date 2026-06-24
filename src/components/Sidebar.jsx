import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Sidebar = ({ activeSection }) => {
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'about', labelVi: 'Giới thiệu', labelEn: 'About' },
    { id: 'skills', labelVi: 'Kỹ năng', labelEn: 'Skills' },
    { id: 'experience', labelVi: 'Kinh nghiệm', labelEn: 'Experience' },
    { id: 'projects', labelVi: 'Dự án', labelEn: 'Projects' },
    { id: 'contact', labelVi: 'Liên hệ', labelEn: 'Contact' }
  ];

  return (
    <header className="portfolio-sidebar">
      <div className="sidebar-top-section">
        {/* Avatar */}
        <img alt="Nguyễn Đăng Duy" className="avatar" src="/avatar.png" />
        
        <h1 className="name">Nguyễn Đăng Duy</h1>
        <p className="title">Front-end Developer</p>
        
        {/* Info Badges */}
        <div className="info-badges">
          <p className="info-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{t('Tân Triều, Thanh Trì, Hà Nội', 'Tan Trieu, Thanh Tri, Hanoi')}</span>
          </p>
          
          <p className="info-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar" aria-hidden="true">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span>20/01/2000</span>
          </p>
        </div>
        
        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                >
                  <span className="nav-line"></span>
                  <span className="nav-text">
                    {t(item.labelVi, item.labelEn)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Social icons */}
      <div className="sidebar-bottom-section">
        <a href="https://www.facebook.com/nguyen.dang.duy.00" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"></path></svg>
        </a>
        <a href="mailto:duy.nguyendang.547@gmail.com" aria-label="Email" className="social-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
        </a>
      </div>
    </header>
  );
};
export default Sidebar;
