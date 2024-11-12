import React from 'react';
import { BarChart3, Users, Building2, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { TaskList } from '../components/TaskList';
import { MetricsChart } from '../components/MetricsChart';

const stats = [
  { name: 'Total Contacts', value: '2,651', icon: Users, change: '+4.75%', changeType: 'positive' },
  { name: 'Active Deals', value: '$12.5M', icon: TrendingUp, change: '+54.02%', changeType: 'positive' },
  { name: 'Companies', value: '521', icon: Building2, change: '-1.39%', changeType: 'negative' },
  { name: 'Conversion Rate', value: '24.57%', icon: BarChart3, change: '+6.18%', changeType: 'positive' },
];

export function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p
                className={cn(
                  'ml-2 flex items-baseline text-sm font-semibold',
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                )}
              >
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Tasks & Follow-ups</h3>
            <div className="mt-6">
              <TaskList />
            </div>
          </div>
        </div>

        <MetricsChart />
      </div>
    </div>
  );
}