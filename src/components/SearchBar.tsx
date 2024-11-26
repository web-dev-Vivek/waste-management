import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm"
        placeholder="Search for waste materials, recycling tips, or sustainable practices..."
      />
    </div>
  );
}