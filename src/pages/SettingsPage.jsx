import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { SoftCard, SoftInput, AppButton } from '../components/ui/Common';

// Varian animasi untuk transisi halaman
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Halaman Settings
export default function SettingsPage({ theme, toggleTheme }) {
  return (
    <motion.div 
      className="space-y-8 max-w-4xl"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageVariants.transition}
    >
      <h4 className="text-2xl font-semibold text-gray-700 dark:text-slate-200">Settings</h4>
      
      {/* User Preferences */}
      <SoftCard className="p-6 space-y-6">
        <h5 className="text-lg font-semibold dark:text-slate-200">User Preferences</h5>
        <SoftInput label="Email Notifications" />
        <SoftInput label="In-App Notifications" />
        {/* Toggle Tema di Halaman Settings */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-600 dark:text-slate-400">Theme (Light/Dark)</label>
          {/* Tombol di sini bisa tetap Neumorphic/AppButton atau GlassButton */}
          <AppButton onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </AppButton>
        </div>
      </SoftCard>

      {/* System Configuration */}
      <SoftCard className="p-6 space-y-6">
        <h5 className="text-lg font-semibold dark:text-slate-200">System Configuration</h5>
        <SoftInput label="API Integrations" />
        <SoftInput label="Alert Thresholds" />
        <SoftInput label="User Roles" />
      </SoftCard>

      <AppButton>Save Changes</AppButton>
    </motion.div>
  );
};