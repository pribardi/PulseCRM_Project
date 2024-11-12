import React from 'react';
import { Building2 } from 'lucide-react';

export function Companies() {
  return (
    <div className="text-center py-12">
      <Building2 className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No companies</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new company.</p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Building2 className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Add Company
        </button>
      </div>
    </div>
  );
}