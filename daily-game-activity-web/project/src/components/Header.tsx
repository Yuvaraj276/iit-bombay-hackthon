import React from 'react';
import { Shield, Clock, Brain } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">GameGuardian</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#dashboard" className="hover:text-indigo-200 transition">Dashboard</a>
            <a href="#insights" className="hover:text-indigo-200 transition">Insights</a>
            <a href="#resources" className="hover:text-indigo-200 transition">Resources</a>
          </nav>
        </div>
      </div>
    </header>
  );
};