import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  BarChart, 
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

// -- Data Mock untuk Grafik --
const claimTrendsData = [
  { name: 'Jan', claims: 4000, anomalies: 240 },
  { name: 'Feb', claims: 3000, anomalies: 139 },
  { name: 'Mar', claims: 2000, anomalies: 980 },
  { name: 'Apr', claims: 2780, anomalies: 390 },
  { name: 'Mei', claims: 1890, anomalies: 480 },
  { name: 'Jun', claims: 2390, anomalies: 380 },
  { name: 'Jul', claims: 3490, anomalies: 430 },
];

const anomalyData = [
  { name: 'Upcoding', value: 400 },
  { name: 'Fiktif', value: 300 },
  { name: 'Duplikat', value: 300 },
  { name: 'Unbundling', value: 200 },
  { name: 'Lainnya', value: 100 },
];

// -- Komponen-Komponen Grafik --

export const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      // Tooltip diubah ke Soft UI
      <div className="bg-white/90 dark:bg-slate-800/90 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
        <p className="label text-sm font-semibold text-gray-700 dark:text-slate-200">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-sm">
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Grafik Garis untuk Dashboard
export const ClaimTrendsChart = () => (
  <ResponsiveContainer width="100%" height="90%">
    <LineChart data={claimTrendsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
      <XAxis 
        dataKey="name" 
        tick={{ fill: 'currentColor' }} 
        className="text-xs text-gray-600 dark:text-slate-400" 
        stroke="currentColor"
        strokeOpacity={0.3}
      />
      <YAxis 
        tick={{ fill: 'currentColor' }} 
        className="text-xs text-gray-600 dark:text-slate-400" 
        stroke="currentColor"
        strokeOpacity={0.3}
      />
      <Tooltip content={<ChartTooltip />} />
      <Legend />
      <Line type="monotone" dataKey="claims" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
      {/* Aksen hijau/emerald */}
      <Line type="monotone" dataKey="anomalies" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

// Grafik Batang untuk Claim Analysis
export const AnomalyDetectionChart = () => (
  <ResponsiveContainer width="100%" height="90%">
    <BarChart data={anomalyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
      <XAxis 
        dataKey="name" 
        tick={{ fill: 'currentColor' }} 
        className="text-xs text-gray-600 dark:text-slate-400" 
        stroke="currentColor"
        strokeOpacity={0.3}
      />
      <YAxis 
        tick={{ fill: 'currentColor' }} 
        className="text-xs text-gray-600 dark:text-slate-400" 
        stroke="currentColor"
        strokeOpacity={0.3}
      />
      <Tooltip content={<ChartTooltip />} />
      {/* Aksen hijau/emerald */}
      <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

// Grafik Garis untuk Laporan (Mirip ClaimTrends)
export const ReportPreviewChart = () => (
  <ResponsiveContainer width="100%" height="90%">
    <LineChart data={claimTrendsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
      <XAxis 
        dataKey="name" 
        tick={{ fill: 'currentColor' }} 
        className="text-xs text-gray-600 dark:text-slate-400" 
        stroke="currentColor"
        strokeOpacity={0.3}
      />
      <YAxis 
        tick={{ fill: 'currentColor' }} 
        className="text-xs text-gray-600 dark:text-slate-400" 
        stroke="currentColor"
        strokeOpacity={0.3}
      />
      <Tooltip content={<ChartTooltip />} />
      <Legend />
      {/* Aksen hijau/emerald */}
      <Line type="monotone" dataKey="anomalies" stroke="#10b981" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);