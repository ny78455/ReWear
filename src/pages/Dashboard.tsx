import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Star, Package, ArrowUpRight, ArrowDownLeft, Plus, Eye, Edit3, Trash2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const myItems = [
    {
      id: 1,
      title: 'Vintage Leather Jacket',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      points: 85,
      status: 'active',
      views: 23,
      swapRequests: 3
    },
    {
      id: 2,
      title: 'Summer Floral Dress',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      points: 60,
      status: 'active',
      views: 18,
      swapRequests: 1
    },
    {
      id: 3,
      title: 'Designer Jeans',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      points: 70,
      status: 'swapped',
      views: 31,
      swapRequests: 0
    }
  ];

  const recentSwaps = [
    {
      id: 1,
      type: 'outgoing',
      item: 'Designer Jeans',
      partner: 'Emma Wilson',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'incoming',
      item: 'Silk Scarf',
      partner: 'Michael Chen',
      date: '2024-01-12',
      status: 'completed'
    },
    {
      id: 3,
      type: 'outgoing',
      item: 'Winter Coat',
      partner: 'Sarah Johnson',
      date: '2024-01-10',
      status: 'pending'
    }
  ];

  const pointsHistory = [
    { date: '2024-01-15', description: 'Item swapped: Designer Jeans', points: +70, type: 'earned' },
    { date: '2024-01-12', description: 'Redeemed: Silk Scarf', points: -45, type: 'spent' },
    { date: '2024-01-10', description: 'Item listed: Winter Coat', points: +10, type: 'earned' },
    { date: '2024-01-08', description: 'Welcome bonus', points: +50, type: 'earned' }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-stone-800">Welcome back, {user?.name}!</h1>
                <p className="text-stone-600">Ready to discover your next favorite piece?</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-emerald-600">{user?.points}</div>
              <div className="text-sm text-stone-600">Available Points</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Items Listed</p>
                <p className="text-2xl font-bold text-stone-800">3</p>
              </div>
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Total Swaps</p>
                <p className="text-2xl font-bold text-stone-800">7</p>
              </div>
              <ArrowUpRight className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Points Earned</p>
                <p className="text-2xl font-bold text-stone-800">285</p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Eco Impact</p>
                <p className="text-2xl font-bold text-stone-800">12 lbs</p>
              </div>
              <ArrowDownLeft className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-stone-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'items', label: 'My Items' },
                { id: 'swaps', label: 'Swap History' },
                { id: 'points', label: 'Points History' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {recentSwaps.slice(0, 3).map(swap => (
                        <div key={swap.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${
                              swap.type === 'outgoing' ? 'bg-amber-100' : 'bg-emerald-100'
                            }`}>
                              {swap.type === 'outgoing' ? (
                                <ArrowUpRight className="h-4 w-4 text-amber-600" />
                              ) : (
                                <ArrowDownLeft className="h-4 w-4 text-emerald-600" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-stone-800">{swap.item}</p>
                              <p className="text-sm text-stone-600">with {swap.partner}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            swap.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {swap.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Performing Items */}
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-4">Top Performing Items</h3>
                    <div className="space-y-3">
                      {myItems.slice(0, 3).map(item => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-10 w-10 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-stone-800">{item.title}</p>
                              <p className="text-sm text-stone-600">{item.views} views</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-emerald-600">{item.points} pts</p>
                            <p className="text-sm text-stone-600">{item.swapRequests} requests</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'items' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-stone-800">My Items</h3>
                  <button
                    onClick={() => navigate('/add-item')}
                    className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Item</span>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myItems.map(item => (
                    <div key={item.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-stone-800 mb-2">{item.title}</h4>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-emerald-600 font-semibold">{item.points} points</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-stone-100 text-stone-800'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-stone-600 mb-4">
                          <span>{item.views} views</span>
                          <span>{item.swapRequests} requests</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 flex items-center justify-center space-x-1 bg-stone-100 text-stone-700 px-3 py-2 rounded-lg hover:bg-stone-200 transition-colors">
                            <Eye className="h-4 w-4" />
                            <span>View</span>
                          </button>
                          <button className="flex items-center justify-center space-x-1 bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg hover:bg-emerald-200 transition-colors">
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button className="flex items-center justify-center space-x-1 bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'swaps' && (
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-6">Swap History</h3>
                <div className="space-y-4">
                  {recentSwaps.map(swap => (
                    <div key={swap.id} className="bg-white border border-stone-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full ${
                            swap.type === 'outgoing' ? 'bg-amber-100' : 'bg-emerald-100'
                          }`}>
                            {swap.type === 'outgoing' ? (
                              <ArrowUpRight className="h-5 w-5 text-amber-600" />
                            ) : (
                              <ArrowDownLeft className="h-5 w-5 text-emerald-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-stone-800">{swap.item}</h4>
                            <p className="text-stone-600">
                              {swap.type === 'outgoing' ? 'Swapped to' : 'Received from'} {swap.partner}
                            </p>
                            <p className="text-sm text-stone-500">{swap.date}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          swap.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {swap.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'points' && (
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-6">Points History</h3>
                <div className="space-y-4">
                  {pointsHistory.map((entry, index) => (
                    <div key={index} className="bg-white border border-stone-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-stone-800">{entry.description}</p>
                          <p className="text-sm text-stone-500">{entry.date}</p>
                        </div>
                        <div className={`text-lg font-semibold ${
                          entry.type === 'earned' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {entry.points > 0 ? '+' : ''}{entry.points}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;