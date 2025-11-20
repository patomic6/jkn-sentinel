import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { StatCard, TableCard, StatusBadge, AppButton } from '../components/ui/Common';

// Varian animasi untuk transisi halaman
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Halaman Alerts
export default function AlertsPage() {
  const alerts = [
    { id: 'AL001', type: 'Upcoding', date: '2025-11-10', risk: 'High', action: 'Investigate' },
    { id: 'AL002', type: 'Fiktif', date: '2025-11-09', risk: 'Medium', action: 'Review' },
    { id: 'AL003', type: 'Duplikat', date: '2025-11-08', risk: 'Medium', action: 'Review' },
    { id: 'AL004', type: 'Unbundling', date: '2025-11-07', risk: 'Low', action: 'Monitor' },
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
      <h4 className="text-2xl font-semibold text-gray-700 dark:text-slate-200">Alerts</h4>

      {/* Kartu Ringkasan Peringatan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="High Risk" value={50} Icon={AlertTriangle} color="text-red-500 dark:text-red-400" />
        <StatCard title="Medium Risk" value={40} Icon={AlertTriangle} color="text-yellow-600 dark:text-yellow-400" />
        <StatCard title="Low Risk" value={30} Icon={AlertTriangle} color="text-green-500 dark:text-green-400" />
      </div>

      {/* Tabel Daftar Peringatan */}
      <h4 className="text-xl font-semibold text-gray-700 dark:text-slate-200 pt-4">Alert List</h4>
      <TableCard
        headers={['Alert ID', 'Type', 'Date', 'Risk Level', 'Action']}
        data={alerts.map(alert => [
          alert.id, 
          alert.type, 
          alert.date, 
          <StatusBadge status={alert.risk} />, 
          <AppButton flat size="sm">{alert.action}</AppButton>
        ])}
      />
    </motion.div>
  );
};