import { Users, Building2 } from 'lucide-react';
import type { UserType } from '../types';

interface UserTypeSelectionProps {
  onSelect: (type: UserType) => void;
}

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto p-8">
      <button
        onClick={() => onSelect('public')}
        className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
      >
        <div className="flex flex-col items-center space-y-4">
          <Users className="w-16 h-16 text-green-600 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-semibold text-gray-800">Public User</h3>
          <p className="text-gray-600 text-center">
            List your recyclable materials and contribute to a sustainable future
          </p>
        </div>
      </button>

      <button
        onClick={() => onSelect('buyer')}
        className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
      >
        <div className="flex flex-col items-center space-y-4">
          <Building2 className="w-16 h-16 text-green-600 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-semibold text-gray-800">Buyer</h3>
          <p className="text-gray-600 text-center">
            Access a marketplace of recyclable materials and support sustainability
          </p>
        </div>
      </button>
    </div>
  );
}