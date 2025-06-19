import React, { useState } from 'react';
import { storageItems } from './test-data/data';
import { Link } from 'react-router-dom';

export default function Storage() {
  const [query, setQuery] = useState('');
  const results = storageItems.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Search Storage</h2>
      <input className="border p-2 w-full my-2" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul className="mt-4">
        {results.map((item, i) => <li key={i}>{item}</li>)}
        {results.length === 0 && <li className="text-gray-500">No results found.</li>}
      </ul>
      <div className="mt-6 space-x-4">
        <Link to="/create-user" className="text-blue-600 underline">Create User</Link>
        <Link to="/logout" className="text-red-600 underline">Logout</Link>
      </div>
    </div>
  );
}