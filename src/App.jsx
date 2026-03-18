import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Daily Loot 1",
      desc: "Free ₹100 - No Investment",
      link: "https://t.me/c/2173020430/3607",
      platform: "telegram"
    },
    {
      id: 2,
      title: "Daily Loot 2", 
      desc: "Free ₹100-1000 - whatsapp loot",
      link: "https://t.me/c/2173020430/3761",
      platform: "whatsapp"
    },
    {
      id: 3,
      title: "Daily Loot 3",
      desc: " 349 Monthly Recharge Free Secrate Trick",
      link: "https://t.me/c/2173020430/3542",
      platform: "instagram"
    },
    {
      id: 4,
      title: "Daily Loot 4",
      desc: "₹20-400 Free Today",
      link: "https://t.me/c/2173020430/3491",
      platform: "telegram"
    }
  ]);

  const updateSection = (id, newTitle, newDesc, newLink) => {
    setSections(sections.map(section => 
      section.id === id 
        ? { ...section, title: newTitle, desc: newDesc, link: newLink }
        : section
    ));
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'telegram': return '📱';
      case 'whatsapp': return '💬';
      case 'instagram': return '📸';
      default: return '🔗';
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-section">
         <div className="logo">
  <img 
    src="/logo.png" 
    alt="Channel Logo" 
    className="logo-img" 
  />
</div>
          <div className="header-text">
            <h1>Daily Free Earning</h1>
            <p className="earning-text">💰 ₹500-₹1000 FREE DAILY 💰<br/>
            <span>❌ No Investment Required ✅</span>
            <span> Gmap Agent bhi ate hai  ✅</span>
            </p>
          </div>
        </div>
        <div className="join-btn">
          <a href="https://t.me/+K4L5HM8y3Gk0MTE1" target="_blank" rel="noopener noreferrer">
            @S.C earning (vip) Join 2K+ Members 👇
          </a>
        </div>
      </header>

      <main className="main-content">
        <h2 className="section-title">🔥 TODAY'S WORKING LOOTS 🔥</h2>
        
        <div className="loots-grid">
          {sections.map((section) => (
            <div key={section.id} className="loot-card">
              <div className="loot-header">
                <span className="platform-icon">{getPlatformIcon(section.platform)}</span>
                <h3>{section.title}</h3>
              </div>
              <p className="loot-desc">{section.desc}</p>
              <a 
                href={section.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="loot-link"
              >
                🚀 Claim Now
              </a>
            </div>
          ))}
        </div>

        
      
      </main>

      <footer className="footer">
        <p>© 2026 S.C earing (vip) | 2K+ Active Members</p>
        <div className="social-links">
          <a href="https://t.me/+K4L5HM8y3Gk0MTE1" target="_blank">📱 Telegram</a>
          <a href="https://whatsapp.com/channel/0029VbCHBG196H4NV1DopA0b" target="_blank">💬 WhatsApp</a>
          <a href="https://www.instagram.com/cod.ee999?igsh=MWd3YmdrMGQ3Y2hqag==" target="_blank">📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default App;