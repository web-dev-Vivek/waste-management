import { LayoutDashboard, Package, TrendingUp, MessageCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import type { Material } from '../types';

interface BuyerDashboardProps {
  onBack: () => void;
}

const SAMPLE_MATERIALS: Material[] = [
  {
    id: '1',
    category: 'Plastic',
    quantity: 100,
    location: 'New York, NY',
    price: 50,
    description: 'Clean PET bottles',
    userId: 'user1',
    createdAt: new Date()
  },
  {
    id: '2',
    category: 'Paper',
    quantity: 200,
    location: 'Los Angeles, CA',
    price: 30,
    description: 'Cardboard boxes',
    userId: 'user2',
    createdAt: new Date()
  }
];

export function BuyerDashboard({ onBack }: BuyerDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Total Purchases', 'Active Listings', 'Messages'].map((metric) => (
              <div key={metric} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-medium text-gray-800">{metric}</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">0</p>
              </div>
            ))}
          </div>
        );
      case 'materials':
        return (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Search materials..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="plastic">Plastic</option>
                <option value="paper">Paper</option>
                <option value="metal">Metal</option>
              </select>
            </div>

            <div className="grid gap-6">
              {SAMPLE_MATERIALS.map((material) => (
                <div key={material.id} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{material.category}</h3>
                      <p className="text-gray-600 mt-1">{material.description}</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-500">Quantity: {material.quantity}kg</p>
                        <p className="text-sm text-gray-500">Location: {material.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${material.price}</p>
                      <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div>Coming soon...</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 space-y-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Back to Home</span>
          </button>
          <h2 className="text-xl font-semibold text-gray-800">Buyer Dashboard</h2>
        </div>
        <nav className="mt-6">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
            { id: 'materials', icon: Package, label: 'Materials' },
            { id: 'insights', icon: TrendingUp, label: 'Market Insights' },
            { id: 'messages', icon: MessageCircle, label: 'Messages' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors ${
                activeTab === item.id ? 'bg-green-50 text-green-600' : ''
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}