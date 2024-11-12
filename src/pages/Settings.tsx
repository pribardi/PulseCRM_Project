import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export function Settings() {
  return (
    <div className="text-center py-12">
      <SettingsIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">Settings</h3>
      <p className="mt-1 text-sm text-gray-500">Configure your CRM settings and preferences.</p>
    </div>
  );
}