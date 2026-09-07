import React from 'react';

interface IconProps {
  active: boolean;
}

export const HomeIcon: React.FC<IconProps> = ({ active }) => (
  <svg
    className={`w-5 h-5 transition-colors ${active ? 'text-[#6B21A8]' : 'text-gray-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export const ShopIcon: React.FC<IconProps> = ({ active }) => (
  <svg
    className={`w-5 h-5 transition-colors ${active ? 'text-[#6B21A8]' : 'text-gray-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

export const EmiDuesIcon: React.FC<IconProps> = ({ active }) => (
  <svg
    className={`w-5 h-5 transition-colors ${active ? 'text-[#6B21A8]' : 'text-gray-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.8}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h6" />
  </svg>
);

export const LimitIcon: React.FC<IconProps> = ({ active }) => (
  <svg
    className={`w-5 h-5 transition-colors ${active ? 'text-[#6B21A8]' : 'text-gray-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({ active }) => (
  <svg
    className={`w-5 h-5 transition-colors ${active ? 'text-[#6B21A8]' : 'text-gray-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);