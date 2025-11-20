import React, { useState } from 'react';
import {
  Menu,
  Search,
  Bell,
  User,
  Sun,
  Moon,
  LogOut,
  Settings,
  HelpCircle
} from 'lucide-react';
import { GlassButton, DropdownMenu } from '../ui/Common.jsx'; // Impor DropdownMenu

// Komponen Toggle Tema
const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <GlassButton onClick={toggleDarkMode}>
    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
  </GlassButton>
);

// Komponen Pencarian
const SearchBar = () => (
  <div className="relative flex-1 max-w-lg">
    <input
      type="text"
      placeholder="Search Claims, Alerts..."
      className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 dark:bg-white/5 text-white placeholder-slate-300 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 backdrop-blur-sm border border-white/20 dark:border-white/10"
    />
    <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-400" />
  </div>
);

// --- Dropdown Contents ---

// Konten Dropdown Notifikasi
const NotificationDropdown = () => (
  <div className="flex flex-col">
    <div className="p-3 border-b dark:border-slate-700">
      <h6 className="font-semibold text-sm dark:text-slate-200">Notifications</h6>
    </div>
    <div className="py-2">
      <a href="#" className="flex items-start px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700">
        <div className="p-1.5 bg-red-100 dark:bg-red-900/50 rounded-full mr-3 mt-0.5">
          <Bell size={16} className="text-red-600 dark:text-red-300" />
        </div>
        <div>
          <strong className="dark:text-slate-300">High Risk Alert</strong>
          <p className="text-xs text-slate-500 dark:text-slate-400">Claim ID 001 flagged as Upcoding.</p>
          <span className="text-xs text-slate-400 dark:text-slate-500">5 mins ago</span>
        </div>
      </a>
      <a href="#" className="flex items-start px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700">
        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full mr-3 mt-0.5">
          <Bell size={16} className="text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <strong className="dark:text-slate-300">New Report Ready</strong>
          <p className="text-xs text-slate-500 dark:text-slate-400">Monthly Fraud Summary is generated.</p>
          <span className="text-xs text-slate-400 dark:text-slate-500">1 hour ago</span>
        </div>
      </a>
    </div>
    <div className="p-2 border-t dark:border-slate-700">
      <button className="w-full text-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
        View All Notifications
      </button>
    </div>
  </div>
);

// Konten Dropdown Profil
const ProfileDropdown = () => (
  <div className="py-2">
    <div className="px-4 py-2 border-b dark:border-slate-700">
      <p className="text-sm font-medium dark:text-slate-200">Auditor JKN</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">auditor@bpjs.go.id</p>
    </div>
    <a href="#" className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
      <Settings size={16} className="mr-2" /> Profile Settings
    </a>
    <a href="#" className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
      <HelpCircle size={16} className="mr-2" /> Help Center
    </a>
    <div className="my-1 border-t dark:border-slate-700"></div>
    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-700">
      <LogOut size={16} className="mr-2" /> Log Out
    </a>
  </div>
);


// Komponen Header Utama
const Header = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'notif', 'profile', or null

  const closeDropdown = () => setActiveDropdown(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/30 dark:bg-slate-900/30 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/50">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center">
          {/* Tombol Menu Sidebar (Mobile/Tablet) */}
          <GlassButton onClick={toggleSidebar} className="mr-2">
            <Menu size={20} />
          </GlassButton>
        </div>

        {/* Search Bar (Tersembunyi di mobile) */}
        <div className="hidden md:flex">
          <SearchBar />
        </div>

        {/* Aksi Kanan */}
        <div className="flex items-center space-x-2">
          {/* Toggle Tema */}
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          {/* Tombol Notifikasi */}
          <div className="relative">
            <GlassButton onClick={() => toggleDropdown('notif')}>
              <Bell size={20} />
            </GlassButton>
            <DropdownMenu
              isOpen={activeDropdown === 'notif'}
              onClose={closeDropdown}
            >
              <NotificationDropdown />
            </DropdownMenu>
          </div>

          {/* Tombol Profil */}
          <div className="relative">
            <GlassButton onClick={() => toggleDropdown('profile')}>
              <User size={20} />
            </GlassButton>
            <DropdownMenu
              isOpen={activeDropdown === 'profile'}
              onClose={closeDropdown}
            >
              <ProfileDropdown />
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;