import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign,
  TrendingUp,
  AlertOctagon,
  AlertTriangle
} from 'lucide-react';
import { StatCard, SoftCard, TableCard, StatusBadge } from '../components/ui/Common';
import { ClaimTrendsChart } from '../components/charts/Charts';

// Varian animasi untuk transisi halaman
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Halaman Dashboard
export default function DashboardPage() {
  const recentAlerts = [
    { id: '001', type: 'Upcoding', date: '2025-11-10', status: 'High Risk' },
    { id: '002', type: 'Fiktif', date: '2025-11-09', status: 'Resolved' },
    { id: '003', type: 'Duplikat', date: '2025-11-08', status: 'Medium Risk' },
    { id: '004', type: 'Unbundling', date: '2025-11-07', status: 'Investigating' },
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
      <h4 className="text-2xl font-semibold text-gray-700 dark:text-slate-200">Overview</h4>
      
      {/* Grid untuk Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Claims" value={300} unit="M" Icon={TrendingUp} />
        <StatCard title="Detected Anomalies" value="5-10%" Icon={AlertOctagon} />
        <StatCard title="Fraud Alerts" value={120} prefix="Active: " Icon={AlertTriangle} />
        <StatCard title="Potential Savings" value="Rp5-10T" Icon={DollarSign} />
      </div>

      {/* Grafik Claim Trends */}
      <SoftCard className="h-80">
        <h5 className="text-lg font-semibold text-gray-700 dark:text-slate-200 mb-4">Claim Trends</h5>
        <ClaimTrendsChart />
      </SoftCard>

      {/* Tabel Peringatan Terbaru */}
      <h4 className="text-xl font-semibold text-gray-700 dark:text-slate-200 pt-4">Recent Alerts</h4>
      <TableCard
        headers={['ID', 'Type', 'Date', 'Status']}
        data={recentAlerts.map(alert => [
          alert.id, 
          alert.type, 
          alert.date, 
          <StatusBadge status={alert.status} />
        ])}
      />
    </motion.div>
  );
};