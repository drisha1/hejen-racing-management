import React from 'react';
import { Header } from './Header';
import Navigation from './Navigation';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};