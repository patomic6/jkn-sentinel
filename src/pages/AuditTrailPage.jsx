import React from 'react';
import { motion } from 'framer-motion';
import { SoftCard, FilterButton, TableCard } from '../components/ui/Common.jsx';

// Varian animasi untuk transisi halaman
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Halaman Audit Trail
export default function AuditTrailPage() {
  const logs = [
    { id: 'LOG001', user: 'Admin', action: 'Verified Claim', date: '2025-11-10', details: 'Claim ID: CL001' },
    { id: 'LOG002', user: 'Auditor', action: 'Flagged Alert', date: '2025-11-09', details: 'Alert ID: AL001' },
    { id: 'LOG003', user: 'System', action: 'Generated Report', date: '2025-11-09', details: 'Report ID: RP002' },
    { id: 'LOG004', user: 'Admin', action: 'Updated Settings', date: '2025-11-08', details: 'Thresholds updated' },
  ];
  return (
    <motion.div 
      className="space-y-8"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageVariants.transition}
    >
      <h4 className="text-2xl font-semibold text-gray-700 dark:text-slate-200">Audit Trail</h4>
      
      {/* Filter Bar */}
      <SoftCard className="p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-semibold dark:text-slate-300">Filters:</span>
          <FilterButton label="Date Range" />
          <FilterButton label="User" />
          <FilterButton label="Action Type" />
        </div>
      </SoftCard>

      {/* Tabel Log Audit */}
      <h4 className="text-xl font-semibold text-gray-700 dark:text-slate-200 pt-4">Audit Logs</h4>
      <TableCard
        headers={['Log ID', 'User', 'Action', 'Date', 'Details']}
        data={logs.map(log => [
          log.id, 
          log.user, 
          log.action, 
          log.date, 
          log.details
        ])}
      />
    </motion.div>
  );
};