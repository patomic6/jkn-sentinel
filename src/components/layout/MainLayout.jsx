import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// MainLayout membungkus Sidebar, Header, dan konten (children)
// Ini juga mengelola state buka/tutup sidebar
export default function MainLayout({ children, page, setPage, theme, toggleTheme }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Sidebar 
        activePage={page} 
        setPage={setPage} 
        isSidebarOpen={isSidebarOpen} 
      />
      
      {/* Konten utama kini memiliki margin kiri yang disesuaikan dengan status sidebar */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme} 
          toggleSidebar={toggleSidebar} 
        />
        
        {/* Konten utama yang dapat di-scroll */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
}