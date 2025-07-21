import React from 'react';

const TnxAppBar = () => (
  <div style={{ background: '#1db954', paddingBottom: '8px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', position: 'relative' }}>
    {/* Top Row: Menu icon, Centered TNX Banking logo, and notification icon */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', position: 'relative' }}>
      {/* Menu Icon Placeholder (replace src later) */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Menu" style={{ position: 'absolute', left: 20, width: '28px', height: '28px', cursor: 'pointer', filter: 'invert(1)' }} />
      <span style={{ color: '#FFD600', fontWeight: 'bold', fontSize: '28px', letterSpacing: '2px' }}>TNX Banking</span>
      <span style={{ position: 'absolute', right: 20, fontSize: '26px', color: 'white', cursor: 'pointer' }} title="Notifications">🏦</span>
    </div>
    {/* Promotional Banner inside App Bar */}
    <div style={{ background: '#13a84e', borderRadius: '16px', margin: '0 16px 8px 16px', padding: '18px 16px', minHeight: 62 }} />
  </div>
);

export default TnxAppBar; 