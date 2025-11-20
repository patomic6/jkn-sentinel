import React, { useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { Download } from 'lucide-react'; // Hanya impor ikon yang spesifik di sini

// Komponen untuk menganimasikan angka
export function AnimatedNumber({ value }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    // Animasikan dari 0 ke nilai target
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(latest) {
        // Format dengan koma, tanpa desimal
        node.textContent = Math.round(latest).toLocaleString('en-US');
      }
    });

    return () => controls.stop();
  }, [value]); // Hanya bergantung pada 'value'

  return <span ref={nodeRef}>0</span>; // Mulai dari 0
}

// Tombol Neumorphic diubah namanya menjadi AppButton
// Gayanya diubah ke "Soft UI" (bayangan simpel)
export const AppButton = ({ children, onClick, flat = false, size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
  };
  // Gaya Cembung (Outset) -> Diubah ke Primary Button
  const primaryStyle = `
    bg-emerald-500 text-white
    shadow-md hover:shadow-lg hover:bg-emerald-600
    active:shadow-inner active:scale-95
    dark:shadow-emerald-700/50
  `;
  // Gaya Datar -> Diubah ke Secondary Button
  const secondaryStyle = `
    bg-white dark:bg-slate-700
    shadow-sm hover:shadow-md
    active:shadow-inner active:scale-95
    border border-slate-200 dark:border-slate-600
  `;
  
  return (
    <button
      onClick={onClick}
      className={`
        rounded-lg
        font-semibold text-gray-700 dark:text-slate-300
        transition-all duration-200 flex items-center justify-center
        ${flat ? secondaryStyle : primaryStyle}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Tombol Kaca (BARU) - Untuk di Header
export const GlassButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`
      p-2.5 rounded-lg text-gray-700 dark:text-slate-300
      hover:bg-black/10 dark:hover:bg-white/10
      active:bg-black/20 dark:active:bg-white/20
      transition-colors duration-200
      ${className}
    `}
  >
    {children}
  </button>
);


// Kartu Neumorphic diubah menjadi SoftCard
// Gaya diubah ke "Soft UI" (bayangan simpel)
export const SoftCard = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white dark:bg-slate-800 
      rounded-2xl 
      shadow-lg
      dark:shadow-black/20
      p-6 ${className}
    `}>
      {children}
    </div>
  );
};

// Kartu Statistik
// Menggunakan SoftCard (NeumorphicCard yang sudah diubah)
export const StatCard = ({ title, value, unit, prefix, Icon, color = 'text-gray-700' }) => {
  const isNumeric = typeof value === 'number';

  return (
    <SoftCard className="p-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 dark:text-slate-400">{title}</span>
          <span className={`text-2xl font-bold ${color} dark:text-slate-200`}>
            {prefix}
            {/* Gunakan AnimatedNumber jika 'value' adalah angka */}
            {isNumeric ? <AnimatedNumber value={value} /> : value}
            {unit}
          </span>
        </div>
        <div className={`
          rounded-full p-3 
          bg-slate-100 dark:bg-slate-700
          shadow-[inset_3px_3px_6px_#0000001a,inset_-3px_-3px_6px_#ffffff]
          dark:shadow-[inset_3px_3px_6px_#0e1118,inset_-3px_-3px_6px_#3a435a]
          ${color}
        `}>
          <Icon size={24} />
        </div>
      </div>
    </SoftCard>
  );
};

// Input Form Neumorphic diubah ke SoftInput
// Gaya diubah ke "Soft UI" (border simpel)
export const SoftInput = ({ label, type = 'text' }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-600 dark:text-slate-400 mb-1">{label}</label>
      <input
        type={type}
        className={`
          w-full rounded-lg bg-slate-100 dark:bg-slate-700 
          text-gray-700 dark:text-slate-300
          border border-slate-300 dark:border-slate-600
          focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500
          transition-colors
          p-3 outline-none
          ${type === 'date' ? 'cursor-text' : ''}
        `}
      />
    </div>
  );
};

// Tombol Filter
// Diubah ke "Soft UI" (border simpel)
export const FilterButton = ({ label }) => {
  return (
    <button className={`
      text-sm font-medium text-gray-700 dark:text-slate-300
      bg-white dark:bg-slate-700 
      rounded-full px-4 py-2 
      shadow-sm
      border border-slate-200 dark:border-slate-600
      hover:shadow-md hover:border-emerald-400
      dark:hover:border-emerald-500
      transition-all
    `}>
      {label}
    </button>
  );
};

// Varian untuk animasi tabel (stagger)
const tableContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Jeda antar baris
    }
  }
};

const tableRowVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } }
};

// Kartu untuk membungkus Tabel
// Diubah ke "Soft UI"
export const TableCard = ({ headers, data }) => {
  return (
    // Menggunakan gaya SoftCard
    <div className={`
      bg-white dark:bg-slate-800
      rounded-2xl 
      shadow-lg
      dark:shadow-black/20
      overflow-x-auto
    `}>
      <div className="w-full min-w-[700px] overflow-hidden">
        <table className="w-full">
          <thead className="border-b-2 border-slate-100 dark:border-slate-700">
            <tr>
              {headers.map((header) => (
                <th key={header} className="p-4 text-left text-sm font-semibold text-gray-500 dark:text-slate-400 uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <motion.tbody
            variants={tableContainerVariants}
            initial="hidden"
            animate="show"
          >
            {data.map((row, rowIndex) => (
              <motion.tr 
                key={rowIndex} 
                variants={tableRowVariants}
                className="border-b border-slate-100 dark:border-slate-700 last:border-none hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-4 text-sm text-gray-700 dark:text-slate-300">
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};


/**
 * Custom Hook untuk mendeteksi klik di luar elemen
 */
export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Jika ref tidak ada atau klik terjadi di dalam ref, jangan lakukan apa-apa
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};


/**
 * Komponen Modal (Pop-up)
 */
export const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          ></div>

          {/* Konten Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-slate-800"
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-4 border-b dark:border-slate-700">
              <h4 className="text-lg font-semibold dark:text-slate-200">{title}</h4>
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body Modal */}
            <div className="mt-4">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


/**
 * Komponen Dropdown Menu (Untuk Profil & Notifikasi)
 */
export const DropdownMenu = ({ isOpen, onClose, align = 'right', children }) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, onClose); // Gunakan hook di sini

  const alignmentClass = align === 'right' ? 'right-0' : 'left-0';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef} // Tambahkan ref di sini
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className={`absolute ${alignmentClass} top-full mt-2 w-64 rounded-lg bg-white shadow-xl dark:bg-slate-800 border dark:border-slate-700 z-40`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// Badge Status
export const StatusBadge = ({ status }) => {
  const statusColors = {
    'High Risk': 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Anomalous': 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Medium Risk': 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    'Review': 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    'Resolved': 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Normal': 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Low': 'bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Monitor': 'bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Investigating': 'bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'High': 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Medium': 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
      {status}
    </span>
  );
};