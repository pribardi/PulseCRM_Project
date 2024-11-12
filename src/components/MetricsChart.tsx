import React from 'react';
import { BarChart3 } from 'lucide-react';

export function MetricsChart() {
  // Simulated data - in a real app, this would come from your data store
  const monthlyData = [
    { month: 'Jan', deals: 12, value: 45000 },
    { month: 'Feb', deals: 15, value: 65000 },
    { month: 'Mar', deals: 18, value: 85000 },
    { month: 'Apr', deals: 14, value: 55000 },
    { month: 'May', deals: 21, value: 95000 },
    { month: 'Jun', deals: 25, value: 120000 },
  ];

  const maxValue = Math.max(...monthlyData.map((d) => d.value));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Sales Performance</h3>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="mt-6 space-y-2">
        {monthlyData.map((data) => (
          <div key={data.month} className="relative">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{data.month}</span>
              <span className="text-gray-900 font-medium">
                ${(data.value / 1000).toFixed(1)}k
              </span>
            </div>
            <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${(data.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Deals</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {monthlyData.reduce((acc, curr) => acc + curr.deals, 0)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Value</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              ${(monthlyData.reduce((acc, curr) => acc + curr.value, 0) / 1000).toFixed(1)}k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}