import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src="/hejen-racing-management/logo.jpg"
            alt="Hejen Racing Committee Logo" 
            className="h-12"
          />
          <h1 className="text-2xl font-bold">برنامج ادارة عزب اللجنة</h1>
        </div>
      </div>
    </header>
  );
};