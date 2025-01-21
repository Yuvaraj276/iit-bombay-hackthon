import React from 'react';
import { Clock, Brain, AlertTriangle, Award } from 'lucide-react';
import { DailyStats } from '../types';

const mockDailyStats: DailyStats = {
  totalPlayTime: 120,
  breaksCount: 3,
  focusScore: 85
};

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Gaming Wellness Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-6 h-6 text-indigo-600" />
            <h3 className="text-lg font-semibold">Play Time Today</h3>
          </div>
          <p className="text-3xl font-bold text-indigo-600">{mockDailyStats.totalPlayTime} min</p>
          <p className="text-sm text-gray-600 mt-2">Recommended: 180 min/day</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold">Focus Score</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{mockDailyStats.focusScore}%</p>
          <p className="text-sm text-gray-600 mt-2">Based on break frequency and duration</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-6 h-6 text-purple-600" />
            <h3 className="text-lg font-semibold">Healthy Gaming Score</h3>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                  Good
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
              <div className="w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Responsible Gaming Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700">Take a 5-minute break every 45 minutes of gaming</p>
          </div>
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700">Stay hydrated and maintain good posture while gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
};