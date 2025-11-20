import React from 'react';
import { 
  LayoutDashboard, 
  FileSearch, 
  AlertTriangle, 
  History, 
  FileText, 
  Settings,
  ShieldCheck
} from 'lucide-react';

// Sidebar
export default function Sidebar({ activePage, setPage, isSidebarOpen }) {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
    { name: 'Claim Analysis', icon: FileSearch, page: 'analysis' },
    { name: 'Alerts', icon: AlertTriangle, page: 'alerts' },
    { name: 'Audit Trail', icon: History, page: 'audit' },
    { name: 'Reports', icon: FileText, page: 'reports' },
    { name: 'Settings', icon: Settings, page: 'settings' },
  ];

  return (
    // Sidebar kini "Glassmorphism"
    // Latar belakang transparan, blur, dan border halus
    <div className={`fixed top-0 left-0 h-full z-20 w-64 p-6 flex flex-col flex-shrink-0 
                   bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg 
                   border-r border-white/30 dark:border-slate-700/30
                   transition-transform duration-300 ease-in-out 
                   ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center space-x-2 mb-10">
        <ShieldCheck className="text-emerald-500" size={28} />
        <h3 className="text-2xl font-bold text-gray-700 dark:text-slate-200">SATRIA JKN</h3>
      </div>
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <NavItem
            key={item.page}
            Icon={item.icon}
            label={item.name}
            isActive={activePage === item.page}
            onClick={() => setPage(item.page)}
          />
        ))}
      </nav>
    </div>
  );
};

// Tombol Navigasi di Sidebar (Komponen Internal)
const NavItem = ({ Icon, label, isActive, onClick }) => {
  const baseStyle = "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300";
  // Gaya Cekung (Inset) untuk item aktif - Aksen Hijau/Emerald di dark mode
  const activeStyle = `
    text-blue-600 font-semibold 
    shadow-[inset_3px_3px_6px_#0000001a,inset_-3px_-3px_6px_#ffffff80]
    dark:text-emerald-400 
    dark:shadow-[inset_3px_3px_6px_#0e1118,inset_-3px_-3px_6px_#3a435a]
  `;
  // Gaya Cembung (Outset) untuk item non-aktif
  // Disederhanakan untuk Glassmorphism
  const inactiveStyle = `
    text-gray-600 font-medium 
    hover:text-blue-500 
    hover:bg-black/5 dark:hover:bg-white/5
    dark:text-slate-400 
    dark:hover:text-emerald-400 
    transition-colors duration-200
  `;

  return (
    <div
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
      onClick={onClick}
    >
      <Icon size={20} />
      <span>{label}</span>
    </div>
  );
};