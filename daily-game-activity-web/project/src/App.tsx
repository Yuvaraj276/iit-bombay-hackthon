import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Resources } from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Dashboard />
        <Resources />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">GameGuardian - Promoting Responsible Gaming</p>
          <p className="text-sm text-gray-400">© 2024 GameGuardian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;