import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Users, Package, Flag, TrendingUp, Check, X, Eye, MoreVertical } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAuthenticated || !user?.isAdmin) {
    navigate('/');
    return null;
  }

  const pendingItems = [
    {
      id: 1,
      title: 'Vintage Band T-Shirt',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      owner: 'Alex Johnson',
      submittedDate: '2024-01-15',
      category: 'Tops',
      points: 45,
      status: 'pending'
    },
    {
      id: 2,
      title: 'Designer Handbag',
      image: 'https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      owner: 'Sarah Miller',
      submittedDate: '2024-01-14',
      category: 'Accessories',
      points: 120,
      status: 'pending'
    },
    {
      id: 3,
      title: 'Casual Sneakers',
      image: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      owner: 'Mike Chen',
      submittedDate: '2024-01-13',
      category: 'Shoes',
      points: 75,
      status: 'pending'
    }
  ];

  const users = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      joinDate: '2023-06-15',
      totalSwaps: 23,
      points: 150,
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      joinDate: '2023-08-22',
      totalSwaps: 18,
      points: 95,
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@example.com',
      joinDate: '2023-09-10',
      totalSwaps: 31,
      points: 220,
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  const handleApproveItem = (itemId: number) => {
    console.log('Approving item:', itemId);
  };

  const handleRejectItem = (itemId: number) => {
    console.log('Rejecting item:', itemId);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Admin Panel</h1>
          <p className="text-stone-600">Manage users, moderate content, and oversee platform operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Total Users</p>
                <p className="text-2xl font-bold text-stone-800">5,247</p>
                <p className="text-sm text-green-600">+12% this month</p>
              </div>
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Total Items</p>
                <p className="text-2xl font-bold text-stone-800">12,459</p>
                <p className="text-sm text-green-600">+8% this month</p>
              </div>
              <Package className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Pending Reviews</p>
                <p className="text-2xl font-bold text-stone-800">23</p>
                <p className="text-sm text-red-600">Needs attention</p>
              </div>
              <Flag className="h-8 w-8 text-red-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-600">Active Swaps</p>
                <p className="text-2xl font-bold text-stone-800">834</p>
                <p className="text-sm text-green-600">+15% this week</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-stone-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'pending', label: 'Pending Items' },
                { id: 'users', label: 'Manage Users' },
                { id: 'reports', label: 'Reports' }
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
                  {tab.id === 'pending' && (
                    <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                      {pendingItems.length}
                    </span>
                  )}
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
                      <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                        <div>
                          <p className="font-medium text-stone-800">New user registration</p>
                          <p className="text-sm text-stone-600">alice@example.com joined</p>
                        </div>
                        <span className="text-sm text-stone-500">2 min ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                        <div>
                          <p className="font-medium text-stone-800">Item approved</p>
                          <p className="text-sm text-stone-600">Vintage Jacket by Sarah Chen</p>
                        </div>
                        <span className="text-sm text-stone-500">5 min ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                        <div>
                          <p className="font-medium text-stone-800">Swap completed</p>
                          <p className="text-sm text-stone-600">Emma & Michael exchanged items</p>
                        </div>
                        <span className="text-sm text-stone-500">12 min ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Platform Stats */}
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-4">Platform Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Items processed today</span>
                        <span className="font-semibold text-stone-800">47</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">New swaps today</span>
                        <span className="font-semibold text-stone-800">23</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">User satisfaction</span>
                        <span className="font-semibold text-green-600">4.8/5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Platform uptime</span>
                        <span className="font-semibold text-green-600">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pending' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-stone-800">Pending Item Reviews</h3>
                  <span className="text-sm text-stone-600">
                    {pendingItems.length} items awaiting approval
                  </span>
                </div>
                
                <div className="space-y-4">
                  {pendingItems.map(item => (
                    <div key={item.id} className="bg-white border border-stone-200 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-stone-800">{item.title}</h4>
                              <p className="text-stone-600">by {item.owner}</p>
                            </div>
                            <span className="text-emerald-600 font-semibold">{item.points} points</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-stone-600 mb-4">
                            <span>Category: {item.category}</span>
                            <span>Submitted: {item.submittedDate}</span>
                          </div>
                          <div className="flex space-x-3">
                            <button
                              onClick={() => handleApproveItem(item.id)}
                              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                              <Check className="h-4 w-4" />
                              <span>Approve</span>
                            </button>
                            <button
                              onClick={() => handleRejectItem(item.id)}
                              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                              <X className="h-4 w-4" />
                              <span>Reject</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-stone-100 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-200 transition-colors">
                              <Eye className="h-4 w-4" />
                              <span>View Details</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-stone-800">Manage Users</h3>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Join Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Swaps
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Points
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        {users.map(user => (
                          <tr key={user.id} className="hover:bg-stone-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="h-10 w-10 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-stone-900">{user.name}</div>
                                  <div className="text-sm text-stone-500">{user.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                              {user.joinDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-900">
                              {user.totalSwaps}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-900">
                              {user.points}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-stone-400 hover:text-stone-600">
                                <MoreVertical className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-6">Platform Reports</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-stone-200 p-6 rounded-xl">
                    <h4 className="font-semibold text-stone-800 mb-4">Monthly Growth</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-stone-600">New Users</span>
                        <span className="font-semibold text-green-600">+342</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Items Listed</span>
                        <span className="font-semibold text-green-600">+1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Successful Swaps</span>
                        <span className="font-semibold text-green-600">+823</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200 p-6 rounded-xl">
                    <h4 className="font-semibold text-stone-800 mb-4">Top Categories</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-stone-600">Tops</span>
                        <span className="font-semibold text-stone-800">34%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Dresses</span>
                        <span className="font-semibold text-stone-800">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Outerwear</span>
                        <span className="font-semibold text-stone-800">22%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;