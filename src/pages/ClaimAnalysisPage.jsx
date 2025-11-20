import React from 'react';
import { motion } from 'framer-motion';
import { SoftCard, FilterButton, TableCard, StatusBadge } from '../components/ui/Common';
import { AnomalyDetectionChart } from '../components/charts/Charts';

// Varian animasi untuk transisi halaman
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Halaman Claim Analysis
export default function ClaimAnalysisPage() {
  const claims = [
    { id: 'CL001', provider: 'Hospital A', date: '2025-11-10', amount: 'Rp1M', status: 'Anomalous' },
    { id: 'CL002', provider: 'Clinic B', date: '2025-11-09', amount: 'Rp500K', status: 'Normal' },
    { id: 'CL003', provider: 'Hospital A', date: '2025-11-08', amount: 'Rp2.5M', status: 'Anomalous' },
    { id: 'CL004', provider: 'Lab C', date: '2025-11-07', amount: 'Rp150K', status: 'Normal' },
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
      <h4 className="text-2xl font-semibold text-gray-700 dark:text-slate-200">Claim Analysis</h4>
      
      {/* Filter Bar */}
      <SoftCard className="p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-semibold dark:text-slate-300">Filters:</span>
          <FilterButton label="Date Range" />
          <FilterButton label="Claim Type" />
          <FilterButton label="Provider" />
          <FilterButton label="Status" />
        </div>
      </SoftCard>

      {/* Grafik Anomaly Detection */}
      <SoftCard className="h-80">
        <h5 className="text-lg font-semibold text-gray-700 dark:text-slate-200 mb-4">Anomaly Detection Chart</h5>
        <AnomalyDetectionChart />
      </SoftCard>

      {/* Tabel Daftar Klaim */}
      <h4 className="text-xl font-semibold text-gray-700 dark:text-slate-200 pt-4">Claim List</h4>
      <TableCard
        headers={['Claim ID', 'Provider', 'Date', 'Amount', 'Status']}
        data={claims.map(claim => [
          claim.id, 
          claim.provider, 
          claim.date, 
          claim.amount, 
          <StatusBadge status={claim.status} />
        ])}
      />
    </motion.div>
  );
};