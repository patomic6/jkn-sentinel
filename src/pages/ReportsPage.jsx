import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { SoftCard, SoftInput, AppButton, TableCard } from '../components/ui/Common';
import { ReportPreviewChart } from '../components/charts/Charts';

// Varian animasi untuk transisi halaman
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Halaman Reports
export default function ReportsPage() {
  const reports = [
    { id: 'RP001', type: 'Fraud Summary', date: '2025-11-10' },
    { id: 'RP002', type: 'Claim Trends', date: '2025-11-09' },
    { id: 'RP003', type: 'Provider Anomaly', date: '2025-11-08' },
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
      <h4 className="text-2xl font-semibold text-gray-700 dark:text-slate-200">Reports</h4>
      
      {/* Form Generate Report */}
      <SoftCard className="p-6 space-y-4">
        <h5 className="text-lg font-semibold dark:text-slate-200">Generate Report</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SoftInput label="Report Type" />
          <SoftInput label="Start Date" type="date" />
          <SoftInput label="End Date" type="date" />
        </div>
        <AppButton>Generate</AppButton>
      </SoftCard>

      {/* Grafik Report Preview */}
      <SoftCard className="h-80">
        <h5 className="text-lg font-semibold text-gray-700 dark:text-slate-200 mb-4">Report Preview Chart</h5>
        <ReportPreviewChart />
      </SoftCard>

      {/* Tabel Laporan */}
      <h4 className="text-xl font-semibold text-gray-700 dark:text-slate-200 pt-4">Generated Reports</h4>
      <TableCard
        headers={['Report ID', 'Type', 'Date', 'Download']}
        data={reports.map(report => [
          report.id, 
          report.type, 
          report.date, 
          <AppButton flat size="sm">
            <Download size={16} className="mr-2" />
            Download
          </AppButton>
        ])}
      />
    </motion.div>
  );
};