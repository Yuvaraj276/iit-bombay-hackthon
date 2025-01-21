import React from 'react';
import { Book, Phone, Users, Heart } from 'lucide-react';

export const Resources = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Support Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Book className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Educational Content</h3>
            <p className="text-gray-600">Learn about responsible gaming practices and maintaining a healthy balance.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Phone className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 Helpline</h3>
            <p className="text-gray-600">Professional support available anytime you need to talk.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Users className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Connect with others who share similar experiences.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Heart className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Wellness Tools</h3>
            <p className="text-gray-600">Access tools and resources for maintaining gaming-life balance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};