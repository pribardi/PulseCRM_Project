import React from 'react';
import { useContactsStore } from '../store/contacts';

export function ContactFilters() {
  const contacts = useContactsStore((state) => state.contacts);
  const [selectedStatus, setSelectedStatus] = React.useState<string>('all');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    contacts.forEach((contact) => {
      contact.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [contacts]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700">Status</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="lead">Lead</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Tags</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium ${
                selectedTags.includes(tag)
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}