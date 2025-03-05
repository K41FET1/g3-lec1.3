import React from 'react';
import DarkLight from './DarkLight';

export default function Header() {
  return (
    <div>
      <header className="w-full h-[10dvh] bg-transparent px-[150px] py-[100px] flex items-center justify-end">
        <div className="hidden items-center gap-5">
          <div className="w-15 h-15 bg-purple-200 rounded-lg flex items-center justify-center">
            <img src="../assets/Accessibility.svg" alt="Accessibility Logo" />
          </div>
          <p className="text-lg font-semibold text-gray-900">Accessibility</p>
        </div>
        <DarkLight />
      </header>
    </div>
  );
}
