import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Content = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('panel-hb');

  // Experience Data
  const companies = [
    { id: 'tab-hb', panelId: 'panel-hb', short: 'HBLAB' },
    { id: 'tab-free', panelId: 'panel-free', short: 'FREELANCE' },
    { id: 'tab-deep', panelId: 'panel-deep', short: 'DEEPCARE' },
    { id: 'tab-rik', panelId: 'panel-rik', short: 'RIKKEISOFT' }
  ];

  return (
    <main className="portfolio-content">
      
      {/* ABOUT SECTION */}
      <section id="about" className="reveal">
        <div className="section-title">
          <h2>{t('Giới thiệu', 'About')}</h2>
          <span className="section-number">01</span>
          <span className="section-divider"></span>
        </div>
        
        <div className="section-body about-body">
          <p className="about-p">
            {t(
              <>Kỹ sư Frontend với hơn <strong className="highlight">4 năm</strong> kinh nghiệm xây dựng hệ thống Web Quản trị, WebApp, Mini Game và ứng dụng tương tác real-time. Thành thạo <strong className="highlight">ReactJS</strong>, <strong className="highlight">TypeScript</strong>, <strong className="highlight">NextJS</strong> và có kinh nghiệm tích hợp với <strong className="highlight">Socket.IO</strong>, ví blockchain (<strong className="highlight">TON</strong>).</>,
              <>Frontend Engineer with over <strong className="highlight">4 years</strong> of experience building Administration Web systems, WebApps, Mini Games, and real-time interactive applications. Proficient in <strong className="highlight">ReactJS</strong>, <strong className="highlight">TypeScript</strong>, <strong className="highlight">NextJS</strong>, and experienced in integrating <strong className="highlight">Socket.IO</strong> and blockchain wallets (<strong className="highlight">TON</strong>).</>
            )}
          </p>
          <p className="about-p">
            {t(
              'Sở hữu kinh nghiệm sâu sắc trong tối ưu hóa hiệu năng và dung lượng website (áp dụng hiệu quả các giải pháp: Minimize bundle size, Tree Shaking, Minification, Compression (Gzip/Brotli), và tối ưu hóa bộ nhớ tạm với IndexedDB) nhằm tối đa tốc độ tải trang và nâng cao chỉ số Lighthouse.',
              'Possesses deep experience in optimizing web performance and size (effectively implementing Bundle Size Minimization, Tree Shaking, Minification, Gzip/Brotli Compression, and client-side storage optimization using IndexedDB) to maximize page load speeds and elevate Lighthouse scores.'
            )}
          </p>
          <p className="about-p">
            {t(
              'Có kinh nghiệm thiết kế giải pháp kéo thả (drag-and-drop editor), kết nối API và tối ưu hiệu năng cho hệ thống lớn có hàng trăm người dùng hoạt động đồng thời hàng ngày.',
              'Experienced in designing drag-and-drop editors, API integration, and performance optimization for large-scale systems with hundreds of daily active users.'
            )}
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="stats-box">
          <div className="stat-item">
            <div className="stat-value">4<span className="stat-plus">+</span></div>
            <div className="stat-label">{t('Năm kinh nghiệm', 'Years of Experience')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">12<span className="stat-plus">+</span></div>
            <div className="stat-label">{t('Dự án hoàn thành', 'Completed Projects')}</div>
          </div>
        </div>
        
        {/* Education Detail */}
        <div className="edu-box">
          <h3 className="edu-title">
            <span className="edu-dot"></span>
            <span>{t('Học vấn', 'Education')}</span>
          </h3>
          <p className="edu-school">
            {t('Đại học Công nghệ Giao thông Vận tải (UTT)', 'University of Transport Technology (UTT)')}
          </p>
          <p className="edu-major">
            {t('Tốt nghiệp Đại học chuyên ngành Công nghệ thông tin (2022)', 'Graduated with a Bachelor\'s Degree in Information Technology (2022)')}
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="reveal">
        <div className="section-title">
          <h2>{t('Kỹ năng', 'Skills')}</h2>
          <span className="section-number">02</span>
          <span className="section-divider"></span>
        </div>
        
        <div className="skills-container">
          {/* Frontend Development */}
          <div className="skills-col">
            <h3 className="skills-col-title">Frontend Development</h3>
            <ul className="skills-list">
              <li><span className="list-dot">▷</span><span className="list-text">ReactJS / NextJS</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">TypeScript / JavaScript (ES6+)</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Redux / Redux-saga, ...</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Tailwind CSS</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Ant Design / Mui / Shadcn UI, ...</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Telegram Mini Apps (TMA) & WebApp</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">TON Wallet & tonconnect-ui</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Socket.IO & WebSocket (Client)</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">RESTful API & GraphQL Integration</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Gamification / P2P Features</span></li>
            </ul>
          </div>
          {/* DevOps & Tools */}
          <div className="skills-col">
            <h3 className="skills-col-title">{t('DevOps & Công cụ', 'DevOps & Tools')}</h3>
            <ul className="skills-list">
              <li><span className="list-dot">▷</span><span className="list-text">Docker / Compose</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Nginx (Basic Config)</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">VPS (Linux/Ubuntu)</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Cloudflare (DNS & SSL)</span></li>
              <li><span className="list-dot">▷</span><span className="list-text">Figma / Lunacy / Git</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="reveal">
        <div className="section-title">
          <h2>{t('Kinh nghiệm', 'Experience')}</h2>
          <span className="section-number">03</span>
          <span className="section-divider"></span>
        </div>
        
        <div className="exp-layout">
          {/* Tab Controls */}
          <div role="tablist" className="exp-tabs" aria-label="Companies">
            {companies.map(company => (
              <button 
                key={company.id}
                role="tab" 
                type="button" 
                aria-selected={activeTab === company.panelId ? "true" : "false"}
                id={company.id} 
                className={`exp-tab-btn ${activeTab === company.panelId ? 'is-active' : ''}`}
                onClick={() => setActiveTab(company.panelId)}
              >
                {company.short}
              </button>
            ))}
          </div>
          
          {/* Experience Panels */}
          <div className="exp-panels">
            
            {/* Panel HBLAB */}
            <div role="tabpanel" id="panel-hb" className={`exp-panel ${activeTab === 'panel-hb' ? 'active' : ''}`}>
              <h3 className="panel-company">
                {t('Công ty Cổ phần HBLAB', 'HBLAB Joint Stock Company')}
              </h3>
              <p className="panel-role">{t('Lập trình viên Frontend', 'Frontend Developer')}</p>
              <p className="panel-duration">{t('10/2025 — Hiện tại', '10/2025 — Present')}</p>
              <ul className="panel-desc-list">
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Xây dựng drag-and-drop editor cho website builder, hỗ trợ dynamic component rendering và quản trị nội dung.',
                      'Developed a drag-and-drop editor for a website builder, supporting dynamic component rendering and content management.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Panel Freelance */}
            <div role="tabpanel" id="panel-free" className={`exp-panel ${activeTab === 'panel-free' ? 'active' : ''}`}>
              <h3 className="panel-company">{t('Dự án Tự do', 'Freelance Projects')}</h3>
              <p className="panel-role">{t('Lập trình viên Frontend', 'Frontend Developer')}</p>
              <p className="panel-duration">06/2024 — 10/2024</p>
              <ul className="panel-desc-list">
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Phát triển Telegram Mini Apps theo mô hình gamification / tap-to-earn.',
                      'Developed Telegram Mini Apps utilizing gamification and tap-to-earn mechanics.'
                    )}
                  </span>
                </li>
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Tích hợp Telegram WebApp và ví Web3 (TON Blockchain).',
                      'Integrated Telegram WebApp API and Web3 blockchain wallets (TON network).'
                    )}
                  </span>
                </li>
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Phát triển mini game Baccarat thời gian thực (kết nối qua Socket.IO) tích hợp trực tiếp trên Telegram.',
                      'Developed a real-time Baccarat mini-game (connected via Socket.IO) integrated directly on Telegram.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Panel DEEPCARE */}
            <div role="tabpanel" id="panel-deep" className={`exp-panel ${activeTab === 'panel-deep' ? 'active' : ''}`}>
              <h3 className="panel-company">
                {t('Công ty TNHH Công nghệ DEEPCARE', 'DEEPCARE Technology Co., Ltd')}
              </h3>
              <p className="panel-role">{t('Lập trình viên Frontend', 'Frontend Developer')}</p>
              <p className="panel-duration">04/2023 — 09/2025</p>
              <ul className="panel-desc-list">
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Tham gia phát triển hệ sinh thái y tế số toàn diện: tối ưu hóa chuỗi dịch vụ khám chữa bệnh, quản trị tồn kho dược phẩm và vật tư y tế, tích hợp hệ thống chẩn đoán hình ảnh y khoa (RIS/PACS), tự động hóa báo cáo tài chính và chăm sóc khách hàng (PRM/CRM).',
                      'Participated in developing a comprehensive digital healthcare ecosystem: optimizing clinical service chains, pharmaceutical and medical supply inventory management, RIS/PACS medical imaging integration, financial reporting automation, and client relationship management (PRM/CRM).'
                    )}
                  </span>
                </li>
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Trực tiếp tiếp nhận yêu cầu từ khách hàng, phân tích nghiệp vụ và hoạch định kế hoạch triển khai (plan).',
                      'Directly received requirements from clients, analyzed business workflows, and drafted detailed implementation plans.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Panel RIKKEISOFT */}
            <div role="tabpanel" id="panel-rik" className={`exp-panel ${activeTab === 'panel-rik' ? 'active' : ''}`}>
              <h3 className="panel-company">
                {t('Công ty Cổ phần Rikkeisoft', 'Rikkeisoft Joint Stock Company')}
              </h3>
              <p className="panel-role">{t('Lập trình viên Frontend', 'Frontend Developer')}</p>
              <p className="panel-duration">04/2022 — 04/2023</p>
              <ul className="panel-desc-list">
                <li>
                  <span className="list-bullet"></span>
                  <span className="list-content">
                    {t(
                      'Phát triển hệ thống quản lý khám chữa bệnh, thanh toán và báo cáo dữ liệu.',
                      'Developed medical check-up systems, billing modules, and statistical data reporting dashboards.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="reveal">
        <div className="section-title">
          <h2>{t('Dự án', 'Projects')}</h2>
          <span className="section-number">04</span>
          <span className="section-divider"></span>
        </div>
        
        <div className="projects-grid">
          
          {/* Project: LP-BOOSTER - V2 */}
          <div className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-name">LP-BOOSTER - V2</h3>
            </div>
            <p className="project-card-desc">
              {t(
                'Xây dựng drag-and-drop editor cho website builder, quản lý gói dịch vụ (plan) và người dùng cho HBLab.',
                'Developed a drag-and-drop website builder editor, managing packages (plans) and user profiles for HBLab.'
              )}
            </p>
            <div className="project-chips">
              <span className="project-chip">TypeScript</span>
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">Mui</span>
              <span className="project-chip">D&D Editor</span>
            </div>
            <span className="project-url">02/2026 — Present</span>
          </div>

          {/* Project: SWIPEKIT - V1 */}
          <div className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-name">SWIPEKIT - V1</h3>
            </div>
            <p className="project-card-desc">
              {t(
                'Phiên bản đầu tiên của editor kéo thả phục vụ khởi tạo landing page / website nhanh chóng cho HBLab.',
                'The initial version of the drag-and-drop editor for rapid landing page and website creation at HBLab.'
              )}
            </p>
            <div className="project-chips">
              <span className="project-chip">TypeScript</span>
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">Mui</span>
            </div>
            <span className="project-url">09/2025 — 02/2026</span>
          </div>

          {/* Project: Telegram Tap-to-Earn */}
          <div className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-name">Telegram Mini Apps</h3>
            </div>
            <p className="project-card-desc">
              {t(
                'Ecosystem Mini App trên Telegram gồm Baccarat game thời gian thực (Socket.IO), game Tap-to-Earn, tích hợp ví TON và chuyển nhận coin giữa người dùng.',
                'Telegram Mini App ecosystem featuring real-time Baccarat game (via Socket.IO), Tap-to-Earn mechanics, TON Wallet integration, and peer-to-peer transfers.'
              )}
            </p>
            <div className="project-chips">
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">Socket.IO</span>
              <span className="project-chip">tonconnect-ui</span>
              <span className="project-chip">Telegram WebApp</span>
            </div>
            <span className="project-url">06/2024 — 10/2024</span>
          </div>

          {/* Project: H247 - PRM - CRM */}
          <div className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-name">H247 Clinic PRM/CRM</h3>
            </div>
            <p className="project-card-desc">
              {t(
                'Giải pháp khám chữa bệnh và chăm sóc khách hàng toàn diện cho phòng khám. Tối ưu hiệu suất cho hàng trăm người dùng hàng ngày.',
                'Comprehensive medical check-up & client care solution for clinics. High-performance optimization for hundreds of active daily users.'
              )}
            </p>
            <div className="project-chips">
              <span className="project-chip">TypeScript</span>
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">Next.js</span>
              <span className="project-chip">Ant Design</span>
            </div>
            <span className="project-url">04/2023 — 09/2025</span>
          </div>

          {/* Project: SEEK Matching App */}
          <div className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-name">SEEK Dating App</h3>
            </div>
            <p className="project-card-desc">
              {t(
                'Ứng dụng tìm kiếm bạn bè / hẹn hò (giống Tinder) cho Rikkeisoft. Phát triển các phân hệ giao diện người dùng, tối ưu responsive trên mọi thiết bị và tích hợp API.',
                'Matching dating app (Tinder-like) for Rikkeisoft. Developed user interface modules, optimized responsive design across devices, and integrated APIs.'
              )}
            </p>
            <div className="project-chips">
              <span className="project-chip">Next.js</span>
              <span className="project-chip">TypeScript</span>
              <span className="project-chip">Ant Design</span>
              <span className="project-chip">GraphQL</span>
            </div>
            <span className="project-url">04/2022 — 04/2023</span>
          </div>

          {/* Project: TRINITY */}
          <div className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-name">TRINITY Health Portal</h3>
            </div>
            <p className="project-card-desc">
              {t(
                'Cổng thông tin quản lý sức khỏe cho Rikkeisoft. Thiết lập giao diện người dùng, xây dựng cấu trúc luồng dữ liệu (state) và kết nối RESTful API.',
                'Health information management portal for Rikkeisoft. Developed frontend user interfaces, structured application state flows, and integrated RESTful APIs.'
              )}
            </p>
            <div className="project-chips">
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">TypeScript</span>
              <span className="project-chip">Redux-saga</span>
              <span className="project-chip">Ant Design</span>
            </div>
            <span className="project-url">09/2022 — 04/2023</span>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="reveal">
        <div className="section-title">
          <h2>{t('Liên hệ', 'Contact')}</h2>
          <span className="section-number">05</span>
          <span className="section-divider"></span>
        </div>
        
        <div className="contact-container">
          <div className="contact-info-block">
            <h2 className="contact-heading">{t('Kết nối với tôi', 'Connect with me')}</h2>
            
            <div className="contact-links-list">
              {/* Email Card */}
              <a href="mailto:duy.nguyendang.547@gmail.com" className="contact-link-item">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </span>
                <span className="contact-text-meta">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">duy.nguyendang.547@gmail.com</span>
                </span>
              </a>
              
              {/* Phone Card */}
              <div className="contact-link-item no-link">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </span>
                <span className="contact-text-meta">
                  <span className="contact-label">{t('Điện thoại / Zalo', 'Phone / Zalo')}</span>
                  <span className="contact-value">0399 676 793</span>
                </span>
                <div className="contact-item-actions">
                  <a href="tel:+84399676793" aria-label="Call" className="action-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  </a>
                  <a href="https://zalo.me/0399676793" target="_blank" rel="noreferrer" aria-label="Zalo" className="action-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="footer">
          © Nguyễn Đăng Duy. All rights reserved.
        </footer>
      </section>

    </main>
  );
};
export default Content;
